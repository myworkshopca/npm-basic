'use strict';

/**
 * reverence nodejs.org document:
 * - https://nodejs.org/api/modules.html
 */
module.exports = class normalClass {
    /**
     * constructor
     */
    constructor(message) {
        this.msg = message;
    }
    
    greetingMsg() {

        console.log(this.msg)
    }
};

