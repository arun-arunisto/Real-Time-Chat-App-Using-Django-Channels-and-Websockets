from django.urls import path
from .views import home, chat_box

urlpatterns = [
    path('', home, name="home"),
    path('chat/', chat_box, name="chat")
]