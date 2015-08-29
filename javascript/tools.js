'use strict';

import map from 'lodash/collection/map';

const parseLocationHash = function (query = window.location.hash) {
  var keyValuePairs;
  if (query.length > 0) {
    keyValuePairs = query.slice(1).split('&');
  } else {
    keyValuePairs = [];
  }

  return keyValuePairs.reduce((hash, keyValuePair) => {
    let [key, value] = keyValuePair.split('=');

    if (value && isNaN(value)) {
      hash[key] = value;  
    } else {
      hash[key] = parseFloat(value);
    }

    return hash;
  }, {});
};

const setLocationHash = function (query) {
  var keyValuePairs = map(query, (value, key) => {
    return [key, value].join('=');
  });

  window.location.hash = keyValuePairs.join('&');
};

export default { parseLocationHash, setLocationHash };   
