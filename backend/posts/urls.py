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
        regex=r'^(?P<post_id>[0-9]+)/reactions/$',
        view=views.ReactPost.as_view(),
        name='reaction_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/unreactions/$',
        view=views.UnReactPost.as_view(),
        name='reaction_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/comments/$',
        view=views.CommentOnPost.as_view(),
        name='comment_post'
    ),
    url(
        regex=r'^(?P<post_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.ModerateComments.as_view(),
        name='comment_post'
    ),
    url(
        regex=r'^comments/(?P<comment_id>[0-9]+)/$',
        view=views.Comment.as_view(),
        name='comment'
    ),
    url(
        regex=r'^search/$',
        view=views.Search.as_view(),
        name='search'
    )
]
