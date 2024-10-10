from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from .models import Car, Reservation
from .serializers import CarSerializer, ReservationSerializer


# Car ViewSet
class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['make', 'model', 'year', 'price']
    search_fields = ['make', 'model']
    ordering_fields = ['year', 'price']


# Reservation ViewSet
class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['car', 'user', 'start_date', 'end_date']
    search_fields = ['car__make', 'car__model']
    ordering_fields = ['start_date', 'end_date']
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Automatically assign the authenticated user to the reservation
        serializer.save(user=self.request.user)


# Register User API
@api_view(['POST'])
@permission_classes([AllowAny])  # Allow any user to register
def register_user(request):
    data = request.data
    try:
        # Create a new user
        user = User.objects.create(
            username=data['username'],
            password=make_password(data['password']),  # Hash the password
            email=data['email']
        )
        return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
