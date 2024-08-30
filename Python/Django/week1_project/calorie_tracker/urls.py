from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add_food, name='add_food'),
    path('delete/<int:pk>/', views.delete_food, name='delete_food'),
]