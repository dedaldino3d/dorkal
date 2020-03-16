from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from . import models, serializers
from backend.users import models as user_models
from backend.users import serializers as user_serializers
from backend.notifications import views as notification_views
from backend.users.permissions import IsOwnerOrReadOnly


# Change it
# Code how feed will be renderer, it's more important

class Posts(APIView):

    def get(self, request, format=None):

        user = request.user
        following_users = user.get_following(user)

        post_list = []

        if following_users:
            for following_user in following_users:
                user_posts = following_user.posts.all() # [:2]
                for post in user_posts:
                    post_list.append(post)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # my_posts= user.posts.all() #[:2]
        my_posts = models.Post.objects.all()
        for post in my_posts:
            post_list.append(post)
        sorted_list = sorted(
            post_list, key=lambda post: post.created_at, reverse=True)
        serializer = serializers.PostSerializer(
            sorted_list, many=True, context={'request': request})

        return Response(serializer.data)

    def post(self, request, format=None):

        user = request.user
        serializer = serializers.InputPostSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=user)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReactPost(APIView):

    def get(self, request, post_id, format=None):

        reacts = models.Reaction.objects.filter(post__id=post_id)
        react_users_ids = reacts.values('user_id')
        # change it or remove, problem: security, level: 5
        users = user_models.User.objects.filter(user_id__in=react_users_ids)

        serializer = user_serializers.ListUserSerializer(
            users, many=True, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, post_id, format=None):

        user = request.user

        try:
            found_post = models.Post.objects.get(id=post_id)
        except models.Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisiting_react = models.Reaction.objects.get(
                user=user,
                post=found_post
            )
            return Response(status=status.HTTP_304_NOT_MODIFIED)

        except models.Reaction.DoesNotExist:

            new_react = models.Reaction.objects.create(
                user=user,
                post=found_post
            )

            new_react.save()

            notification_views.create_notification(
                user, found_post.user, 'like', found_post)

            return Response(status=status.HTTP_201_CREATED)


class UnReactPost(APIView):

    def delete(self, request, post_id, format=None):

        user = request.user

        try:
            preexisiting_react = models.Reaction.objects.get(
                user=user,
                post__id=post_id
            )
            preexisiting_react.delete()

            return Response(status=status.HTTP_204_NO_CONTENT)

        except models.Reaction.DoesNotExist:

            return Response(status=status.HTTP_304_NOT_MODIFIED)


class CommentOnPost(APIView):

    def post(self, request, post_id, format=None):

        user = request.user

        try:
            found_post = models.Post.objects.get(id=post_id)
        except models.Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.CommentSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(user=user, post=found_post)

            # notification_views.create_notification(
            #     user, found_post.user, 'comment', found_post, serializer.data['content'])

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:

            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteComment(APIView):

    def delete(self, request, post_id, comment_id, format=None):

        user = request.user

        try:
            comment = models.Comment.objects.get(id=comment_id, user=user, post=post_id)
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class Search(APIView):

    def get(self, request, format=None):

        hashtags = request.query_params.get('hashtags', None)

        if hashtags is not None:

            hashtags = hashtags.split(",")

            posts = models.Post.objects.filter(
                tags__name__in=hashtags).distinct()

            serializer = serializers.PostSerializer(
                posts, many=True, context={'request': request})

            return Response(data=serializer.data, status=status.HTTP_200_OK)

        else:

            posts = models.Post.objects.all()[:20]
            serializer = serializers.PostSerializer(
                posts, many=True, context={'request': request})
            return Response(data=serializer.data, status=status.HTTP_200_OK)


class ModerateComments(APIView):

    def delete(self, request, post_id, comment_id, format=None):

        user = request.user

        try:
            comment_to_delete = models.Comment.objects.get(
                id=comment_id, post__id=post_id, post__user=user)
            comment_to_delete.delete()
        except models.Comment.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response(status=status.HTTP_204_NO_CONTENT)


class PostDetail(APIView):

    permission_classes = (IsOwnerOrReadOnly, IsAuthenticated,)

    def find_own_post(self, post_id):
        try:
            post = models.Post.objects.get(id=post_id)
            return post
        except models.Post.DoesNotExist:
            return None

    def get(self, request, post_id, format=None):

        try:
            post = models.Post.objects.get(id=post_id)
        except models.Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = serializers.PostSerializer(
            post, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def put(self, request, post_id, format=None):

        post = self.find_own_post(post_id)

        if post is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        self.check_object_permissions(request, post)
        
        serializer = serializers.InputPostSerializer(
            post, data=request.data, partial=True)

        if serializer.is_valid():

            serializer.save(user=user)

            return Response(data=serializer.data, status=status.HTTP_204_NO_CONTENT)

        else:

            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, post_id, format=None):

        post = self.find_own_post(post_id)

        if post is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        self.check_object_permissions(request, post)

        post.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
