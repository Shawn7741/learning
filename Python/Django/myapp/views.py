from django.http import HttpResponse

# from django.shortcuts import render


def helloworld(request):
    return HttpResponse('Hello, my first django app')


# def index(request):
#     context = {'message': 'Hello, Shawn', 'text': 'Welcome to your home page'}
#     user = {'username': 'Shawn'}
#     return render(request, 'index.html', context)


# def about(request):
#     return render(request, 'about.html')