# Generated by Django 3.0.3 on 2020-04-05 18:32

from django.db import migrations, models
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0003_taggeditem_add_unique_index'),
        ('posts', '0002_auto_20200311_2156'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reaction',
            name='react',
        ),
        migrations.AddField(
            model_name='reaction',
            name='type_react',
            field=models.CharField(blank=True, choices=[('heart', 'heart'), ('joke', 'joke')], default=None, max_length=6, verbose_name='Type'),
        ),
        migrations.AlterField(
            model_name='post',
            name='location',
            field=models.CharField(blank=True, max_length=140),
        ),
        migrations.AlterField(
            model_name='post',
            name='tags',
            field=taggit.managers.TaggableManager(blank=True, help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]
