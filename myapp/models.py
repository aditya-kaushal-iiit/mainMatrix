from django.db import models
# Create your models here.

class Registration(models.Model):
    name= models.CharField(max_length=1000)
    roll = models.CharField(max_length=9,primary_key=True)
    year = models.CharField(max_length=10)
    phone = models.CharField(max_length=10,default="")
    branch  =models.CharField(max_length=1000)
    interest  =models.CharField(max_length=1000)
    github =models.CharField(max_length=1000)
    portfolio  =models.CharField(max_length=1000)
    joining_details=models.CharField(max_length=1000) 

     
class Contribution(models.Model):
    contri_name= models.CharField(max_length=1000)
    contri_roll = models.CharField(max_length=9,primary_key=True)
    contri_skill= models.CharField(max_length=1000,default="Not Specified")
