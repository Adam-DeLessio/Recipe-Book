from django.db import models


class Recipe(models.Model):
	name = models.CharField(max_length=160)
	description = models.TextField(null=True)
	genre = models.CharField(max_length=160, null=True)

	process = models.TextField(null=True)


	def __str__(self):
		return self.name


