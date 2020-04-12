"""
    www.dorkal.com

 :author
    Dedaldino M. Antonio (3D)
 :decryption
    This software was developed Dedaldino Mambuenze Antonio,
    an programmer Python, love a lot python and others languages like Java, JavaScript, C++, Earlang, Go
    Dorkal, Inc - All right reserved &copy 2020
"""

import re

from backend.posts.models import TimeStampedModel
from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import UserManager, PermissionsMixin
from django.core import validators
from django.db import models
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _


# Here has model of users, all users

# The main model for users,
# this model will be a main model for all users

class CustomUserManager(BaseUserManager):
    # For others customization, you'll need this for add
    # new features for your users when you create them
    # for now i don't need this, but if i decide to add
    # new features for user, i'll
    # override de UserManager with this
    # Custom User Manager
    pass


class User(AbstractBaseUser, PermissionsMixin, TimeStampedModel):

    VALIDATOR = [validators.RegexValidator(re.compile('^[\w.@]+$'),
                                           _('Username can only contain letters and numbers '), 'invalid')]

    user_id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, verbose_name=_('user'),
        max_length=250, blank=False, null=False, validators=VALIDATOR,
        error_messages={
        'unique': _("A user with that username already exists."),
        },
        )

    email = models.EmailField(unique=True, verbose_name=_('email'),
                              max_length=250, blank=False, null=False)
    phone_number = models.CharField(unique=True, max_length=16, blank=False, null=True)
    push_token = models.TextField(default='')

    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    objects = UserManager()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __unicode__(self):
        return self.username

    class Meta:
        db_table = 'users'
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)

    def get_following(self, user):
        """
        List of users that this user has following
        :param self:
        :param user:
        :return:
        """
        return self.relationships.objects.following(user)

    def get_followers(self, user):
        """
        List of users that following this user
        :param user:
        :return:
        """
        return self.relationships.objects.followers(user)

    def get_blocking(self, user):
        """
        List of users are blocking this user
        :param user:
        :return:
        """
        return self.relationships.objects.blocking(user)

    def get_blockers(self, user):
        """
        List of users that this user is blocking
        :param user:
        :return:
        """
        return self.relationships.objects.blockers(user)

    def get_friends(self, user):
        """
        List of user friends, when some user has symmetrical relationship
        with another user, automatically they become friends
        :param user:
        :return:
        """
        return self.relationships.objects.friends(user)


UserModel = settings.AUTH_USER_MODEL


# Model for locations
# where is user from or where is a user?

class Locations(models.Model):
    location_id = models.AutoField(primary_key=True)
    city = models.CharField(verbose_name=_('city'), max_length=150, blank=True, null=False)
    state = models.CharField(verbose_name=_('state'), max_length=150, blank=True, null=False)
    country = models.CharField(verbose_name=_('country'), max_length=150, blank=True, null=False)

    class Meta:
        db_table = 'locations'
        verbose_name = _('location')
        verbose_name_plural = _('locations')


# This a model that will cover a user profile
# here will be information about a user

class UserProfile(TimeStampedModel):
    MALE = 'M'
    FEMALE = 'F'
    NOT_SPECIFIED = 'NS'

    GENDER_CHOICES = (
        (MALE, _('Male')),
        (FEMALE, _('Female')),
        (NOT_SPECIFIED, _('Not specified'))
    )

    VALIDATOR = [validators.RegexValidator(re.compile('^[\w]+$'),
                                           _('Invalid name, can only contain letters.'), 'invalid')]

    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(UserModel, verbose_name=_('user'), blank=False, null=False,
                                on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(max_length=125, verbose_name=_('first name'),
                                  validators=VALIDATOR, blank=True)
    last_name = models.CharField(max_length=125, verbose_name=_('last name'),
                                 validators=VALIDATOR, blank=True)
    location = models.ForeignKey(Locations, on_delete=models.DO_NOTHING, verbose_name=_('location'),
                                 related_name='location', blank=True, null=True)
    profile_image = models.ImageField(verbose_name=_('profile image'), blank=True, null=True)
    gender = models.CharField(verbose_name=_('gender'), max_length=2, choices=GENDER_CHOICES, blank=True,
                              default=NOT_SPECIFIED)
    DOB = models.DateField(verbose_name=_('date of birth'), blank=True, null=True)
    occupation = models.TextField(verbose_name=_('occupation'), blank=True)
    about = models.TextField(verbose_name=_('about'), blank=True)

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.
        """
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        """Return the short name for the user."""
        return self.first_name

    class Meta:
        db_table = 'user_profile'
        verbose_name = _('user profile')
        verbose_name_plural = _('users profiles')

    def __unicode__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

#
# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.profile.save()

@receiver(pre_delete, sender=User)
def delete_user_profile(sender, instance=None, **kwargs):
    if instance:
        profile = UserProfile.objects.get(user=instance)
        profile.delete()


# Relationships for one user with others users, it's helpful
# to relation people, thinking on real life where you can
# make relationship with others, following or 'admirar'


class RelationshipStatusManager(models.Manager):
    # convenience methods to handle some default statuses
    def following(self):
        return self.get(from_slug='following')

    def blocking(self):
        return self.get(from_slug='blocking')

    def by_slug(self, status_slug):
        return self.get(
            models.Q(from_slug=status_slug) |
            models.Q(to_slug=status_slug) |
            models.Q(symmetrical_slug=status_slug)
        )


class RelationshipStatus(models.Model):
    name = models.CharField(_('name'), max_length=100)
    verb = models.CharField(_('verb'), max_length=100)
    from_slug = models.CharField(_('from slug'), max_length=100,
                                 help_text=_("Denote the relationship from the user, i.e. 'following'"))
    to_slug = models.CharField(_('to slug'), max_length=100,
                               help_text=_("Denote the relationship to the user, i.e. 'followers'"))
    symmetrical_slug = models.CharField(_('symmetrical slug'), max_length=100,
                                        help_text=_("When a mutual relationship exists, i.e. 'friends'"))
    login_required = models.BooleanField(_('login required'), default=False,
                                         help_text=_("Users must be logged in to see these relationships"))
    private = models.BooleanField(_('private'), default=False,
                                  help_text=_("Only the user who owns these relationships can see them"))

    objects = RelationshipStatusManager()

    class Meta:
        ordering = ('name',)
        verbose_name = _('relationship status')
        verbose_name_plural = _('relationship statuses')

    def __unicode__(self):
        return self.name


class RelationshipManager(User._default_manager.__class__):
    def __init__(self, *args, **kwargs):
        super(RelationshipManager, self).__init__(*args, **kwargs)

    @staticmethod
    def add(from_user, user, status=None, symmetrical=False):
        """
        Add a relationship from one user to another with the given status,
        which defaults to "following".

        Adding a relationship is by default asymmetrical (akin to following
        someone on twitter).  Specify a symmetrical relationship (akin to being
        friends on facebook) by passing in :param:`symmetrical` = True

        .. note::

            If :param:`symmetrical` is set, the function will return a tuple
            containing the two relationship objects created
        """
        if not status:
            status = RelationshipStatus.objects.following()

        relationship, created = Relationship.objects.get_or_create(
            from_user=from_user,
            to_user=user,
            status=status
        )

        if symmetrical:
            return relationship, user.relationships.add(from_user, status, False)
        else:
            return relationship

    @staticmethod
    def remove(from_user, user, status=None, symmetrical=False):
        """
        Remove a relationship from one user to another, with the same caveats
        and behavior as adding a relationship.
        """
        if not status:
            status = RelationshipStatus.objects.following()

        res = Relationship.objects.filter(
            from_user=from_user,
            to_user=user,
            status=status
        ).delete()

        if symmetrical:
            return res, user.relationships.remove(from_user, status, False)
        else:
            return res

    @staticmethod
    def _get_from_query(from_user, status):
        return dict(
            to_users__from_user=from_user,
            to_users__status=status,
        )

    @staticmethod
    def _get_to_query(from_user, status):
        return dict(
            from_users__to_user=from_user,
            from_users__status=status,
        )

    def get_relationships(self, from_user, status, symmetrical=False):
        """
        Returns a QuerySet of user objects with which the given user has
        established a relationship.
        """
        query = self._get_from_query(from_user, status)

        if symmetrical:
            query.update(self._get_to_query(from_user, status))

        return User.objects.filter(**query)

    def get_related_to(self, from_user, status):
        """
        Returns a QuerySet of user objects which have created a relationship to
        the given user.
        """
        return User.objects.filter(**self._get_to_query(from_user, status))

    def only_to(self, from_user, status):
        """
        Returns a QuerySet of user objects who have created a relationship to
        the given user, but which the given user has not reciprocated
        """
        from_relationships = self.get_relationships(from_user, status)
        to_relationships = self.get_related_to(from_user, status)
        return to_relationships.exclude(pk__in=from_relationships.values_list('pk'))

    def only_from(self, from_user, status):
        """
        Like :method:`only_to`, returns user objects with whom the given user
        has created a relationship, but which have not reciprocated
        """
        from_relationships = self.get_relationships(from_user, status)
        to_relationships = self.get_related_to(from_user, status)
        return from_relationships.exclude(pk__in=to_relationships.values_list('pk'))

    @staticmethod
    def exists(from_user, user, status=None, symmetrical=False):
        """
        Returns boolean whether or not a relationship exists between the given
        users.  An optional :class:`RelationshipStatus` instance can be specified.
        """
        query = dict(
            to_users__from_user=from_user,
            to_users__to_user=user,
        )

        if status:
            query.update(to_users__status=status)

        if symmetrical:
            query.update(
                from_users__to_user=from_user,
                from_users__from_user=user
            )

            if status:
                query.update(from_users__status=status)

        return User.objects.filter(**query).exists()

    # some defaults
    def following(self, from_user):
        return self.get_relationships(from_user, RelationshipStatus.objects.following())

    def followers(self, from_user):
        return self.get_related_to(from_user, RelationshipStatus.objects.following())

    def blocking(self, from_user):
        return self.get_relationships(from_user, RelationshipStatus.objects.blocking())

    def blockers(self, from_user):
        return self.get_related_to(from_user, RelationshipStatus.objects.blocking())

    def friends(self, from_user):
        return self.get_relationships(from_user, RelationshipStatus.objects.following(), True)


class Relationship(models.Model):
    from_user = models.ForeignKey(UserModel, models.CASCADE, related_name='from_users')
    to_user = models.ForeignKey(UserModel, models.CASCADE, related_name='to_users')
    status = models.ForeignKey(RelationshipStatus, models.CASCADE, related_name='status')
    created = models.DateTimeField(_('created'), auto_now_add=True)

    objects = RelationshipManager()

    def __unicode__(self):
        return (_('Relationship from %(from_user)s to %(to_user)s')
                % {'from_user': self.from_user.username,
                   'to_user': self.to_user.username})

    class Meta:
        unique_together = (('from_user', 'to_user', 'status'),)
        ordering = ('-created',)
        verbose_name = _('relationship')
        verbose_name_plural = _('relationships')


setattr(User, 'relationships', Relationship)


# External Accounts, this model cover a users of others
# social network, with it a user can sign in in our
# system without worry with form sign up, becoming it very quick


class ExternalAccounts(models.Model):
    id = models.AutoField(primary_key=True)
    facebook_email = models.EmailField(verbose_name=_('facebook email'), max_length=45, blank=True, null=True)
    twitter_username = models.CharField(verbose_name=_('twitter username'), max_length=45, blank=True,
                                        null=True)

    class Meta:
        db_table = 'external_accounts'
        verbose_name = _('external account')
        verbose_name_plural = _('external accounts')


# Settings for a user, this model will cover
#     a all settings for a user(messages, following, notifications)
#     and others stuffs that can be helpful to become and perform the User Experience
# and User Interface more pragmatic

class UserSettings(models.Model):
    OPT = (
        (0, False),
        (1, True),
    )
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(UserModel, on_delete=models.CASCADE)
    notifications_followers = models.CharField(_('followers notifications'), max_length=2,
                                               choices=OPT, blank=False, null=False, default=1)
    notifications_comments = models.CharField(_('comments notifications'), max_length=2,
                                              choices=OPT, blank=False, null=False, default=1)
    notifications_messages = models.CharField(_('messages notifications'), max_length=2,
                                              choices=OPT, blank=False, null=False, default=1)

    class Meta:
        db_table = 'user_settings'
        verbose_name = _('user settings')
        verbose_name_plural = _('users settings')
