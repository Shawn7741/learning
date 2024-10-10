from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, ReservationViewSet, register_user

# Create a router and register the viewsets
router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')
router.register(r'reservations', ReservationViewSet, basename='reservation')

urlpatterns = [
    # API routes provided by the router
    path('', include(router.urls)),
    
    # Additional routes like user registration
    path('register/', register_user, name='register_user'),
]
