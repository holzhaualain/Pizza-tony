import {default as dataHandler} from '../model/dataHandler.js';
import {default as backendURL} from '../utils/urls.js';

const request = new dataHandler.dataLoader();
const urls = new backendURL.backendURLs();

(function(	) {
    let currPage = document.body.className;

    switch (currPage) {
        case 'home':
            homeImages(urls.getURLs().pizzas)
            break;
        case 'pizzas':
            articleListing(urls.getURLs().pizzas)
            break;
        case 'softdrinks':
            articleListing(urls.getURLs().softdrinks)
            break;
        case 'salads':
            articleListing(urls.getURLs().salads)
            break;
        default:
            homeImages()
            break;
    }

    async function homeImages(url) {
        request.xhrRequestData(url).then(result => {
            let teasersTemplate = document.getElementsByClassName("home-teasers")[0].innerHTML;
            let bigImageTemplate = document.getElementsByClassName("big-image")[0].innerHTML;

            let teasers = Handlebars.compile(teasersTemplate);
            let bigImage = Handlebars.compile(bigImageTemplate);

            let imgTeaser = bigImage(result[0]);
            document.getElementsByClassName('img-xl')[0].innerHTML += imgTeaser;

            result.forEach(function (index, i) {
                if (i <  3) {
                    let img = teasers(result[i]);
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

    async function articleListing(url) {
        request.xhrRequestData(url).then(result => {
            let articleData = result;

            let articlesTemplate = document.getElementsByClassName("content")[0].innerHTML;
            let articles = Handlebars.compile(articlesTemplate);

            articleData.forEach(function (index, i) {
                let img = articles(articleData[i]);
                document.getElementsByClassName('pizza-offers')[0].innerHTML += img;

            });

        });
    }

})();