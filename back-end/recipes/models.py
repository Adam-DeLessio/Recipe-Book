from django.db import models


class Recipe(models.Model):
	name = models.CharField(max_length=160)
	description = models.TextField(null=True)
	genre = models.CharField(max_length=160, null=True)
	ing1 = models.CharField(max_length=100, null=True)
	ing2 = models.CharField(max_length=100, null=True)
	ing3 = models.CharField(max_length=100, null=True)
	ing4 = models.CharField(max_length=100, null=True)
	ing5 = models.CharField(max_length=100, null=True)
	ing6 = models.CharField(max_length=100, null=True)
	ing7 = models.CharField(max_length=100, null=True)
	ing8 = models.CharField(max_length=100, null=True)
	ing9 = models.CharField(max_length=100, null=True)
	ing10 = models.CharField(max_length=100, null=True)
	ing11 = models.CharField(max_length=100, null=True)
	ing12 = models.CharField(max_length=100, null=True)
	ing13 = models.CharField(max_length=100, null=True)
	ing14 = models.CharField(max_length=100, null=True)
	ing15 = models.CharField(max_length=100, null=True)
	process = models.TextField(null=True)


	def __str__(self):
		return self.name


