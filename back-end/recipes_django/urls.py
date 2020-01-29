from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from recipes import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('recipes.urls')),
    path('', include('genres.urls')),
]
