'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  MDB.parseQuery = function (query) {
    query = query || window.location.search;

    var keyValuePairs;
    if (query.length > 0) {
      keyValuePairs = query.slice(1).split('&');
    } else {
      keyValuePairs = [];
    }

    return keyValuePairs.reduce(function (hash, keyValuePair) {
      var splitKeyValue = keyValuePair.split('=');

      var key   = splitKeyValue[0];
      var value = splitKeyValue[1];

      if (isNaN(value)) {
        hash[key] = value;  
      } else {
        hash[key] = parseFloat(value);
      }

      return hash;
  	}, {});
  };

  MDB.setQuery = function (query) {
    var keyValuePairs = _.map(query, function (value, key) {
      return [key, value].join('=');
    });

    window.location.search = '?' + keyValuePairs.join('&');
  };
})(this);
