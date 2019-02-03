from django.db import models

from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Blog(models.Model):
	title = models.CharField(max_length=255)
	url = models.CharField(max_length=255)
	published_date = models.DateTimeField()
	content = RichTextField()
	blog_summary = models.TextField()
	image = models.ImageField(upload_to='images/', blank=True)
	author = models.ForeignKey(User, related_name='blogs_authored', blank=True, null=True, on_delete=models.SET_NULL)

	def __str__(self):
		return self.title

	def summary(self):
		return self.body[:300]
