from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.conf import settings

# Create your models here.

STATUS = (
    (0, _(u'deactive')),
    (1, _(u'active')),
    (2, _(u'deleted')),
    (3, _(u'blocked')),
)


class Conversation(models.Model):
    c_id = models.AutoField(primary_key=True)
    user_one = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name='from_user',
                                 blank=False, null=False,
                                 verbose_name=_('primeiro usuário'))
    user_two = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, related_name='to_user',
                                 blank=False, null=False,
                                 verbose_name=_('segundo usuário'))
    time = models.DateField(auto_now=True)
    ip = models.GenericIPAddressField()
    status = models.CharField(max_length=4, choices=STATUS, verbose_name=_('status'), default=1)


class ConversationReply(models.Model):
    cr_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, models.CASCADE, related_name='user', blank=False,
                                null=False, )
    time = models.DateField(auto_now=True)
    ip = models.GenericIPAddressField()
    status = models.CharField(max_length=4, choices=STATUS, verbose_name=_('status'), default=1)
    c_id = models.ForeignKey(Conversation, models.CASCADE, related_name='conversation')
    reply = models.TextField(verbose_name=_('resposta'), blank=False, null=False, )
