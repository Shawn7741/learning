from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='Home'),
    path('about/', views.about, name='About'),
    path('blog/', views.blog_list, name='Blog'),
    path('subscribe/', views.subscriber, name='subscribe'),
    path('add_blog/', views.add_blog, name='add_blog'),
]

# updated urls.py




