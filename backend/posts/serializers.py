from backend.users.serializers import UserDetailsSerializer
from django.conf import settings
from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from . import models
from backend.users.models import UserProfile

user_models = settings.AUTH_USER_MODEL


class SmallPostSerializer(serializers.ModelSerializer):

    """ Used for the notifications """

    class Meta:
        model = models.Post
        fields = (
            'file',
        )


class CountPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Post
        fields = (
            'id',
            'file',
            'comment_count',
            'reaction_count',
            'share_count',
        )


class CommentSerializer(serializers.ModelSerializer):

    user = UserDetailsSerializer(read_only=True)
    # natural_time = serializers.CharField()

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'content',
            'natural_time',
            'user'
        )


class ReactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Reaction
        fields = '__all__'


class ShareSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Share
        fields = '__all__'


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    user = UserDetailsSerializer(read_only=True)
    tags = TagListSerializerField()
    is_reacted_type = serializers.SerializerMethodField()


    class Meta:
        model = models.Post
        fields = '__all__'


    def get_is_reacted_type(self, obj):
        if 'request' in self.context:
            user = self.context['request'].user
            type_react = ['joke', 'love']

            try:
                models.Reaction.objects.get(
                    user__pk=user.user_id, post__pk=obj.id, type_react=type_react[0]
                    )
                return type_react[0]
            except models.Reaction.DoesNotExist:
                pass

            try:
                models.Reaction.objects.get(
                    user__pk=user.user_id, post__pk=obj.id, type_react=type_react[1]
                )
                return type_react[1]
            except models.Reaction.DoesNotExist:
                pass

            return None

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.tags = validated_data.get('tags', instance.tags)
        instance.save()
        return instance

    def create(self, validated_data):
        user = None
        if 'request' in self.context:
            user = self.context['request'].user

        # Use request.user as user
        validated_data.update({
            'user': user,
            'is_active': True,  # is_active becomes False for some reason,
            # force as True (when creating)
        })

        return models.Post.objects.create(**validated_data)


class InputPostSerializer(serializers.ModelSerializer):

    tags = TagListSerializerField()

    class Meta:
        model = models.Post
        fields = (
            'file',
            'location',
            'content',
            'tags'
        )
