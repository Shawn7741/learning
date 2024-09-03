from django.urls import path
from . import views

urlpatterns = [
    path('',views.food_list,name='food'),
    path('add/',views.add_food_item,name='add_food'),
    path('edit/<int:pk>/',views.edit_food_item,name='edit_food'),
    path('delete/<int:pk>/',views.delete_food_item,name='delete_food'),
    path('reset/',views.reset_calorie_count,name='reset_calorie'),
]
