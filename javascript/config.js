'use strict';

import assign from 'lodash/object/assign';
import parseLocationHash from 'javascript/tools/parseLocationHash';
import setLocationHash from 'javascript/tools/setLocationHash'

var DEFAULT_CONFIG = {
  iterations: 256,
  super_samples: 1,
  x_min: -2.0,
  x_max:  0.5,
  y_min: -1.25,
  y_max:  1.25,
  render_fps: 10.0
};

let Config = {
  currentConfig: {},
  getConfig(locationHash = parseLocationHash()) {
    Config.currentConfig = assign({}, DEFAULT_CONFIG, locationHash);

    return Config.currentConfig;
  },
  setConfig(configChanges) {
    let newConfig = assign({}, Config.getConfig(), configChanges);

    setLocationHash(newConfig);
  }
};

export default Config;
