from backend.users.permissions import IsOwnerOrReadOnly
from backend.users.serializers import ListUserSerializer, SignUpSerializer, UserProfileSerializer, \
    UserDetailsSerializer
from django.shortcuts import render
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope
from rest_auth.registration.views import RegisterView

from rest_framework import status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from backend.users import models, serializers
from backend.notifications.views import Notifications as notifications_views


class ExploreUsers(APIView):
    """
    Find out new users with explore
    when new user sign up on system
    he'll be here, using search search apiview
    any user can/must be founded out
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = ListUserSerializer

    # When arrive a GET request this function will respond
    def get(self, request, format=None):
        # Get the last five user signup on system
        last_five = models.User.objects.all().filter('-created_at')[:5]
        # Serialize the users founded
        serializer = self.serializer_class(last_five, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class FollowUser(APIView):
    """
    Follow a user
    """

    permission_classes = (IsAuthenticated,)

    # When arrive a POST request this function will respond
    def post(self, request, user_id, format=None):

        # Get the user logged in
        user = request.user

        # Try finding a user to follow
        try:
            user_to_follow = models.User.objects.get(user_id=user_id)
        # if he didn't find raise a exception DoesNotExist
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # add a user_to_follow on user followers list
        user.relationships.objects.add(user, user_to_follow)
        # save the instance of user
        user.save()
        # create a notification from user to user_to_follow
        # notifications_views.create_notification(creator=user, to=user_to_follow,
        #                              notification_type='follow')
        return Response(status=status.HTTP_200_OK)


class UnFollowUser(APIView):
    """
    UnFollow a user
    """

    permission_classes = (IsAuthenticated,)
    queryset = models.User.objects.all()

    # When arrive a POST request this function will respond
    def post(self, request, user_id, format=None):

        # Get the user logged in
        user = request.user
        # Try finding a user to follow
        try:
            user_to_unfollow = get_object_or_404(self.queryset, user_id=user_id)
        # if he didn't find raise a exception DoesNotExist
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # remove a user_to_follow on user followers list
        user.relationships.objects.remove(user, user_to_unfollow)
        # save the instance of user
        user.save()
        return Response(status=status.HTTP_200_OK)

# Add BlockUser and UnBlockUser

class BlockUser(APIView):
    """
    Block a user
    """

    permission_classes = (IsAuthenticated,)

    # When arrive a POST request this function will respond
    def post(self, request, user_id, format=None):

        # Get the user logged in
        user = request.user

        # Try finding a user to follow
        try:
            user_to_block = models.User.objects.get(user_id=user_id)
        # if he didn't find raise a exception DoesNotExist
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # add a user_to_block on user blockers list
        status_block = models.RelationshipStatus.objects.blocking()
        user.relationships.objects.add(user, user_to_block, status=status_block)
        # save the instance of user
        user.save()
        
        return Response(status=status.HTTP_200_OK)


class UnBlockUser(APIView):
    """
    UnBlock a user
    """

    permission_classes = (IsAuthenticated,)
    queryset = models.User.objects.all()

    # When arrive a POST request this function will respond
    def post(self, request, user_id, format=None):

        # Get the user logged in
        user = request.user
        # Try finding a user to follow
        try:
            user_to_unblock = get_object_or_404(self.queryset, id=user_id)
        # if he didn't find raise a exception DoesNotExist
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        # remove a user_to_unblock on user blockers list
        status_block = models.RelationshipStatus.objects.blocking()
        user.relationships.objects.remove(user, user_to_unblock, status=status_block)
        # save the instance of user
        user.save()
        return Response(status=status.HTTP_200_OK)


class UserProfile(APIView):
    """
    UserProfile 
    """
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly,)
    serializer_class = UserDetailsSerializer

    # Get a user(user logged in)
    def _get_profile(self, username):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return found_user

    # When arrive a GET request this function will respond
    def get(self, request, username):
        found_profile = self._get_profile(username)

        serializer = self.serializer_class(found_profile, context={'request': request})

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    # When arrive a PUT request this function will respond
    def put(self, request, username, format=None):

        # Get the user logged in
        user = request.user
        found_user = self._get_profile(username)

        if found_user.username != user.username:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            # serializer user profile founded
            serializer = self.serializer_class(found_user, data=request.data, partial=True)
            # check if data is valid
            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data, status=status.HTTP_200_OK)
            # if not raise errors
            else:
                return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserFollowers(APIView):
    """
    Followers for some user
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, username, format=None):
        found_user = get_object_or_404(self.queryset, username=username)
        user_followers = found_user.get_followers(found_user)
        serializer = self.serializer_class(user_followers, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):
    """
    User following
    """
    permission_classes = (IsAuthenticated,)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, username, format=None):
        found_user = get_object_or_404(self.queryset, username=username)
        user_following = found_user.get_following(found_user)
        serializer = self.serializer_class(user_following, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserBlockers(APIView):
    """
    User Blockers:
        who blocking me
    """
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly,)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, username, format=None):
        found_user = get_object_or_404(self.queryset, username=username)
        user_blockers = found_user.get_blockers(found_user)
        serializer = self.serializer_class(user_blockers, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserBlocking(APIView):
    """
    User Blocking
        who I am block
    """
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, username, format=None):
        found_user = get_object_or_404(self.queryset, username=username)
        user_blocking = found_user.get_blocking(found_user)
        serializer = self.serializer_class(user_blocking, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFriends(APIView):
    """
    User friends
        who is my friend
    """
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, username, format=None):
        found_user = get_object_or_404(self.queryset, username=username)
        user_friends = found_user.get_friends(found_user)
        serializer = self.serializer_class(user_friends, many=True, context={'request': request})
        return Response(data=serializer.data, status=status.HTTP_200_OK)


class Search(APIView):
    """
    For search on system
    """

    permission_classes = (IsAuthenticated,)
    serializer_class = ListUserSerializer
    queryset = models.User.objects.all()

    # When arrive a GET request this function will respond
    def get(self, request, format=None):

        username = request.query_params.get('username', None)
        if username is not None:
            users = models.User.objects.filter(username__istartswith=username)
            serializer = self.serializer_class(
                users, many=True, context={"request": request})
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)
