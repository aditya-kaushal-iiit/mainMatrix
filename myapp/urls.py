from django.urls import path
from . import views


urlpatterns = [
    path('',views.index, name = "index"),
    path('register',views.register,name = 'register'),
    path('contribution',views.contribution, name = 'contribution'),
    path('user_contribution',views.user_contribution,name = 'user_contribution')
]