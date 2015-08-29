'use strict';

import assign from 'lodash/object/assign';
import { parseLocationHash } from 'javascript/tools';

import 'dependencies/skeleton/css/normalize.css';
import 'dependencies/skeleton/css/skeleton.css';
import 'css/mandelbrot.css';
import 'css/header.css';

var DEFAULT_CONFIG = {
  iterations: 256,
  super_samples: 1,
  x_min: -2.0,
  x_max:  0.5,
  y_min: -1.25,
  y_max:  1.25,
  render_fps: 10.0
};

export default {
  getConfig: function (locationHash) {
    var config = locationHash || parseLocationHash();

    return assign(DEFAULT_CONFIG, config);
  }
};
