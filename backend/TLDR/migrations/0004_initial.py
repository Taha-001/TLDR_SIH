# Generated by Django 4.0.2 on 2022-03-06 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('TLDR', '0003_delete_pressrelease'),
    ]

    operations = [
        migrations.CreateModel(
            name='PressRelease',
            fields=[
                ('PressReleaseId', models.AutoField(primary_key=True, serialize=False)),
                ('PressReleaseTitle', models.CharField(max_length=64)),
                ('PressReleaseDate', models.DateField()),
                ('PressReleaseCategory', models.CharField(max_length=64)),
                ('PressReleaseLink', models.CharField(max_length=200)),
                ('PressReleaseSummary', models.TextField()),
            ],
        ),
    ]
