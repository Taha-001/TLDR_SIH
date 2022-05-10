from rest_framework import serializers
from .models import PressRelease
from django.contrib.auth.models import User

class PressReleaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PressRelease
        fields = ('PressReleaseId','PressReleaseTitle', 'PressReleaseDate', 'PressReleaseCategory', 'PressReleaseImage','PressReleaseLink','PressReleaseSummary')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password', 'email', 'first_name','last_name')