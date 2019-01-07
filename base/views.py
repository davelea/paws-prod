from django.shortcuts import render

def home(request):
	return render(request, 'base/index.html')

def pricing(request):
	return render(request, 'base/pricing.html')

def about(request):
	return render(request, 'base/about.html')

def team(request):
	return render(request, 'base/team.html')

def faq(request):
	return render(request, 'base/faq.html')
