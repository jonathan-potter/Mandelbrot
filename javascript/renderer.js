'use strict';

import Config            from 'javascript/config';
import { Mandelbrot }    from 'javascript/mandelbrot';
import parseLocationHash from 'javascript/tools/parseLocationHash';
import Viewport          from 'javascript/viewport';

var CONFIG;
export default {
  activelyRendering: false,
  canvas: null,
  init: function () {
    this.canvas = document.getElementById("mandelbrot");
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
    this.context = this.canvas.getContext("2d");
  },
  render: function (locationHash) {
    if (!locationHash) { locationHash = parseLocationHash(locationHash); }

    var self = this;
    
    CONFIG = Config.getConfig(locationHash);

    self.viewport = Viewport({
      bounds: {
        x: {min: CONFIG.x_min, max: CONFIG.x_max},
        y: {min: CONFIG.y_min, max: CONFIG.y_max} 
      },
      canvas: self.canvas,
      renderer: self
    });
    
    /* eslint-disable no-console */
    new Promise(function (resolve) {
      self.activelyRendering = true;
      console.time('render timer');
      requestAnimationFrame(self.renderRows.bind(self, 0, resolve));
    }).then(function () {
      self.activelyRendering = false;
      console.timeEnd('render timer');
    });
    /* eslint-enable no-console */
  },
  renderRows: function (y_index, resolve, timestamp) {
    while(y_index < this.canvas.height && performance.now() - timestamp < 1000.0 / CONFIG.render_fps) {
      this.renderRow(y_index++);
    }

    if (y_index < this.canvas.height) {
      requestAnimationFrame(this.renderRows.bind(this, y_index, resolve));
    } else {
      requestAnimationFrame(resolve);
    }
  },
  renderRow: function (y_index) {
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

        crossoverIteration += Mandelbrot(x, y);
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
