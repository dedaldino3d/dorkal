from rest_framework import serializers
from backend.notifications.models import Notifications
from backend.users.serializers import ListUserSerializer
from backend.images.serializers import SmallImageSerializer


class NotificationSerializer(serializers.ModelSerializer):
    creator = ListUserSerializer(source='not_creator')  # from of action
    to = ListUserSerializer(source='not_to')  # to of action
    image = SmallImageSerializer()  # image for notifications -- n.t see it again

    class Meta:
        model = Notifications
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at',)
