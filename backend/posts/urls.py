from django.conf.urls import url
from . import views

urlpatterns = [
    url(
        regex=r'^$',
        view=views.Posts.as_view(),
        name='feed'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/$',
        view=views.PostDetail.as_view(),
        name='post_detail'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/react/$',
        view=views.ReactPost.as_view(),
        name='reaction_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/unreact/$',
        view=views.UnReactPost.as_view(),
        name='unreaction_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/comments/$',
        view=views.CommentOnPost.as_view(),
        name='comment_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.ModerateComments.as_view(),
        name='moderate_comment'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.DeleteComment.as_view(),
        name='delete_comment'
    ),
    url(
        regex=r'^search/$',
        view=views.Search.as_view(),
        name='search'
    )
]
