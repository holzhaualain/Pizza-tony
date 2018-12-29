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

        case 'feedback':
            showFeedbackStats(urls.getURLs().feedback)
            break;

        default:
            homeImages()
            break;
    }
    async function homeImages(url) {
        request.xhrRequestData(url).then(result => {
             let bigImageTemplate = document.getElementsByClassName("big-image")[0].innerHTML;
             let bigImage = Handlebars.compile(bigImageTemplate);
            let imgTeaser = bigImage(result[0]);
            document.getElementsByClassName('img-xl')[0].innerHTML += imgTeaser;

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


    async function showFeedbackStats(url) {
        request.xhrRequestData(url).then(result => {
            let feedbackData = result;

                let pizzaRatingAwesome = feedbackData.filter(value => value.pizzaRating === "awesome").length;
                let pizzaRatingGood = feedbackData.filter(value => value.pizzaRating === "good").length;
                let pizzaRatingOkay = feedbackData.filter(value => value.pizzaRating === "okay").length;
                let pizzaRatingPoor = feedbackData.filter(value => value.pizzaRating === "poor").length;

                let prizeRatingCountFair = feedbackData.filter(value => value.prizeRating === "fair").length;
                let prizeRatingCountOkay = feedbackData.filter(value => value.prizeRating === "okay").length;
                let prizeRatingCountExp = feedbackData.filter(value => value.prizeRating === "expensive").length;

            let feedbackResults = {
                "pizzaRatingAwesome" : pizzaRatingAwesome,
                "pizzaRatingGood" : pizzaRatingGood,
                "pizzaRatingOkay" : pizzaRatingOkay,
                "pizzaRatingPoor" : pizzaRatingPoor,
                "prizeRatingCountFair" : prizeRatingCountFair,
                "prizeRatingCountOkay" : prizeRatingCountOkay,
                "prizeRatingCountExp" : prizeRatingCountExp


            };
            Object.keys(feedbackResults).forEach(function(key) {

                document.getElementsByClassName(key)[0]
                    .innerHTML += feedbackResults[key];

            });


        });
    }

})();