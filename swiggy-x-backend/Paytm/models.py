from django.db import models
# Create your models here.


class FoodOrder(models.Model):
    RestaurantID = models.CharField(max_length=100)
    RestaurantName = models.CharField(max_length=100)
    Amount = models.FloatField()
    isPaid = models.BooleanField(default=False)
    OrderDate = models.DateTimeField(auto_now=True)


class FoodOrderItem(models.Model):
    FoodId = models.CharField(max_length=100)
    FoodImage = models.CharField(max_length=1000)
    FoodTitle = models.CharField(max_length=100)
    FoodPrice = models.IntegerField()
    FoodQuantity = models.IntegerField()
    RatingCount = models.FloatField()
    orderID = models.ForeignKey(FoodOrder, on_delete=models.CASCADE)
