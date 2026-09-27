from django.contrib import admin
from.models import Registration
from.models import Contribution
# Register your models here.

class u_registration(admin.ModelAdmin):
    list_display = ('name','roll','year','phone','branch','interest','github','portfolio','joining_details')

class u_contribution(admin.ModelAdmin):
    list_display = ('contri_name','contri_roll','contri_skill')

admin.site.register(Registration,u_registration)
admin.site.register(Contribution,u_contribution)