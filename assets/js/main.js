
var Http = new XMLHttpRequest();

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4';

var urls = {
    "test": 'https://jsonplaceholder.typicode.com/todos/1', // JSONPlaceholder - works
    "pizzas": 'https://tonyspizzafactory.herokuapp.com/api/pizzas'
};


$(document).ready(function () {

    var settings = {
        'cache': false,
        'dataType': "jsonp",
        "async": true,
        "crossDomain": true,
        "url": urls.test,
        "method": "GET",
        "headers": {
           "Accept": "text/plain; charset=utf-8",
            "Content-Type": "text/plain; charset=utf-8",
            "Access-Control-Allow-Origin":"*",
            "Authorization": token
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);

    });

});
/*


var myHeaders = new Headers(
    {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'Basic '+ token
        // "Content-Type": "application/x-www-form-urlencoded",
    }
);

var myInit = {
    method: 'GET',
    headers: myHeaders,
     mode: "no-cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
};

var myRequest = new Request(urls.pizzas, myInit);

fetch(myRequest).then(function(response) {
    return response;
}).then(function(response) {
    console.log(response);

});



fetch(urls.pizzas, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "no-cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        'Authorization': 'Basic '+ token
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
})
    .then(response => response.json()); // parses response to JSON


console.log(urls.pizzas);

Http.open("GET", urls.pizzas, true);

Http.setRequestHeader('Content-Type', 'application/JSON');
Http.setRequestHeader("Authorization", "Basic " + token);
Http.withCredentials = true;


Http.send();

Http.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200) {
        console.log(Http.responseText);
    }
    else {
        console.log("error: " + Http.error.message);
    }
}

*/