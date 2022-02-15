from django.shortcuts import render
from django.http import JsonResponse
from .models import FoodOrder, FoodOrderItem
import json


def CreateOrder(request):
    tree = request.GET.get('FoodData')
    FoodData = json.loads(tree)

    Restaurant = FoodData.get('RestaurantDetail')
    Amount = FoodData.get('TotalAmount')
    FoodItems = FoodData.get('FoodItems')

    order = FoodOrder.objects.create(
        RestaurantID=Restaurant.get('Res_id'),
        RestaurantName=Restaurant.get('Res_Name'),
        Amount=Amount
    )
    
    for i in FoodItems:
        FoodOrderItem.objects.create(
            FoodId = i.get('FoodId'),
            FoodImage = i.get('FoodImage'),
            FoodTitle = i.get('FoodTitle'),
            FoodPrice = i.get('FoodPrice'),
            FoodQuantity = i.get('FoodQuantity'),
            RatingCount = i.get('RatingCount'),
            orderID = FoodOrder(order.id)
        )

    return JsonResponse({"OrderID": f"FoodOrderID-{order.id}"})

def ReactNativeCustomPayment(request):
    return render(request,'paytm/ReactNativeCustomPayment.html')