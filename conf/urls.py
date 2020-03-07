"""conf URL Configuration for Asta Project

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# from rest_framework import routers


urlpatterns = [
    path('admin/', admin.site.urls),
    # authenticate apps and others things
    path('o/', include(('oauth2_provider.urls', 'oauth2'), namespace='oauth2_provider')),

    path('auth/', include('rest_auth.urls')),
    path('auth/register/', include('rest_auth.registration.urls')),
    # you don't sure that you need this at all <Change>
    path('accounts/', include(('allauth.urls', 'allauth'), namespace='accounts')),
    path('users/', include(('backend.users.urls', 'users'), namespace='users')),
    path('images/', include(('backend.images.urls', 'images'), namespace='images')),
    path('notifications/', include(('backend.notifications.urls', 'notifications'), namespace='notifications')),
]
