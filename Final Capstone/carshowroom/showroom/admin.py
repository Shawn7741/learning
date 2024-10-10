from django.contrib import admin
from .models import Car, Reservation


class CarAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'year', 'price', 'available')
    list_filter = ('brand', 'available', 'year')  
    search_fields = ('name', 'brand')  
    list_editable = ('price', 'available')  


class ReservationAdmin(admin.ModelAdmin):
    list_display = ('user', 'car', 'reserved_date')
    list_filter = ('reserved_date', 'car')  
    search_fields = ('user__username', 'car__name')  


admin.site.register(Car, CarAdmin)
admin.site.register(Reservation, ReservationAdmin)
