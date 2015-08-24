'use strict';

define(function (require) {

  var assign = require('../dependencies/lodash/object/assign');
  var Tools = require('tools');

  var DEFAULT_CONFIG = {
    iterations: 256,
    super_samples: 1,
    x_min: -2.0,
    x_max:  0.5,
    y_min: -1.25,
    y_max:  1.25,
    render_fps: 10.0
  };

  return {
    getConfig: function (locationHash) {
      var config = locationHash || Tools.parseLocationHash();

      return assign(DEFAULT_CONFIG, config);
    }
  };

});
