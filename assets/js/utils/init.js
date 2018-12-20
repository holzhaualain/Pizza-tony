
window.addEventListener('load', function() {
    if(localStorage.getItem('orders')){
        document.getElementsByClassName('bottom-basket-wrap')[0].classList.add('show');

    }
});