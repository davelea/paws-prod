from django.db import models

class Blog(models.Model):
	title = models.CharField(max_length=255)
	url = models.CharField(max_length=255)
	published_date = models.DateTimeField()
	summary = models.CharField(max_length=1000)
	body = models.TextField()
	image = models.ImageField(upload_to='images/', blank=True)
