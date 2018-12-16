'use strict'

class backendURLs {

    constructor() {
        this.urls =
            {
                "pizzas": 'https://tonyspizzafactory.herokuapp.com/api/pizzas'

            }
    }

    getURLs(){
        return this.urls;
    }


}
export default {backendURLs};

