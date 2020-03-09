from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import ugettext_lazy as _
from backend.posts.models import TimeStampedModel, Post

# Create your models here.

auth_user = get_user_model()


class Notifications(TimeStampedModel):
    TYPE_CHOICES = (
        ('like', _('Like')),
        ('comment', _('Comment')),
        ('follow', _('Follow')),
        ('see', _('See')),
    )

    creator = models.ForeignKey(auth_user, related_name='not_creator', on_delete=models.CASCADE, verbose_name=_('from'))
    to = models.ForeignKey(auth_user, related_name='not_to', on_delete=models.CASCADE, verbose_name=_('to'))
    post = models.ForeignKey(Post, null=True, blank=True, on_delete=models.DO_NOTHING, verbose_name=_('image'))
    comment = models.TextField(blank=True, verbose_name=_('comment'))
    notification_type = models.CharField(choices=TYPE_CHOICES, null=True, blank=True, max_length=50)

    class Meta:
        ordering = ['-created_at']
        verbose_name = _('notification')
        verbose_name_plural = _('notifications')

    def __unicode__(self):
        return 'From: {} - To: {}'.format(self.creator, self.to)
