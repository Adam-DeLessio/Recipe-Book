from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# class RecipeList(generics.ListCreateAPIView):
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer


from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status



@api_view(['GET', 'POST'])
def RecipeList(request):
    if request.method == 'GET':
        data = Recipe.objects.all()

        serializer = RecipeSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)