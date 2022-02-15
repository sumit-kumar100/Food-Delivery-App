from django.urls import path
from Paytm import PaymentViews, views


urlpatterns = [
    # Payments urls

    # Creating Order
    path('create-order/',views.CreateOrder,name='create-order'),

    # First Step
    path('ReactNativeCustomPayment/',views.ReactNativeCustomPayment,name='ReactNativeCustomPayment'),

    # Second Step When ReactNativeCustomPayment Form Will Be Submited.
    path('pay/', PaymentViews.start_payment, name="start_payment"),

    # If Second Step Succed It Will Push To THis URL Which Will Send To Paytm Payment GateWay.
    path('handlepayment/', PaymentViews.handlepayment, name="handlepayment"),

]