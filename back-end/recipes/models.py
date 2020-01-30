from django.db import models


class Recipe(models.Model):
	name = models.CharField(max_length=160)
	description = models.TextField()
	genre = models.CharField(max_length=160, null=True)
	

	def __str__(self):
		return self.name


