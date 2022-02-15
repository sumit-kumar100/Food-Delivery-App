import environ

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import FoodOrder
from . import Checksum

# Create your views here.

env = environ.Env()

# you have to create .env file in same folder where you are using environ.Env()
# reading .env file which located in api folder
environ.Env.read_env()


@api_view(['POST'])
def start_payment(request):
    # request.data is coming from frontend
    OrderID = request.data['OrderID']

    ValidOrderId = OrderID.split('-')

    # we are saving an order instance (keeping isPaid=False)
    order = FoodOrder.objects.get(id=int(ValidOrderId[-1]))

    # we have to send the param_dict to the frontend
    # these credentials will be passed to paytm order processor to verify the business account
    param_dict = {
        'MID': 'DIY12386817555501617',
        'ORDER_ID': 'Order-ID-' + str(order.id),
        'TXN_AMOUNT': str(order.Amount),
        'CUST_ID': 'Customer-ID-' + str(order.id),
        'INDUSTRY_TYPE_ID': 'Retail',
        'WEBSITE': 'WEBSTAGING',
        'CHANNEL_ID': 'WEB',
        'CALLBACK_URL': 'http://anjali1196.pythonanywhere.com/paytm/handlepayment/',
        # this is the url of handlepayment function, paytm will send a POST request to the fuction associated with this CALLBACK_URL
    }

    # create new checksum (unique hashed string) using our merchant key with every paytm payment
    param_dict['CHECKSUMHASH'] = Checksum.generate_checksum(
        param_dict, "bKMfNxPPf_QdZppa")
    # send the dictionary with all the credentials to the frontend

    return render(request, 'paytm/redirect.html', {
        'MID': param_dict.get('MID'),
        'ORDER_ID': param_dict.get('ORDER_ID'),
        'TXN_AMOUNT': param_dict.get('TXN_AMOUNT'),
        'CUST_ID': param_dict.get('CUST_ID'),
        'INDUSTRY_TYPE_ID': param_dict.get('INDUSTRY_TYPE_ID'),
        'WEBSITE': param_dict.get('WEBSITE'),
        'CHANNEL_ID': param_dict.get('CHANNEL_ID'),
        'WEB': param_dict.get('WEB'),
        'CALLBACK_URL': param_dict.get('CALLBACK_URL'),
        'CHECKSUMHASH': param_dict.get('CHECKSUMHASH')
    })


@api_view(['POST'])
def handlepayment(request):
    checksum = ""
    # the request.POST is coming from paytm
    form = request.POST

    response_dict = {}
    order = None  # initialize the order varible with None

    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            # 'CHECKSUMHASH' is coming from paytm and we will assign it to checksum variable to verify our paymant
            checksum = form[i]

        if i == 'ORDERID':
            # we will get an order with id==ORDERID to turn isPaid=True when payment is successful
            # order = Order.objects.get(id=form[i])
            id=form[i]
            ExtractID = id.split('-')
            fdorder = FoodOrder.objects.get(id=int(ExtractID[-1]))
            fdorder.isPaid = True
            fdorder.save()

    # we will verify the payment using our merchant key and the checksum that we are getting from Paytm request.POST
    verify = Checksum.verify_checksum(
        response_dict, "bKMfNxPPf_QdZppa", checksum)

    if verify:
        if response_dict['RESPCODE'] == '01':
            # if the response code is 01 that means our transaction is successfull
            print('order successful')
            # after successfull payment we will make isPaid=True and will save the order
            # order.isPaid = True
            # order.save()
            # we will render a template to display the payment status
            return render(request, 'paytm/paymentstatus.html', {'response': response_dict})
        else:
            print('order was not successful because' +
                  response_dict['RESPMSG'])
            return render(request, 'paytm/paymentstatus.html', {'response': response_dict})
