'use strict';

(function () {
  var PIXELS = 512, iterations = 128, SUPER_SAMPLES = 4;

  var MDB = {
    canvas: document.getElementById("mandelbrot"),

    init: function () {
      MDB.canvas.width = PIXELS;
      MDB.canvas.height = PIXELS;
      MDB.ctx = MDB.canvas.getContext("2d");
      MDB.imageData = new ImageData(PIXELS, PIXELS);
      MDB.setViewport({
        x: {min: -2, max: 2},
        y: {min: -2, max: 2}
      })
      MDB.bindEvents();
    },

    setViewport: function (options) {
      var viewport = {
        x: {min: options.x.min, max: options.x.max},
        y: {min: options.y.min, max: options.y.max}
      };
      viewport.center = {
        x: (viewport.x.max + viewport.x.min) / 2,
        y: (viewport.y.max + viewport.y.min) / 2
      };
      viewport.range = {
        x: viewport.x.max - viewport.x.min,
        y: viewport.y.max - viewport.y.min
      };
      viewport.delta = {
        x: viewport.range.x / PIXELS,
        y: viewport.range.y / PIXELS
      };
      viewport.topLeft = {
        x: viewport.center.x - viewport.range.x / 2,
        y: viewport.center.y - viewport.range.x / 2
      };

      MDB.viewport = viewport;
    },

    mandelbrot: function (pixel, iteration) {
      /** the base equation for the mandelbrot set is  **/
      /** f(z) = z^2 + c **/

      var c = pixel.c;
      var z = pixel.z;
      var real = z.real * z.real - z.imaginary * z.imaginary + c.real;
      var imaginary = 2 * z.real * z.imaginary + c.imaginary;

      var newPixel = {c: c, z: {real: real, imaginary: imaginary}, crossoverIteration: pixel.crossoverIteration || null }
      if (real * real + imaginary * imaginary > 4) {
        newPixel.crossoverIteration = iteration;
      }

      return newPixel;
    },

    full_mandelbrot: function () {
      var color, crossoverIteration, dataIndex, iteration, pixel, viewport, x, y;
      console.time('render timer');

      viewport = MDB.viewport;

      for (var x_index = 0; x_index < PIXELS; x_index++) {
        for (var y_index = 0; y_index < PIXELS; y_index++) {

          crossoverIteration = 0
          for (var sample = 0; sample < SUPER_SAMPLES; sample ++) {
            x = viewport.x.min + (x_index + Math.random()) * viewport.delta.x;
            y = viewport.y.min + (y_index + Math.random()) * viewport.delta.y;

            pixel = {
              c: {real: x, imaginary: y},
              z: {real: 0, imaginary: 0},
              crossoverIteration: null
            };
            for (iteration = 0; iteration < iterations && !pixel.crossoverIteration; iteration++) {
              pixel = MDB.mandelbrot(pixel, iteration);
            }

            crossoverIteration += pixel.crossoverIteration
          }

          color = 4 / SUPER_SAMPLES * crossoverIteration;

          dataIndex = (y_index * PIXELS + x_index) * 4;
          MDB.imageData.data[dataIndex + 1] = 255;
          MDB.imageData.data[dataIndex + 3] = color;
        }
      }

      MDB.ctx.putImageData(MDB.imageData, 0, 0);
      console.timeEnd('render timer');
    },

    bindEvents: function () {
      MDB.canvas.addEventListener("click", function (event) {
        var clickLocation = {x: event.offsetX, y: event.offsetY};

        var viewport = MDB.viewport;
        var range = viewport.range;
        var topLeft = viewport.topLeft;

        var zoom_location = {
          x: topLeft.x + clickLocation.x / PIXELS * range.x,
          y: topLeft.y + clickLocation.y / PIXELS * range.y
        };

        viewport = MDB.setViewport({
          x: {min: zoom_location.x - range.x / 20, max: zoom_location.x + range.x / 20},
          y: {min: zoom_location.y - range.y / 20, max: zoom_location.y + range.y / 20}
        })

        iterations *= 2

        MDB.full_mandelbrot();
      }); 
    }
  };

  MDB.init()
  MDB.full_mandelbrot();

})();
