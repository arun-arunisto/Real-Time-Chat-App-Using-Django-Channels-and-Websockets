from django.shortcuts import render, redirect

# Create your views here.

def home(request):
    return render(request, 'home.html')
def chat_box(request):
    if request.method == 'POST':
        chat_box_name = request.POST['room-name']
        username = request.POST['username']
        if chat_box_name == '' or username == '':
            return redirect('home')
    return render(request, 'index.html', {"chat_box_name":chat_box_name, "username":username})
