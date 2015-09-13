'use strict';

import HashSubscriber from 'hash-subscriber';

import Config            from 'javascript/config';
import parseLocationHash from 'javascript/tools/parseLocationHash';
import Viewport          from 'javascript/viewport';

let CONFIG;
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

    this.viewport = Viewport({
      bounds: {
        x: {min: CONFIG.x_min, max: CONFIG.x_max},
        y: {min: CONFIG.y_min, max: CONFIG.y_max} 
      },
      canvas: this.canvas,
      renderer: this
    });
    
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
    var ITERATIONS = CONFIG.iterations;
    var SUPER_SAMPLES = CONFIG.super_samples;

    var dx = this.viewport.delta().x;
    var dy = this.viewport.delta().y;

    var imageData = new ImageData(this.canvas.width, 1);
    var topLeft = this.viewport.topLeft();

    for (var x_index = 0; x_index < this.canvas.width; x_index++) {

      var crossoverIteration = 0;
      for (var sample = 0; sample < SUPER_SAMPLES; sample++) {
        var x = topLeft.x + (x_index + Math.random()) * dx;
        var y = topLeft.y + (y_index + Math.random()) * dy;

        crossoverIteration += equation(x, y);
      }

      var color = (255 / ITERATIONS) / SUPER_SAMPLES * crossoverIteration;

      var dataIndex = x_index * 4;
      imageData.data[dataIndex + 0] = 255;
      imageData.data[dataIndex + 1] = 255;
      imageData.data[dataIndex + 2] = 255;
      imageData.data[dataIndex + 3] = color;
    }

    this.context.putImageData(imageData, 0, y_index);
  }
};

HashSubscriber.subscribe(['iterations', 'super_samples', 'x_min', 'x_max', 'y_min', 'y_max'], params => {
  Renderer.render({ locationHash: params });
});

export default Renderer;
