from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views
# from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'recipe', views.RecipeViewSet)

urlpatterns = [
	# path('', include(router.urls)),
	# path('recipes/', views.RecipeList.as_view()),
	# path('recipes/<int:pk>/', views.SnippetDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)