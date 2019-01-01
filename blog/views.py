from django.shortcuts import render

def getAllBlogs(request):
	return render(request, 'blog/summary.html')
