from django.urls import path, include
from . import views

urlpatterns = [
    # ... other URL patterns
    path('create_shareable/', views.create_shareable, name='create_shareable'),
    path('<slug:custom_url>/', views.display_shareable, name='display_shareable'),
]
