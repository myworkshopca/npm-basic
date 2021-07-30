'use strict';

/**
 * Explore the spread syntax (...)
 * 
 * Spread syntax takes in an iterable (e.g an array)
 * and expends it into individual elements.
 * 
 * Reference some post:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * - https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1
 */

const spreadCases = {

    basicUsage: function() {
        
        console.log('Basic usage!');

        // copy array (iterable)
        let array = [1, 2, 3];
        let array1 = [...array]
        
        console.log(array1);
        console.log(array == array1)
        console.log(array === array1)
    }
};

module.exports = spreadCases;