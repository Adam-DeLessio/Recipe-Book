from rest_framework import serializers
from recipes.models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
	# ings = serializers.ListField(child=serializers.CharField())
    
    class Meta:
    	model = Recipe
    	fields = ('id', 'name', 'description', 'genre', 'ings', 'process',)
    		

    			# 'ing1',
    			# 'ing2',
    			# 'ing3',
    			# 'ing4',
    			# 'ing5',
    			# 'ing6',
    			# 'ing7',
    			# 'ing8',
    			# 'ing9',
    			# 'ing10',
    			# 'ing11',
    			# 'ing12',
    			# 'ing13',
    			# 'ing14',
    			# 'ing15', 

