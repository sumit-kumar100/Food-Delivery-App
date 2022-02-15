from django.contrib import admin

from Paytm.models import FoodOrder,FoodOrderItem

admin.site.register(FoodOrder)
admin.site.register(FoodOrderItem)