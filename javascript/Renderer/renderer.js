'use strict';

import Config            from 'javascript/config';
import parseLocationHash from 'javascript/tools/parseLocationHash';

import assign from 'lodash/object/assign';

/* these values are constant for a particular render */
let CONFIG, SUPER_SAMPLES, DX, DY, TOP_LEFT;
const RENDERER_PROTOTYPE = {
  init({ applicationStatus, canvas, equation, viewport }) {
    assign(this, { applicationStatus, canvas, equation, viewport });

    this.context = this.canvas.getContext("2d");
  },
  render({ equation = this.equation, locationHash = parseLocationHash() }) {
    this.equation = equation;
    
    CONFIG = Config.getConfig(locationHash);
    SUPER_SAMPLES = CONFIG.super_samples;

    DX = this.viewport.delta().x;
    DY = this.viewport.delta().y;
    TOP_LEFT = this.viewport.topLeft();
    
    /* eslint-disable no-console */
    new Promise(resolve => {
      this.applicationStatus.activelyRendering = true;
      console.time('render timer');
      requestAnimationFrame(this.renderRows.bind(this, equation, 0, resolve));
    }).then(() => {
      this.applicationStatus.activelyRendering = false;
      console.timeEnd('render timer');
    });
    /* eslint-enable no-console */
  },
  renderRows(equation, y_index, resolve) {
    let timestamp = (new Date()).getTime();

    while(y_index < this.canvas.height && (new Date()).getTime() - timestamp < 1000.0 / CONFIG.render_fps) {
      this.renderRow(equation, y_index++);
    }

    if (y_index < this.canvas.height) {
      requestAnimationFrame(this.renderRows.bind(this, equation, y_index, resolve));
    } else {
      requestAnimationFrame(resolve);
    }
  },
  renderRow(equation, y_index) {
    var imageData = new ImageData(this.canvas.width, 1);

    for (var x_index = 0; x_index < this.canvas.width; x_index++) {
      let value = this.renderPixel(x_index, y_index, equation);

      let dataIndex = x_index * 4;
      imageData.data[dataIndex + 0] = 255;
      imageData.data[dataIndex + 1] = 255;
      imageData.data[dataIndex + 2] = 255;
      imageData.data[dataIndex + 3] = value;
    }

    this.context.putImageData(imageData, 0, y_index);
  },
  renderPixel(x_index, y_index, equation) {
    let superSampledValue = 0;

    for (let sample = 0; sample < SUPER_SAMPLES; sample++) {
      var x = TOP_LEFT.x + (x_index + Math.random()) * DX;
      var y = TOP_LEFT.y + (y_index + Math.random()) * DY;

      superSampledValue += equation(x, y);
    }
    
    return superSampledValue / SUPER_SAMPLES;
  }
};

export default function ({ applicationStatus, canvas, equation, viewport }) {
  var renderer = Object.create(RENDERER_PROTOTYPE);

  renderer.init({ applicationStatus, canvas, equation, viewport });

  return renderer;
}
