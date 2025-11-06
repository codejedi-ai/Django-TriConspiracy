from django.urls import path
from . import views


app_name = 'notion_middleware'


urlpatterns = [
    path('api/events/', views.api_create_event, name='api_create_event'),
    path('api/questions/', views.api_create_question, name='api_create_question'),
    path('api/prizes/', views.api_create_prize, name='api_create_prize'),
    path('api/placements/', views.api_create_placement, name='api_create_placement'),
]

