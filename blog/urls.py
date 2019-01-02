from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_all_blogs, name="get_all_blogs"),
    path('<slug:blog_url>/', views.get_blog_detail, name='get_blog_detail'),
]
