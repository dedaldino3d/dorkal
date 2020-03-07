"""
Local settings
"""

# import environ
from .base import *

# DEBUG
# ---------------------------------------------------------------------------------------------
DEBUG = env.bool('DEBUG', default=True)
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG
ALLOWED_HOSTS = '*'


# SECRET CONFIGURATION
# ----------------------------------------------------------------------------------------------
# See: https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# SECURITY WARNING: keep the secret key used in production secret!
# Note: This key only used for development and testing.

SECRET_KEY = env('DJANGO_SECRET_KEY',
                 default='@ef7(mv6q2mkg6x9j#^@b_ahv#dsktenqn6#d2kytan#!q$j7')

# SECRET_KEY = '@ef7(mv6q2mkg6x9j#^@b_ahv#dsktenqn6#d2kytan#!q$j7'
# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        # 'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
        'NAME': 'db_wakemake',  # you need to change DB_NAME
        'USER': 'postgres',
        'PASSWORD': 'Dedaldino18',  # need to be secret
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Mail settings
# ------------------------------------------------------------------------------
EMAIL_PORT = 1025

EMAIL_HOST = 'localhost'


# CACHING
# ------------------------------------------------------------------------------
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': ''
    }
}

# django-debug-toolbar
# ------------------------------------------------------------------------------
# MIDDLEWARE += ['debug_toolbar.middleware.DebugToolbarMiddleware', ]
# INSTALLED_APPS += ['debug_toolbar', ]

INTERNAL_IPS = ['127.0.0.1', '10.0.2.2', ]

# DEBUG_TOOLBAR_CONFIG = {
#     'DISABLE_PANELS': [
#         'debug_toolbar.panels.redirects.RedirectsPanel',
#     ],
#     'SHOW_TEMPLATE_CONTEXT': True,
# }
