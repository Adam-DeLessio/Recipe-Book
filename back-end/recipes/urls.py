from rest_framework.urlpatterns import format_suffix_patterns
from recipes import views
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
	url(r'^recipes/$', views.RecipeList, name='RecipeList'),
	path('recipes/<int:pk>/', views.RecipeDetail, name='RecipeDetail'),
]



urlpatterns = format_suffix_patterns(urlpatterns)