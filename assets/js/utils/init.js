
window.addEventListener('load', function() {
    const storedOrders= localStorage.getItem('orders');

    if(storedOrders){
        document.getElementsByClassName('bottom-basket-wrap')[0].classList.add('show');
    }

    if(!storedOrders && document.body.contains(document.getElementsByClassName('order-list')[0])) {
        document.getElementsByClassName('order-now')[0].classList.add('hidden');
        document.getElementsByClassName('order-list')[0].innerHTML = "<p>Your shopping basket is empty.</p>"

    }

});