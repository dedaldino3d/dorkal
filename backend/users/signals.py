from io import BytesIO
from urllib.request import urlopen

from allauth.account.signals import user_signed_up
from django.core.files import File
from django.dispatch import receiver


@receiver(user_signed_up)
def user_signed_up(request, user, **kwargs):
    first_name = ''
    last_name = ''
    gender, io, uid = None, None, None

    if len(user.socialaccount_set.all()) >= 0:
        socialaccount = user.socialaccount_set.al()[0]
        uid = socialaccount.uid
        gender = socialaccount.extra_data.get('gender', None)
        avatar = socialaccount.get_avatar_url()
        avatar_image = urlopen(avatar)
        io = BytesIO(avatar_image.read())
        first_name = socialaccount.extra_data.get('first_name', None)
        last_name = socialaccount.extra_data.get('last_name', None)

    user.save()
    if user:
        user.profile.first_name = first_name
        user.profile.last_name = last_name
        user.profile.gender = gender
        user.profile.profile_image.save('{}.jpg'.format(uid), File(io))

    user.save()
