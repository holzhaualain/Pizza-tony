import {default as dataHandler} from '../model/dataHandler.js';
import {default as backendURL} from '../utils/urls.js';

const request = new dataHandler.dataLoader();
const urls = new backendURL.backendURLs();

(function(	) {
    let currPage = document.body.className;

    switch (currPage) {
        case 'home':
            homeImages()
            break;
        case 'pizzas':
            pizzaContent()
            break;
        case 'softdrinks':
            pizzaContent()
            break;
        default:
            homeImages()
        break;
    }

    async function homeImages() {
         request.xhrRequestData(urls.getURLs().pizzas).then(result => {
             let teasersTemplate = document.getElementsByClassName("home-teasers")[0].innerHTML;
             let bigImageTemplate = document.getElementsByClassName("big-image")[0].innerHTML;

             let teasers = Handlebars.compile(teasersTemplate);
             let bigImage = Handlebars.compile(bigImageTemplate);

             let imgTeaser = bigImage(pizzaData[0]);
             document.getElementsByClassName('img-xl')[0].innerHTML += imgTeaser;

             pizzaData.forEach(function (index, i) {
                 if (i <  3) {
                     let img = teasers(pizzaData[i]);
                     document.getElementsByClassName('home-listing')[0].innerHTML += img;
                 }
                 });
             document.getElementsByClassName('1')[0].innerHTML = "Pizzas";
             document.getElementsByClassName('2')[0].innerHTML = "Salad";
             document.getElementsByClassName('3')[0].innerHTML = "Softdrinks";

             document.getElementsByClassName('1link')[0].setAttribute('href', "pizzas.html");
             document.getElementsByClassName('2link')[0].setAttribute('href', "salads.html");
             document.getElementsByClassName('3link')[0].setAttribute('href', "softdrinks.html");
         });
    }

    async function pizzaContent() {
          request.xhrRequestData(urls.getURLs().pizzas).then(result => {
            let pizzaData = result;
              console.log(pizzaData);

              let pizzasTemplate = document.getElementsByClassName("content")[0].innerHTML;
            let pizzaOffers = Handlebars.compile(pizzasTemplate);

            pizzaData.forEach(function (index, i) {
                     let img = pizzaOffers(pizzaData[i]);
                    document.getElementsByClassName('pizza-offers')[0].innerHTML += img;

            });

        });
    }


})();