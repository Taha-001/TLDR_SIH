# Generated by Django 4.0.2 on 2022-03-18 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TLDR', '0004_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pressrelease',
            name='PressReleaseDate',
            field=models.CharField(max_length=64),
        ),
    ]
