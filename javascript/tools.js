'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  MDB.parseQuery = function (query) {
    var keyValuePairs = query.slice(1).split('&');

    return keyValuePairs.reduce(function (hash, keyValuePair) {
      var splitKeyValue = keyValuePair.split('=');

      var key   = splitKeyValue[0];
      var value = splitKeyValue[1];

      if (isNaN(value)) {
        hash[key] = value;  
      } else {
        hash[key] = parseInt(value);
      }

      return hash;
  	}, {});
  };
})(this);