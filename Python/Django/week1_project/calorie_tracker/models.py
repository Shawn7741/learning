from django.db import models

class FoodItem(models.Model):
    name = models.CharField(max_length=100)
    calories = models.PositiveIntegerField()

    def _str_(self):
        return self.name