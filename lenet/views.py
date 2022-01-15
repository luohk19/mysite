from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse('<h1>Here is your first app!')

# Create your views here.
