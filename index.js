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
    }
};

// export the object.
module.exports = basicSingleton;