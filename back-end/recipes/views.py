# from rest_framework import generics
# from .serializers import RecipeSerializer
# from .models import Recipe
# from rest_framework import permissions


# class RecipeList(generics.ListCreateAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = (permissions.IsAuthenticated,)




from recipes.models import Recipe
from rest_framework import viewsets
from .serializers import RecipeSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

