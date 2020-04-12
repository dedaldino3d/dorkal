# from backend.posts.serializers import ImageSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from backend.users.models import UserProfile, Locations
from django.conf import settings
from django.contrib.auth import authenticate, get_user_model
from django.db import transaction
from django.utils.translation import gettext_lazy as _
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers, exceptions

UserModel = get_user_model()



class UserProfileSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(source='get_full_name', read_only=True)
    short_name = serializers.CharField(source='get_short_name', read_only=True)


    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at', 'user',)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.location = validated_data.get('location', instance.location)
        instance.occupation = validated_data.get('occupation', instance.occupation)
        instance.DOB = validated_data.get('DOB', instance.DOB)
        instance.about = validated_data.get('about', instance.about)
        instance.save()
        return instance


####################################################

# Custom serializer based on rest_auth.serializers.UserDetailsSerializer
class UserDetailsSerializer(serializers.ModelSerializer):
    """
    User model w/o password
    """
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    friends_count = serializers.SerializerMethodField()
    is_self = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()

    profile = UserProfileSerializer(partial=True)

    class Meta:
        model = UserModel
        fields = ('user_id', 'username', 'email', 'phone_number', 'followers_count',
                  'following_count', 'friends_count', 'is_self', 'following', 'profile')
        read_only_fields = ('email',)

    def get_following_count(self, obj):
        return obj.relationships.objects.following(obj).count()

    def get_followers_count(self, obj):
        return obj.relationships.objects.followers(obj).count()

    def get_friends_count(self, obj):
        return obj.relationships.objects.friends(obj).count()
        
    def get_following(self, obj):
        if 'request' in self.context:
            user = self.context['request'].user
            if (obj in user.get_following(user)):
                return True
            else:
                return False
        return False

    def get_is_self(self, user):
        if 'request' in self.context:
            request =  self.context['request']
            if user.user_id == request.user.user_id:
                return True
            else:
                return False
        return False

    # Nested writes are not possible by default so you should implement it yourself
    # https://www.django-rest-framework.org/api-guide/relations/#writable-nested-serializers

    def update(self, instance, validated_data):

        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)

        instance.save()

        profile = instance.profile
        profile_data = validated_data.get('profile', profile)

        profile_serializer = UserProfileSerializer(data=profile_data, partial=True)

        if profile_serializer.is_valid():
            # update profile data giving a 'profile' instance
            profile = profile_serializer.update(instance=profile, validated_data=profile_data)
            # store profile in profile key from validated_data
            validated_data['profile'] = profile
            profile.save()

        return super(UserDetailsSerializer, self).update(instance, validated_data)


####################################################

class ListUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = (
            'user_id',
            'username',
            'email',
            'phone_number',
            'created_at',
            'updated_at',
        )
        read_only_fields = ('created_at', 'updated_at',)


####################################################
# Authentication, registration and login
####################################################


class SignUpSerializer(RegisterSerializer):
    
    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'email': self.validated_data.get('email', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', '')
        }
        
    @transaction.atomic
    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        self.custom_signup(request, user)
        setup_user_email(request, user, [])
        return user


class CustomLoginSerializer(serializers.Serializer):
    login_field = serializers.CharField(required=True, allow_blank=False)
    password = serializers.CharField(style={'input_type': 'password'})

    def authenticate(self, **kwargs):
        return authenticate(self.context['request'], **kwargs)

    def _validate_email(self, email, password):
        user = None

        if not email:
            msg = _('Must include "email".')
            raise exceptions.ValidationError(msg)
        if not password:
            msg = _('Must include "password".')
            raise exceptions.ValidationError(msg)
        if email and password:
            user = self.authenticate(email=email, password=password)

        return user

    def _validate_username(self, username, password):
        user = None

        if not username:
            msg = _('Must include "username".')
            raise exceptions.ValidationError(msg)
        if not password:
            msg = _('Must include "password".')
            raise exceptions.ValidationError(msg)
        if username and password:
            user = self.authenticate(username=username, password=password)
        return user

    def _validate_phone_number(self, phone_number, password):

        user = None

        if not phone_number:
            msg = _('Must include "phone number".')
            raise exceptions.ValidationError(msg)
        if not password:
            msg = _('Must include "password".')
            raise exceptions.ValidationError(msg)
        if phone_number and password:
            user = self.authenticate(phone_number=phone_number, password=password)

        return user

    def validate(self, attrs):

        user = None
        login_field = attrs.get('login_field')
        password = attrs.get('password')
        username = None
        email = None
        phone = None

        if 'allauth' in settings.INSTALLED_APPS:
            from allauth.account import app_settings

            if '@' in login_field:
                email = login_field
                user = self._validate_email(email=email, password=password)
            elif login_field.isdigit():
                phone = login_field
                user = self._validate_phone_number(phone_number=phone, password=password)
            else:
                username = login_field
                user = self._validate_username(username=username, password=password)
        else:
            # Authentication without using allauth
            if email:
                try:
                    username = UserModel.objects.get(email__iexact=email).get_username()
                except UserModel.DoesNotExist:
                    pass

            if username:
                user = self._validate_username(username, password)

        # Did we get back an active user?
        if user:
            if not user.is_active:
                msg = _('User account is disabled.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Unable to log in with provided credentials.')
            raise exceptions.ValidationError(msg)

        # If required, is the email verified?
        if 'rest_auth.registration' in settings.INSTALLED_APPS:
            from allauth.account import app_settings
            if app_settings.EMAIL_VERIFICATION == app_settings.EmailVerificationMethod.MANDATORY:
                email_address = user.emailaddress_set.get(email=user.email)
                if not email_address.verified:
                    raise serializers.ValidationError(_('E-mail is not verified.'))

        attrs['user'] = user
        return attrs
