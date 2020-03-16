import requests
import json
import time
from django.utils.translation import gettext_lazy as _
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import NotificationSerializer
from . import models


class Notifications(APIView):
    serializer_class = NotificationSerializer

    def get(self, request, format=None):
        user = request.user

        notifications = models.Notifications.objects.filter(to=user)

        serializer = self.serializer_class(
            notifications, many=True, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def create_notification(creator, to, notification_type, post=None, comment=None):
        notification = models.Notifications.objects.create(
            creator=creator,
            to=to,
            notification_type=notification_type,
            post=post,
            comment=comment
        )

        time.sleep(10)

        notification.save()

        action = ''

        if notification_type == 'like_photo':

            action = _('liked your photo')

        elif notification_type == 'like_post':

            action = _('liked your post')

        elif notification_type == 'comment_photo':

            action = _('commented on your photo')

        elif notification_type == 'comment_post':

            action = _('commented on your post')

        elif notification_type == 'follow':

            action = _('followed you')

        elif notification_type == 'see':

            action = _('visited your profile')

        # -------------------- change it or delete -------------------
        url = "https://exp.host/--/api/v2/push/send"
        data = {
            "to": creator.push_token,
            "sound": "default",
            "body": f'Somebody {action}',
            "badge": 1
        }
        headers = {'Content-type': 'application/json',
                   'Accept': 'application/json', 'Accept-Encoding': 'gzip, deflate'}

        request = requests.post(url, data=json.dumps(data), headers=headers)

        print(request.json())
