# Generated by Django 3.2.2 on 2021-05-21 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0005_auto_20210509_1120'),
    ]

    operations = [
        migrations.AddField(
            model_name='moviedetail',
            name='contentType',
            field=models.CharField(default='series', editable=False, max_length=7),
        ),
        migrations.AddField(
            model_name='seriesdetail',
            name='contentType',
            field=models.CharField(default='series', editable=False, max_length=7),
        ),
    ]
