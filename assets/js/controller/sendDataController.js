import {default as dataHandler} from '../model/dataHandler.js';
import {default as backendURL} from "../utils/urls.js";


const sendFormData = new dataHandler.dataLoader();
const urls = new backendURL.backendURLs();

document.getElementsByClassName('submit')[0].addEventListener('click', function (e) {
    e.preventDefault();

    let getFeedback = localStorage.getItem('feedback');
        for (let i = 0; i < document.forms["feedback-form"]["like"].length; i++) {
            document.forms["feedback-form"]["like"][i].checked = false;
        }
        for (let i = 0; i < document.forms["feedback-form"]["think"].length; i++) {
            document.forms["feedback-form"]["think"][i].checked = false;
        }

        document.forms["feedback-form"]["yourname"].value ="";
        document.forms["feedback-form"]["email"].value ="";
        document.forms["feedback-form"]["message"].value ="";

        modal("Thank you", "We appreciate your feedback.");

    /*
        sendFormData.xhrSendFeedbackData(urls.getURLs().feedback, getFeedback).then(result => {
            console.log(result.responseText);

        });
     */

});


