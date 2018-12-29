import {default as dataHandler} from '../model/dataHandler.js';
import {default as backendURL} from "../utils/urls.js";

const sendFormData = new dataHandler.dataLoader();
const urls = new backendURL.backendURLs();

if (document.body.contains(document.getElementsByClassName('feedback-form')[0])) {
    document.getElementsByClassName('submit')[0].addEventListener('click', function (e) {
        e.preventDefault();

        let getFeedback = localStorage.getItem('feedback');
        for (let i = 0; i < document.forms["feedback-form"]["pizzaRating"].length; i++) {
            document.forms["feedback-form"]["pizzaRating"][i].checked = false;
        }
        for (let i = 0; i < document.forms["feedback-form"]["prizeRating"].length; i++) {
            document.forms["feedback-form"]["prizeRating"][i].checked = false;
        }

        document.forms["feedback-form"]["name"].value = "";
        document.forms["feedback-form"]["email"].value = "";
        document.forms["feedback-form"]["feedback"].value = "";


        sendFormData.xhrSendFeedbackData(urls.getURLs().feedback, getFeedback).then(result => {
        if (result ==="success") {
            modal("Thank you", "We appreciate your feedback.");
            document.getElementsByClassName("submit")[0].disabled = true;
            localStorage.removeItem('feedback');
            document.getElementsByClassName('feedback-form')[0].classList.add("hidden");
            document.getElementsByClassName('feedback-stats-wrap')[0].classList.add("show");

            }
        });


    });
}
if(document.body.contains(document.getElementsByClassName('order-now')[0])) {
    document.getElementsByClassName('order-now')[0].addEventListener('click', function (e) {
        e.preventDefault();

        let orders = localStorage.getItem('serverOrder');
        sendFormData.xhrSendFeedbackData(urls.getURLs().orders, orders).then(result => {
            modal("Thank you!", "Your order is on its way!");

            document.getElementsByClassName('basket-items')[0].innerHTML = "<p>Your shopping basket is empty.</p>"
            document.getElementsByClassName('bottom-basket-wrap')[0].classList.remove('show');
            document.getElementsByClassName('order-now')[0].classList.add('hidden');
            localStorage.removeItem('orders');
            localStorage.removeItem('serverOrder');

        });


    });

}
