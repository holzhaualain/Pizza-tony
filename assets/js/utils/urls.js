'use strict'

class backendURLs {

    constructor() {
        this.urls =
            {
                "pizzas": 'https://tonyspizzafactory.herokuapp.com/api/pizzas',
                "feedback": 'https://tonyspizzafactory.herokuapp.com/api/feedback',
                "orders": 'https://tonyspizzafactory.herokuapp.com/api/orders',
                "salads": 'https://tonyspizzafactory.herokuapp.com/api/salads',
                "softdrinks": 'https://tonyspizzafactory.herokuapp.com/api/softdrinks'

            }
    }

    getURLs(){
        return this.urls;
    }


}
export default {backendURLs};
