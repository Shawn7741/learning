from django.shortcuts import render, redirect
from .models import FoodItem
from .forms import FoodItemForm

def index(request):
    food_items = FoodItem.objects.all()
    total_calories = sum(item.calories for item in food_items)
    return render(request, 'index.html', {'food_items': food_items, 'total_calories': total_calories})

def add_food(request):
    if request.method == 'POST':
        form = FoodItemForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
        form = FoodItemForm()
    return render(request, 'add_food.html', {'form': form})

def delete_food(request, pk):
    item = FoodItem.objects.get(pk=pk)
    item.delete()
    return redirect('index')