from django.contrib import admin

# Register your models here.
from .models import PressRelease

class PressReleaseAdmin(admin.ModelAdmin):
  list = ('PressReleaseId','PressReleaseTitle', 'PressReleaseDate', 
  'PressReleaseCategory', 'PressReleaseImage','PressReleaseLink','PressReleaseSummary')

admin.site.register(PressRelease, PressReleaseAdmin)