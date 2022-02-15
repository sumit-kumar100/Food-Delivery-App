import environ
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import FoodOrder
from . import Checksum

env = environ.Env()

environ.Env.read_env()


@api_view(['POST'])
def start_payment(request):
    OrderID = request.data['OrderID']

    ValidOrderId = OrderID.split('-')

    order = FoodOrder.objects.get(id=int(ValidOrderId[-1]))

    param_dict = {
        'MID': 'MERCHANT_ID',   # WRITE YOUR OWN PAYTM MERCHANT ID...... ! IMPORTANT
        'ORDER_ID': 'Order-ID-' + str(order.id),
        'TXN_AMOUNT': str(order.Amount),
        'CUST_ID': 'Customer-ID-' + str(order.id),
        'INDUSTRY_TYPE_ID': 'Retail',
        'WEBSITE': 'WEBSTAGING',
        'CHANNEL_ID': 'WEB',
        'CALLBACK_URL': 'http://xyz.com/paytm/handlepayment/',    # In my Case it was http://anjali1196.pythonanywhere.com/paytm/handlepayment/
    }

    param_dict['CHECKSUMHASH'] = Checksum.generate_checksum(
        param_dict, "MERCHANT_KEY") # Your merchant key...

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
    form = request.POST

    response_dict = {}
    order = None

    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            checksum = form[i]

        if i == 'ORDERID':
            id=form[i]
            ExtractID = id.split('-')
            fdorder = FoodOrder.objects.get(id=int(ExtractID[-1]))
            fdorder.isPaid = True
            fdorder.save()

    verify = Checksum.verify_checksum(
        response_dict, "MERCHANT_KEY", checksum)   # WRITE YOUR OWN MERCHANT KEY...

    if verify:
        if response_dict['RESPCODE'] == '01':
            print('order successful')
            return render(request, 'paytm/paymentstatus.html', {'response': response_dict})
        else:
            print('order was not successful because' +
                  response_dict['RESPMSG'])
            return render(request, 'paytm/paymentstatus.html', {'response': response_dict})
