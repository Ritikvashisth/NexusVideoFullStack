# Generated by Django 3.2.2 on 2021-05-21 09:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0007_alter_moviedetail_contenttype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='moviedetail',
            name='contentType',
        ),
    ]
