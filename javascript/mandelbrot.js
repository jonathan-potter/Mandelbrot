'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var query = MDB.parseQuery(window.location.search);

  var iterations = 256;
  var SUPER_SAMPLES = query.super_samples || 1;

  MDB.canvas = document.getElementById("mandelbrot"),

  MDB.init = function () {
    MDB.activelyRendering = false;
    MDB.WIDTH = MDB.canvas.offsetWidth;
    MDB.HEIGHT = MDB.canvas.offsetHeight;
    MDB.canvas.width = MDB.WIDTH;
    MDB.canvas.height = MDB.HEIGHT;
    MDB.ctx = MDB.canvas.getContext("2d");
    MDB.viewport = MDB.Viewport({
      x: {min: -2, max: 0.5},
      y: {min: -1.25, max: 1.25}
    });

    MDB.viewport.bindToCanvas(MDB.canvas, MDB.render);
  },

  MDB.mandelbrot = function (pixel, iteration) {
    if (iteration >= iterations) { return 0; }
    /** the base equation for the mandelbrot set is  **/
    /** f(z) = z^2 + c **/

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

    var singleLineImageDate = new ImageData(MDB.WIDTH, 1);
    var lastUpdate = (new Date()).getTime();

    var scanLine = function (y_index) {
      y_index = y_index || 0;
      var dataIndex = 0;
      for (var x_index = 0; x_index < MDB.WIDTH; x_index++) {

        var crossoverIteration = 0;
        for (var sample = 0; sample < SUPER_SAMPLES; sample++) {
          var x = MDB.viewport.x.min + (x_index + Math.random()) * dx;
          var y = MDB.viewport.y.min + (y_index + Math.random()) * dy;

          crossoverIteration += MDB.mandelbrot({
            c: {real: x, imaginary: y},
            z: {real: 0, imaginary: 0}
          }, 0);
        }

        var color = 1 / SUPER_SAMPLES * crossoverIteration;

        singleLineImageDate.data[dataIndex + 0] = 255;
        singleLineImageDate.data[dataIndex + 1] = 255;
        singleLineImageDate.data[dataIndex + 2] = 255;
        singleLineImageDate.data[dataIndex + 3] = color;
        dataIndex += 4;
      }
      MDB.ctx.putImageData(singleLineImageDate, 0, y_index);  

      /* thanks to cslarsen */
      /* https://github.com/cslarsen/mandelbrot-js */
      /* allow the screen to refresh after a given period */
      if (y_index < MDB.HEIGHT) {
        var now = (new Date()).getTime();
        if ((now - lastUpdate) >= 1000.0 / 10.0) {
          lastUpdate = now;
          setTimeout(function () {
            scanLine(++y_index);
          }, 0);
        } else {
          scanLine(++y_index);
        }
      } else {
        MDB.activelyRendering = false;
        console.timeEnd('render timer');
      }
    };
    scanLine();

  };

})(this);
