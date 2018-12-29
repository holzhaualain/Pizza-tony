(function () {

    if (localStorage.getItem('orders')) {

        loadOrders()
    }

    function loadOrders() {
        let myOrders = localStorage.getItem('orders');
        myOrders = JSON.parse(myOrders);

        let ordersArray = [myOrders];
        let ordersTemplate = document.getElementsByClassName("orders")[0].innerHTML;
        let orders = Handlebars.compile(ordersTemplate);

        Object.values(myOrders).forEach(value => {
            let data = orders(value);
            document.getElementsByClassName('basket-table-body')[0].innerHTML += data;

        });

        const articlePrize = document.querySelectorAll(".prize");
        let counter = 0;

        articlePrize.forEach(a => {
            let temp = a.innerHTML.replace('$','');
            counter += parseInt(temp);
        });

        document.getElementsByClassName('total-amount')[0].innerHTML = counter +"$";
    }


})()