from django.shortcuts import render, redirect, get_object_or_404
from .models import FoodItem
from .forms import FoodItemForm

def food_list(request):
    food_items = FoodItem.objects.all()
    total_calories = sum(item.calories for item in food_items)
    return render(request, 'food_list.html', {'food_items':food_items, 'total_calories':total_calories,})

def add_food_item(request):
    if request.method == 'POST':
        form = FoodItemForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('food_list')
        else:
            form = FoodItemForm()
            return render(request, 'add_food_item.html', {'form':form})
        
def edit_food_item(request, pk):
    food_item = get_object_or_404(FoodItem, pk=pk)
    if request.method == 'POST':
        form = FoodItemForm(request.POST, instance=food_item)
        if form.is_valid():
            form.save()
            return redirect('food_list')
        else:
            form = FoodItemForm(instance=food_item)
            return render(request, 'edit_food_item.html', {'form':form})
        
def delete_food_item(request, pk):
    food_item = get_object_or_404(FoodItem, pk=pk)
    if request.method == 'POST':
        food_item.delete()
        return redirect('food_list')
    return render(request, 'delete_food_item.html', {'food_item':food_item})

def reset_calorie_count(request):
    if request.method == 'POST':
        
     FoodItem.objects.all().delete()
     return redirect('food_list')
    return render(request, 'reset_calorie_count.html')