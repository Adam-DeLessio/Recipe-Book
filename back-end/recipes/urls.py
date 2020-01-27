from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'recipe', views.RecipeViewSet)

urlpatterns = [
	path('', include(router.urls)),
	# path('recipes/', views.RecipeList.as_view(), name='recipe_list'),

]