
var xhr = new XMLHttpRequest();

var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4';

var urls = {
    "test": 'https://jsonplaceholder.typicode.com/todos/1', // JSONPlaceholder - works
    "pizzas": 'https://tonyspizzafactory.herokuapp.com/api/pizzas'
};



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


// var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4";
var xhr = new XMLHttpRequest();
var url = "https://tonyspizzafactory.herokuapp.com/api/pizzas";
xhr.open("GET", url, true);

xhr.onreadystatechange= function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        DATAHTML(json);
    }
};

xhr.setRequestHeader('Authorization', token);
xhr.send(null);

function DATAHTML(data) {
    var resultat = "";

    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        resultat += "<p>" + data[i].name + "</p>";
    }

}



*/
xhr.open("GET", urls.pizzas, true);

xhr.setRequestHeader('Content-Type', 'application/JSON');
xhr.setRequestHeader("Authorization", token);

xhr.send(null);

xhr.onreadystatechange = function(){

    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
    }
    else {
     }
}

