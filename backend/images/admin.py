from django.contrib import admin
from . import models


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    list_display_links = (
        'location',
    )

    search_fields = (
        'location',
        'caption',
    )

    list_filter = (
        'location',
        'user'
    )

    list_display = (
        'file',
        'location',
        'caption',
        'user',
        'created_at',
        'updated_at',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):

    list_display = (
        'user',
        'image',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'message',
        'user',
        'image',
        'created_at',
        'updated_at',
    )
