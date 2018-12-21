'use strict'

/* ///////////////////////////////////////////////////////////////////
	notes handler class
/////////////////////////////////////////////////////////////////// */



class dataLoader {

    constructor() {

        this.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.MQ.bYceSpllpyYQixgNzDt7dpCkEojdv3NKD-85XLXfdI4';

    }

    async xhrRequestData(url) {
        const xhr = new XMLHttpRequest();

        // Setup our HTTP request
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-Type', 'application/JSON');
        xhr.setRequestHeader("Authorization", this.token);
        xhr.send(null);

        return new Promise(function (resolve, reject) {

            xhr.onreadystatechange = function () {

                 if (xhr.readyState !== 4) return;

                 if (xhr.status >= 200 && xhr.status < 300) {
                    // If successful
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    // If failed
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }

            }

        });
     }

    async xhrSendFeedbackData(url, feedback) {
        const xhr = new XMLHttpRequest();

        // Setup our HTTP request
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/JSON');
        xhr.setRequestHeader("Authorization", this.token);
        xhr.send(feedback);

        return new Promise(function (resolve, reject) {

            xhr.onreadystatechange = function () {

                if (xhr.readyState !== 4) return;

                if (xhr.status >= 200 && xhr.status < 300) {
                    // If successful
                    resolve(xhr.responseText);
                } else {
                    // If failed
                    reject({
                     status: xhr.status,
                        statusText: xhr.statusText
                    });
                }

            }

        });
    }

}



export default {dataLoader};
