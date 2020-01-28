from rest_framework import serializers
from recipes.models import Recipe

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
    	model = Recipe
    	fields = ('id', 'name', 'description',)