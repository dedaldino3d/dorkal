from backend.message.models import Conversation
from rest_framework import serializers


class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        field = '__all__'
