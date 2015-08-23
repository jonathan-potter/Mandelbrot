'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var query = MDB.parseQuery(window.location.search);

  var CONFIG = _.assign({
    iterations: 256,
    super_samples: 1,
    x_min: -2.0,
    x_max:  0.5,
    y_min: -1.25,
    y_max:  1.25
  }, query);

  var ITERATIONS = CONFIG.iterations;
  var SUPER_SAMPLES = CONFIG.super_samples;
  var RENDER_FPS = 10.0;

  MDB.canvas = document.getElementById("mandelbrot"),

  MDB.init = function () {
    MDB.activelyRendering = false;
    MDB.WIDTH = MDB.canvas.offsetWidth;
    MDB.HEIGHT = MDB.canvas.offsetHeight;
    MDB.canvas.width = MDB.WIDTH;
    MDB.canvas.height = MDB.HEIGHT;
    MDB.ctx = MDB.canvas.getContext("2d");
    MDB.viewport = MDB.Viewport({
      x: {min: CONFIG.x_min, max: CONFIG.x_max},
      y: {min: CONFIG.y_min, max: CONFIG.y_max}
    });

    MDB.viewport.bindToCanvas(MDB.canvas);
  },

  MDB.mandelbrot = function (pixel, iteration) {
    if (iteration >= ITERATIONS) { return 0; }
    /* the base equation for the mandelbrot set is  */
    /* f(z) = z^2 + c */

    var c = pixel.c;
    var z = pixel.z;
    var real = z.real * z.real - z.imaginary * z.imaginary + c.real;
    var imaginary = 2 * z.real * z.imaginary + c.imaginary;

    pixel.z.real = real;
    pixel.z.imaginary = imaginary;

    if (real * real + imaginary * imaginary > 4) {
      return iteration;
    }

    return MDB.mandelbrot(pixel, ++iteration || 1);
  },

  MDB.render = function () {
    MDB.activelyRendering = true;
    console.time('render timer');

    var dx = MDB.viewport.delta().x;
    var dy = MDB.viewport.delta().y;

    var imageData = new ImageData(MDB.WIDTH, 1);
    var lastUpdate = (new Date()).getTime();
    var topLeft = MDB.viewport.topLeft();

    MDB.renderRows(dx, dy, topLeft, lastUpdate, imageData, 0);
  };

  MDB.renderRows = function (dx, dy, topLeft, lastUpdate, imageData, y_index) {   
    /* thanks to cslarsen */
    /* https://github.com/cslarsen/mandelbrot-js */
    /* allow the screen to refresh after a given period */

    if (y_index < MDB.HEIGHT) {
      MDB.renderRow(dx, dy, topLeft, lastUpdate, imageData, y_index);

      var now = (new Date()).getTime();
      var timeSinceLastUpdate = now - lastUpdate;
      if (timeSinceLastUpdate >= 1000.0 / RENDER_FPS) {
        lastUpdate = now;
        setTimeout(function () {
          MDB.renderRows(dx, dy, topLeft, lastUpdate, imageData, ++y_index);
        }, 0);
      } else {
        MDB.renderRows(dx, dy, topLeft, lastUpdate, imageData, ++y_index);
      }
    } else {
      MDB.activelyRendering = false;
      console.timeEnd('render timer');
    }
  };

  MDB.renderRow = function (dx, dy, topLeft, lastUpdate, imageData, y_index) {
    for (var x_index = 0; x_index < MDB.WIDTH; x_index++) {

      var crossoverIteration = 0;
      for (var sample = 0; sample < SUPER_SAMPLES; sample++) {
        var x = topLeft.x + (x_index + Math.random()) * dx;
        var y = topLeft.y + (y_index + Math.random()) * dy;

        crossoverIteration += MDB.mandelbrot({
          c: {real: x, imaginary: y},
          z: {real: 0, imaginary: 0}
        });
      }

      var color = (255 / ITERATIONS) / SUPER_SAMPLES * crossoverIteration;

      var dataIndex = x_index * 4;
      imageData.data[dataIndex + 0] = 255;
      imageData.data[dataIndex + 1] = 255;
      imageData.data[dataIndex + 2] = 255;
      imageData.data[dataIndex + 3] = color;
    }

    MDB.ctx.putImageData(imageData, 0, y_index);
  };

})(this);
