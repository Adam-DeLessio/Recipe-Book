from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    recipes = serializers.HyperlinkedRelatedField(
        view_name='recipe_detail',
        many=True,
        read_only=True
    )

    class Meta:
    	model = Recipe
    	fields = ('name', 'description',)