import {default as requestData} from '../model/loadData.js';
import {default as backendURL} from '../utils/urls.js';

const request = new requestData.dataLoader();
const urls = new backendURL.backendURLs();

(function(	) {
    let currPage = document.body.className;
     if (currPage === 'home') {
            homeImages();
    }
    if (currPage === 'pizzas') {
        pizzaContent();
    }

    async function homeImages() {
         request.xhrRequest(urls.getURLs().pizzas).then(result => {
              let pizzaData = result;

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

        });
    }

    async function pizzaContent() {
          request.xhrRequest(urls.getURLs().pizzas).then(result => {
            let pizzaData = result;

            let pizzasTemplate = document.getElementsByClassName("content")[0].innerHTML;
            let pizzaOffers = Handlebars.compile(pizzasTemplate);

            pizzaData.forEach(function (index, i) {
                     let img = pizzaOffers(pizzaData[i]);
                    document.getElementsByClassName('pizza-offers')[0].innerHTML += img;

            });

        });
    }

})();