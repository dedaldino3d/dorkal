from django.contrib import admin
from . import models


@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):

    list_display_links = (
        'location',
    )

    search_fields = (
        'location',
        'content',
    )

    list_filter = (
        'location',
        'user'
    )

    list_display = (
        'file',
        'location',
        'content',
        'user',
        'created_at',
        'updated_at',
    )


@admin.register(models.Reaction)
class ReactionAdmin(admin.ModelAdmin):

    list_display = (
        'user',
        'post',
        'type_react',
        'created_at',
        'updated_at',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):

    list_display = (
        'content',
        'user',
        'post',
        'created_at',
        'updated_at',
    )
