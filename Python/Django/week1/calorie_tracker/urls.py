from django.urls import path
from . import views

urlpatterns = [
    path('',views.food_list,name='food_list'),
    path('add/',views.add_food_item,name='add_food_item'),
    path('edit/<int:pk>/',views.edit_food_item,name='edit_food_item'),
    path('delete/<int:pk>/',views.delete_food_item,name='delete_food_item'),
    path('reset/',views.reset_calorie_count,name='reset_calorie_count'),
]
