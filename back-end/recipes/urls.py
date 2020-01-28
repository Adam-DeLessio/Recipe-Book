from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'recipe', views.RecipeViewSet)

urlpatterns = [
	path('', include(router.urls)),
	path('recipes/', views.RecipeViewSet.as_view({'get': 'list'}), name='recipe_list'),
	path('addrecipe/', views.RecipeViewSet.as_view({'post': 'create'}), name='add_recipe'),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]