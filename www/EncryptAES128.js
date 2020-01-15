var exec = require('cordova/exec');

var PLUGIN_NAME = "cordova-plugin-aes128"; // This is just for code completion uses.

// var AES128 = function() {}; // This just makes it easier for us to export all of the functions at once.
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
// AES128.showToast = function(onSuccess, onError) {
//    exec(onSuccess, onError, PLUGIN_NAME, "showToast", []);
// };
// module.exports = AES128;

var AES128 = function() {
   console.log('AndroidToast instanced');
};

AES128.prototype.show = function(msg, onSuccess, onError) {
   var errorCallback = function(obj) {
       onError(obj);
   };

   var successCallback = function(obj) {
       onSuccess(obj);
   };

   exec(successCallback, errorCallback, PLUGIN_NAME, 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
   module.exports = AES128;
}
