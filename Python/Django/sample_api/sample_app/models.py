from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# # Create your models here.

class Students(models.Model):
    
    first_name = models.CharField(max_length=10)
    
    last_name = models.CharField(max_length=200)
        
    address = models.CharField(max_length=200)
            
    roll_number = models.IntegerField(unique=True)

    mobile = models.CharField(max_length=10)
    
    def __str__(self):
        
        return self.first_name + " " + self.last_name

class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # Linking to Django's built-in User model
    content = models.TextField()
    # image = CloudinaryField("image",null=True)
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