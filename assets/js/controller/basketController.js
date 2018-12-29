function storeArticle(e) {
    let articleId = e.target.getAttribute('data-id');
    let article = e.target.getAttribute('data-name');
    let articlePrize = e.target.getAttribute('data-prize');
    let articleType= e.target.getAttribute('data-type');

    let articleAmount = e.target.parentElement.previousSibling.previousSibling.value;

    let orders = localStorage.getItem('orders');
    let serverOrder = localStorage.getItem('serverOrder');

    let newOrder = {
        'id': articleId,
        'name': article,
        'amount':  articleAmount,
         'type':  articleType,
         'prize': articlePrize,
    }

    let pseudoOrder = {
        'id': Number(articleId),
        'name': article,
        'type': articleType
     }

    orders = orders ? JSON.parse(orders) : {};
    orders[articleId] = newOrder;

    if (!serverOrder) {
        localStorage.setItem('serverOrder', JSON.stringify(pseudoOrder));
    }

    localStorage.setItem('orders', JSON.stringify(orders));

    modal("Shopping basket updated!", "<strong>"+articleAmount+"x "+article+"</strong> added to your shopping basket.");
    document.getElementsByClassName('bottom-basket-wrap')[0].classList.add('show');
}