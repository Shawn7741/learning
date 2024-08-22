from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse
class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)  # Use EmailField for validation
    def get_absolute_url(self):
        return reverse('author-detail', args=[str(self.id)])
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # Linking to Django's built-in User model
    content = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    last_updated = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-date_posted']
    @classmethod
    def published(cls):
        return cls.objects.filter(is_published=True)
class Subscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.email