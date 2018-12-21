
function storeArticle(e) {
        let articleId = e.target.getAttribute('data-id');
        let article = e.target.getAttribute('data-name');
        let articlePrize = e.target.getAttribute('data-prize');

        let articleAmount = e.target.parentElement.previousSibling.previousSibling.value;
        let orders =   localStorage.getItem('orders');

        let newOrder = {
            'id':      articleId,
            'article': article,
            'amount':  articleAmount,
            'prize': articlePrize
        }

         orders = orders ? JSON.parse(orders) : {};
         orders[articleId] = newOrder

         localStorage.setItem('orders', JSON.stringify(orders));
         modal("Shopping basket updated!", "<strong>"+articleAmount+"x "+article+"</strong> added to your shopping basket.");
        document.getElementsByClassName('bottom-basket-wrap')[0].classList.add('show');
}