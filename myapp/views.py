from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib import messages
from .models import Registration
from.models import Contribution
# Create your views here.


def index(request):
    return render(request,'index.html')

def register(request):
    if request.method=='POST':
        name = request.POST.get('name')
        roll = request.POST.get('roll')
        year = request.POST.get('year')
        phone = request.POST.get('phone')
        branch = request.POST.get('branch')
        interest = request.POST.get('interest')
        github = request.POST.get('github')
        portfolio = request.POST.get('portfolio')
        joining_details = request.POST.get('joining_details')

        if(Registration.objects.filter(roll=roll).exists()):
            return render(request,'index.html')
        else:
            user_registration = Registration(name = name,roll = roll,year = year,phone = phone, branch = branch,interest =interest,github = github,portfolio = portfolio,joining_details = joining_details)
            user_registration.save()
            return render(request,'index.html')
def contribution(request):
    return render(request,'contriform.html')

def user_contribution(request):
    if request.method=="POST":
        contri_name = request.POST.get('contri_name')
        contri_roll = request.POST.get('contri_roll')
        contri_skill = request.POST.get('contri_skill')
        

        if(Registration.objects.filter(roll = contri_roll).exists()):
            contri_user =  Contribution(contri_name = contri_name,contri_roll=contri_roll,contri_skill = contri_skill)
            contri_user.save()  
            return render(request,'index.html')
        else:
            return render(request,'contriform.html')
    else:
        return render(request,'contriform.html')
    