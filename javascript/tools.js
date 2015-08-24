'use strict';

var map = require('lodash/collection/map');

module.exports = {
  parseLocationHash: function (query) {
    query = query || window.location.hash;

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
  },

  setLocationHash: function (query) {
    var keyValuePairs = map(query, function (value, key) {
      return [key, value].join('=');
    });

    window.location.hash = keyValuePairs.join('&');
  }
};
