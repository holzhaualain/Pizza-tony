

(function () {
    loadOrders()
    function loadOrders() {
        let myOrders = localStorage.getItem('orders');
         myOrders = JSON.parse(myOrders);

         let ordersArray = [myOrders];
          let ordersTemplate = document.getElementsByClassName("orders")[0].innerHTML;
        let orders = Handlebars.compile(ordersTemplate);

        Object.values(myOrders).forEach(value => {
            let data = orders(value);
            document.getElementsByClassName('order-list')[0].innerHTML += data;

        });


         for (const key in myOrders){
            console.log(myOrders[key]);
        }

    }


})()

