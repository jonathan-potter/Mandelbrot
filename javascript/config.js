'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var Tools = MDB.Tools;

  var DEFAULT_CONFIG = {
    iterations: 256,
    super_samples: 1,
    x_min: -2.0,
    x_max:  0.5,
    y_min: -1.25,
    y_max:  1.25,
    render_fps: 10.0
  };

  MDB.Config = {
	getConfig: function (locationHash) {
	  var config = locationHash || Tools.parseLocationHash();

  	  return _.assign(DEFAULT_CONFIG, config);
    }
  };

})(this);
