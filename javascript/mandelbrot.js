'use strict';

(function () {
  var PIXELS = 512, ITERATIONS = 64, SUPER_SAMPLES = 4;

  var MDB = {
    canvas: document.getElementById("mandelbrot"),

    init: function () {
      MDB.canvas.width = PIXELS;
      MDB.canvas.height = PIXELS;
      MDB.ctx = this.canvas.getContext("2d");
      MDB.imageData = new ImageData(PIXELS, 1);
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
      var iteration, pixel, viewport;
      console.time('render timer');

      viewport = MDB.viewport;

      /* iterate over all of the PIXELS */
      for (var y_index = 0; y_index < PIXELS; y_index++) {
        for (var x_index = 0; x_index < PIXELS; x_index++) {

          var crossoverIteration = 0
          for (var sample = 0; sample < SUPER_SAMPLES; sample ++) {
            var x = viewport.x.min + (x_index + Math.random()) * viewport.delta.x;
            var y = viewport.y.min + (y_index + Math.random()) * viewport.delta.y;

            pixel = {
              c: {real: x, imaginary: y},
              z: {real: 0, imaginary: 0},
              crossoverIteration: null
            };
            for (iteration = 0; iteration < ITERATIONS && !pixel.crossoverIteration; iteration++) {
              pixel = MDB.mandelbrot(pixel, iteration);
            }

            crossoverIteration += pixel.crossoverIteration
          }

          var index = x_index * 4;
          var color = 4 / SUPER_SAMPLES * crossoverIteration;
          MDB.imageData.data[index + 1] = 255;
          MDB.imageData.data[index + 3] = color;
        }

        MDB.ctx.putImageData(MDB.imageData, 0, y_index);
      }

      console.timeEnd('render timer');
    },

    bindEvents: function () {
      this.canvas.addEventListener("click", function (event) {
        var viewport = MDB.viewport
        var clickLocation = {x: event.offsetX, y: event.offsetY};


        var zoom_location = {
          x: viewport.topLeft.x + clickLocation.x / PIXELS * viewport.range.x,
          y: viewport.topLeft.y + clickLocation.y / PIXELS * viewport.range.y
        };

        viewport = MDB.setViewport({
          x: {min: zoom_location.x - viewport.range.x / 20, max: zoom_location.x + viewport.range.x / 20},
          y: {min: zoom_location.y - viewport.range.y / 20, max: zoom_location.y + viewport.range.y / 20}
        })

        MDB.full_mandelbrot();
      }); 
    }
  };

  MDB.init()
  MDB.full_mandelbrot();

})();
