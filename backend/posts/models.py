from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _
from taggit.managers import TaggableManager
from django.contrib.humanize.templatetags.humanize import naturaltime
from imagekit.models import ProcessedImageField
from imagekit.processors import Transpose

user_models = settings.AUTH_USER_MODEL


HEART, JOKE = 'heart', 'joke'



class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Post(TimeStampedModel):
    """ Post Model """
    file = ProcessedImageField(processors=[
        Transpose()
    ],
        format='JPEG',
        options={'quality': 50})
    location = models.CharField(max_length=140, blank=True)
    content = models.TextField()
    user = models.ForeignKey(
        user_models, null=True, related_name='posts', on_delete=models.CASCADE)
    tags = TaggableManager(blank=True)

    # @property
    # def reaction_count(self):
    #     return self.reactions.all().count()

    @property
    def  reaction_joke(self):
        return self.reactions.filter(react__exact=JOKE).count()

    @property
    def  reaction_heart(self):
        return self.reactions.filter(react__exact=HEART).count()

    @property
    def share_count(self):
        return self.shares.all().count()

    @property
    def comment_count(self):
        return self.comments.all().count()

    @property
    def natural_time(self):
        return naturaltime(self.created_at)

    @property
    def is_vertical(self):
        if self.file.width < self.file.height:
            return True
        else:
            return False


    def __str__(self):
        return '{} - {}'.format(self.location, self.content)

    class Meta:
        ordering = ['-created_at']


class Comment(TimeStampedModel):
    """ Comment Model """

    content = models.TextField()
    user = models.ForeignKey(user_models, null=True, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, null=True, related_name='comments', on_delete=models.CASCADE)

    @property
    def natural_time(self):
        return naturaltime(self.created_at)
        
    def __str__(self):
        return self.content


class Reaction(TimeStampedModel):
    """ React Model """

    REACTION = (
        (HEART, _('heart')),
        (JOKE, _('joke')),
    )

    user = models.ForeignKey(user_models, null=True, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, null=True, related_name='reactions', on_delete=models.CASCADE)
    react = models.CharField(verbose_name=_("React"), default=HEART, blank=True, choices=REACTION, max_length=6)

    def __str__(self):
        return 'User: {} - {} - Post: {}'.format(self.user.username, self.react, self.post.id)


class Share(TimeStampedModel):
    """ Share Model """

    user = models.ForeignKey(user_models, null=True, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, null=True, related_name='shares', on_delete=models.CASCADE)

    def __str__(self):
        return 'User: {} Shared Post: {}'.format(self.user.username, self.post.id)


########################################################################
# Model post
# we can use it to post some content
#
# class Post(TimeStampedModel):
#     DELETED = 'DT'
#     ACTIVE = 'AT'
#
#     STATUS = (
#         (DELETED, _('deleted')),
#         (ACTIVE, _('active')),
#     )
#
#     post_id = models.AutoField(primary_key=True)
#     content = models.TextField(blank=False)
#     is_active = models.BooleanField(default=True)
#     # location = models.ForeignKey(Locations, on_delete=models.DO_NOTHING, null=True,
#     blank=True, related_name='location')
#     post = models.ForeignKey(Post, models.CASCADE, related_name='post', null=True, blank=True)
#     location = models.CharField(max_length=100, blank=True, verbose_name=_('location'))
#     user = models.ForeignKey(UserModel, on_delete=models.CASCADE)
#     status = models.CharField(verbose_name=_('status'), max_length=3, blank=True,
#                               null=True, choices=STATUS, default=ACTIVE)
#     tags = TaggableManager()
#
#     def save(self, *args, **kwargs):
#         self.updated_at = timezone.now()
#         super(Post, self).save(*args, **kwargs)
#
#     @property
#     def natural_time(self):
#         return naturaltime(self.created_at)
#
#     @property
#     def comments(self):
#         return self.comment_set.all().order_by('created_at')
#
#     @property
#     def likes(self):
#         return self.like_set.filter(is_active=True)
#
#     def is_liked_by(self, user=None):
#         if user and hasattr(user, 'id'):
#             return self.like_set.filter(is_active=True, user=user.id).exists()
#
#         return False
#
#     class Meta:
#         ordering = ['-created_at']
#         verbose_name = _('post')
#         verbose_name_plural = _('posts')
