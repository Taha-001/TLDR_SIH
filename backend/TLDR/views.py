from django.shortcuts import render
from .serializers import PressReleaseSerializer, UserSerializer 
from rest_framework import viewsets 
from .models import PressRelease
from django.contrib.auth.models import User

# from .scrapping import scrap
# from .ml_model import summary_model
# scrap()

#from .summary import scrap
#scrap()

# Create your views here.
class PressReleaseView(viewsets.ModelViewSet):  
    serializer_class = PressReleaseSerializer   
    queryset = PressRelease.objects.all() 

class UserView(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all() 

    