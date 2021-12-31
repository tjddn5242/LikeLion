from django.urls import path
from firstapp import views

app_name = 'api'
urlpatterns = [
    path('', views.index, name='index'),
    path('map', views.map, name='map'),
    path('map2', views.map2, name='map2'),
]
