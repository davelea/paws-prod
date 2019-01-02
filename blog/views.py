from django.shortcuts import render, get_object_or_404

from .models import Blog

def get_all_blogs(request):
	blogs = Blog.objects
	return render(request, 'blog/summary.html', {'blogs': blogs})

def get_blog_detail(request, blog_url):
	blog = get_object_or_404(Blog, url=blog_url)
	return render(request, 'blog/detail.html', {'blog': blog})