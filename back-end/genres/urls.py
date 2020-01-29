from rest_framework.urlpatterns import format_suffix_patterns
from genres import views
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
	url(r'^genres/$', views.GenreList),
]

urlpatterns = format_suffix_patterns(urlpatterns)