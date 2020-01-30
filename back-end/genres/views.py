from django.shortcuts import render
from rest_framework import generics
from .models import Genre
from .serializers import GenreSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET', 'POST'])
def GenreList(req):
	if req.method == 'GET':
		data = Genre.objects.all()
		serializer = GenreSerializer(data, context={'request': req}, many=True)
		return Response(serializer.data)
	elif req.method == 'POST':
		serializer = GenreSerializer(data=req.data)
		if serializer.is_valid():
			serializer.save()
			return Response(status=status.HTTP_201_CREATED)
		return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'DELETE'])
def GenreDetail(request, pk):
    if request.method == 'GET':
        genre = Genre.objects.get(pk=pk)
        serializer = GenreSerializer(genre, context={'request': request})
        return Response(serializer.data)
    elif request.method == 'DELETE':
        genre = Genre.objects.get(pk=pk).delete()