'use strict';

// using a simple Object for data storage.
const data = {};

// a simple Object will be a singleton.
const basicSingleton = {

    greetingMsg: function() {

        if( data.hasOwnProperty('greeting_message') ) {
            console.log(data.greeting_message);
        } else {
            console.log('No greeting message yet!');
        }
    },

    /**
     * set message.
     */
    setMsg: function(message) {

        data.greeting_message = message;
    }
};

// export the object.
module.exports = basicSingleton;