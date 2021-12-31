from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'api/index.html')


def map(request):
    return render(request, 'api/map.html')


def map2(request):
    return render(request, 'api/map2.html')
