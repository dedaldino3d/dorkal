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


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserDetailsSerializer()
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    user = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'content',
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
    user = FeedUserSerializer()
    tags = TagListSerializerField()
    is_reacted = serializers.SerializerMethodField()

    class Meta:
        model = models.Post
        fields = (
            'id',
            'file',
            'location',
            'content',
            'comments',
            'react_count',
            'share_count',
            'user',
            'tags',
            'natural_time',
            'is_reacted',
            'is_vertical'
        )

    def get_is_reacted(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Reaction.objects.get(
                    user__id=request.user.id, post__id=obj.id)
                return True
            except models.Reaction.DoesNotExist:
                return False
        return False


# class ReactionSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = models.Reaction
#         fields = (
#             'user',
#         )


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



    # def get_is_liked(self, obj):
    #     if 'request' in self.context:
    #         request = self.context['request']
    #         try:
    #             models.Like.objects.get(
    #                 user__id=request.user.id, post__id=obj.id)
    #             return True
    #         except models.Like.DoesNotExist:
    #             return False
    #     return False


# class CommentSerializer(serializers.ModelSerializer):
#     user = FeedUserSerializer(read_only=True, source='comment')
#     post = serializers.SerializerMethodField()
#
#     class Meta:
#         model = models.Comment
#         fields = (
#             'id',
#             'comment',
#             'user',
#             'post',
#             'created_at',
#             'updated_at',
#         )
#         read_only_fields = ('created_at', 'updated_at', 'user',)
#
#     def create(self, validated_data):
#         user = None
#         if 'request' in self.context:
#             user = self.context['request'].user
#
#         # Use request.user as user
#         validated_data.update({
#             'user': user,
#         })
#
#         return Comment.objects.create(**validated_data)
#
#     def get_user(self, obj):
#         if obj.user:
#             request = self.context.get('request')
#
#             return {
#                 'username': obj.user.username,
#                 'avatar': request.build_absolute_uri(obj.user.avatar.url)
#             }
#
#         return None
#
#
# class PostSerializer(serializers.ModelSerializer):
#     """
#     Handles serialization and deserialization of Post instances.
#     """
#
#     tags = TagListSerializerField()
#     comments = CommentSerializer()
#     user = FeedUserSerializer()
#     likes = serializers.SerializerMethodField()
#     is_liked = serializers.SerializerMethodField()
#     timesince_posted = serializers.SerializerMethodField()
#     post= PostSerializer()
#
#     class Meta:
#         model = Post
#         fields = '__all__'
#
#     def create(self, validated_data):
#         user = None
#         if 'request' in self.context:
#             user = self.context['request'].user
#
#         # Use request.user as user
#         validated_data.update({
#             'user': user,
#             'is_active': True,  # is_active becomes False for some reason,
#             # force as True (when creating)
#         })
#
#         return Post.objects.create(**validated_data)
#
#     def get_likes(self, obj):
#         return obj.likes.count()
#
#     def get_is_liked(self, obj):
#         if 'request' in self.context:
#             return obj.is_liked_by(self.context['request'].user)
#
#         return False
#
#     def get_user(self, obj):
#         if obj.user:
#             request = self.context.get('request')
#
#             return {
#                 'username': obj.user.username,
#                 'avatar': request.build_absolute_uri(obj.user.profile.profile_image)
#             }
#
#         return None
#
#     def get_timesince_posted(self, obj):
#         return timesince(obj.date_created)
#
#
# class LikeSerializer(serializers.ModelSerializer):
#     user = FeedUserSerializer()
#     post = PostSerializer()
#
#     class Meta:
#         model = models.Like
#         fields = '__all__'
#         read_only_fields = ('created_at', 'updated_at')
#
#     def create(self, validated_data):
#         user = None
#         if 'request' in self.context:
#             user = self.context['request'].user
#
#         validated_data.update({
#             'user': user
#         })
#
#         return validated_data
#
#     def get_user(self, obj):
#         if obj.user:
#             request = self.context.get('request')
#
#             return {
#                 'user': obj.user.username,
#                 'avatar': request.build_absolute_uri(obj.user.profile.profile_image)
#             }
#
#         return None
