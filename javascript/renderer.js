'use strict';

import HashSubscriber from 'hash-subscriber';

import Config            from 'javascript/config';
import parseLocationHash from 'javascript/tools/parseLocationHash';
import Viewport          from 'javascript/viewport';

/* these values are constant for a particular render */
let CONFIG, SUPER_SAMPLES, DX, DY, TOP_LEFT;
const Renderer = {
  activelyRendering: false,
  canvas: null,
  init({ equation }) {
    this.equation = equation;
    this.canvas = document.getElementById("mandelbrot");
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.context = this.canvas.getContext("2d");
  },
  render({ equation = this.equation, locationHash = parseLocationHash() }) {
    this.equation = equation;
    
    CONFIG = Config.getConfig(locationHash);
    SUPER_SAMPLES = CONFIG.super_samples;

    this.viewport = Viewport({
      bounds: {
        x: {min: CONFIG.x_min, max: CONFIG.x_max},
        y: {min: CONFIG.y_min, max: CONFIG.y_max} 
      },
      canvas: this.canvas,
      renderer: this
    });

    DX = this.viewport.delta().x;
    DY = this.viewport.delta().y;
    TOP_LEFT = this.viewport.topLeft();
    
    /* eslint-disable no-console */
    new Promise(resolve => {
      this.activelyRendering = true;
      console.time('render timer');
      requestAnimationFrame(this.renderRows.bind(this, equation, 0, resolve));
    }).then(() => {
      this.activelyRendering = false;
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
      let value = this.renderPixel(x_index, y_index, equation) / SUPER_SAMPLES;

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
    
    return superSampledValue;
  }
};

HashSubscriber.subscribe(['iterations', 'super_samples', 'x_min', 'x_max', 'y_min', 'y_max'], params => {
  Renderer.render({ locationHash: params });
});

export default Renderer;
