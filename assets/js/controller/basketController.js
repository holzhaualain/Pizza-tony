
function storeArticle(e) {
        let articleId = e.target.getAttribute('data-id');
        let article = e.target.getAttribute('data-name');
        let articleAmount = e.target.parentElement.previousSibling.previousSibling.value;
        let orders =   localStorage.getItem('orders');

        let newOrder = {
            'id':      articleId,
            'article': article,
            'amount':  articleAmount
        }

         orders = orders ? JSON.parse(orders) : {};
         orders[articleId] = newOrder

         localStorage.setItem('orders', JSON.stringify(orders));
            modal("Shopping basket updated", articleAmount+"x "+article+"are in your shopping basket.");

             let test =  localStorage.getItem('orders');
    /*    test = test.split(',')
          console.log(JSON.parse(test));

    /*  let =   localStorage.getItem('orders');
    // localStorage.setItem('orders', JSON.stringify(article));

    orders = orders ? orders.split(',') : [];

      orders.push({id:article});

       localStorage.setItem('orders', JSON.stringify(orders));


      let test =  localStorage.getItem('orders');
         // console.log(JSON.parse(test));

      test = test.split(',')



     let valuesSoFar = Object.create(null);

     for (let i = 0; i < test.length; ++i) {
         let value = test[i];

         if (value in valuesSoFar) {
             console.log(valuesSoFar);

         } else {
             console.log(value + ': first');
         }
         valuesSoFar[value] = true;

     }

    /*
    let orders = ordersExist ? ordersExist.split(',') : [];
     let count = 1

             orders.push(article);

     localStorage.setItem('orders', orders.toString());
     let testArray = localStorage.getItem('orders');
     JSON.parse(testArray)
     let valuesSoFar = Object.create(null);

         for (let i = 0; i < testArray.length; ++i) {
             let value = testArray[i];

             if (value in valuesSoFar) {
                console.log(valuesSoFar);
             }
             valuesSoFar[value] = true;
         }
         return false;
    */
}

let articles = [
    'pizzas',{

}
]