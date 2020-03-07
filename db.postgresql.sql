# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class FollowingRelationships(models.Model):
    following_relationship_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=False, null=False)
    following = models.ForeignKey('Users', models.DO_NOTHING, blank=False, null=False)
    date_followed = models.DateTimeField(auto_now_add=True,blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'following_relationships'


class PostComments(models.Model):
    post_comment_id = models.AutoField(primary_key=True)
    post = models.ForeignKey('Posts', models.DO_NOTHING, blank=False, null=False)
    commenter_id = models.IntegerField(blank=False, null=False)
    comment = models.TextField(blank=True, null=False)
    date_commented = models.DateTimeField(auto_now_add=True, blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'post_comments'


class Posts(models.Model):

    STATUS=(
        (0,'active'),
        (1,'deleted'),
    )

    post_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=False, null=False, on_delete=models.CASCADE)
    title = models.CharField(max_length=45, blank=False, null=False)
    content = models.TextField(blank=False, null=False)
    status = models.CharField(max_length=45, blank=True, null=True, choices=STATUS, default=0)
    date_published = models.DateTimeField(auto_now_add=True, blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'posts'


class Userprofiles(models.Model):
    user_profile_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=False, null=False, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=45, blank=True, null=False)
    last_name = models.CharField(max_length=45, blank=True, null=False)
    location = models.ForeignKey('Locations', models.DO_NOTHING, blank=True, null=True)
    gender = models.CharField(max_length=2, blank=True, null=True)
    DOB = models.DateField(blank=True, null=True)
    occupation = models.CharField(max_length=45, blank=True, null=True)
    about = models.TextField(blank=True, null=True)
    date_updated = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user_profiles'


class Users(models.Model):

    ACCOUNT_STATUS=(
        (0,'active'),
        (1,'deactive'),
        (2,'blocked'),
        (3,'deleted'),
    )

    user_id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=45, blank=False, null=False)
    email = models.CharField(unique=True, max_length=45, blank=False, null=False)
    password = models.CharField(max_length=45, blank=False, null=False)
    password_salt = models.CharField(max_length=45, blank=True, null=True)
    date_registered = models.DateTimeField(auto_now_add=True,blank=True, null=True)
    user_type = models.CharField(max_length=45, blank=True, null=True)
    account_status = models.CharField(max_length=45, blank=True, null=False, choices=ACCOUNT_STATUS, default=0)

    class Meta:
        managed = False
        db_table = 'users'
