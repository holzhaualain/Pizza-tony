window.addEventListener('load', function() {
    const storedOrders= localStorage.getItem('orders');

    if(localStorage.getItem('orders')){
        document.getElementsByClassName('bottom-basket-wrap')[0].classList.add('show');
    }

    if(!storedOrders && document.body.contains(document.getElementsByClassName('basket-items')[0])) {
        document.getElementsByClassName('basket-items')[0].classList.add('hidden');
        document.getElementsByClassName('order-now')[0].classList.add('hidden');

        document.getElementsByClassName('basket-empty')[0].classList.add('show');

    }

});