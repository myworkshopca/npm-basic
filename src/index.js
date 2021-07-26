/**
 * Check this post for module.exports and exports.
 * - https://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */
//module.exports = require('./singleton.js');

// export the singleton.
module.exports.basicSingleton = require('./singleton.js');

// export the normal class.
module.exports.normalClass = require('./normalClass.js');