from django.http import HttpResponse

def helloworld(request):
    return HttpResponse('Welcome to my Django app!')