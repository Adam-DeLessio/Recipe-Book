# Generated by Django 3.0.2 on 2020-01-30 22:02

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0007_auto_20200130_2157'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='ings',
            field=django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100, null=True), null=True, size=None), null=True, size=None),
        ),
    ]
