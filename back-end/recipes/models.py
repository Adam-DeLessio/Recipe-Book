from django.db import models
from django.contrib.postgres.fields import ArrayField



class Recipe(models.Model):
	name = models.CharField(max_length=160)
	description = models.TextField(null=True)
	genre = models.CharField(max_length=160, null=True)
	ings = ArrayField(models.CharField(max_length=100, blank=True))
	process = models.TextField(null=True)


	def __str__(self):
		return self.name


