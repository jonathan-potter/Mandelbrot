'use strict';

(function () {
  var PIXELS = 512, ITERATIONS = 128;
  var LOG_BASE = 1.0 / Math.log(2.0);
  var LOG_HALF_BASE = Math.log(0.5) * LOG_BASE;

  var MDB = {
    canvas: document.getElementById("mandelbrot"),

    init: function () {
      this.canvas.width = PIXELS;
      this.canvas.height = PIXELS;
      this.ctx = this.canvas.getContext("2d");
      this.imageData = new ImageData(PIXELS, PIXELS);
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

    mandelbrot: function (pixel, iteration, override) {
      if (pixel.crossoverIteration && !override) { return pixel; }
      /** the base equation for the mandelbrot set is  **/
      /** f(z) = z^2 + c **/

      var c = pixel.c;
      var z = pixel.z;
      var real = z.real * z.real - z.imaginary * z.imaginary + c.real;
      var imaginary = 2 * z.real * z.imaginary + c.imaginary;

      var newPixel = {c: c, z: {real: real, imaginary: imaginary}, crossoverIteration: pixel.crossoverIteration || null }
      if (real * real + imaginary * imaginary > 4 && !override) {
        newPixel.crossoverIteration = iteration;
        
        for (var i = 0; i < 4; i++) {
          newPixel = MDB.mandelbrot(newPixel, null, true)
        }
      }

      return newPixel;
    },

    full_mandelbrot: function () {
      var iteration, pixel, viewport;

      viewport = MDB.viewport;

      /* iterate over all of the PIXELS */
      for (var x_index = 0; x_index < PIXELS; x_index++) {
        for (var y_index = 0; y_index < PIXELS; y_index++) {
          var x = viewport.x.min + x_index * viewport.delta.x;
          var y = viewport.y.min + y_index * viewport.delta.y;

          pixel = {
            c: {real: x, imaginary: y},
            z: {real: 0, imaginary: 0},
            crossoverIteration: null
          };
          for (iteration = 0; iteration < ITERATIONS; iteration++) {
            pixel = MDB.mandelbrot(pixel, iteration);
          }

          var index = (y_index * PIXELS + x_index) * 4;
          var color = 2 * MDB.smoothColorMap(ITERATIONS, pixel.crossoverIteration, pixel.z.real, pixel.z.imaginary);
          this.imageData.data[index + 1] = 255;
          this.imageData.data[index + 3] = color;
        }
      }

      this.ctx.putImageData(this.imageData, 0, 0);
      console.log("done!");
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

        console.time('wat')
        MDB.full_mandelbrot();
        console.timeEnd('wat')
      }); 
    },

    smoothColorMap: function(steps, n, Zr, Zi) {
      /* credit to: Christian Stigen Larsen */
      /* https://github.com/cslarsen */
      /* https://github.com/cslarsen/mandelbrot-js/blob/master/mandelbrot.js */
      return 5 + n - LOG_HALF_BASE - Math.log(Math.log(Zr * Zr + Zi * Zi))*LOG_BASE;
    }
  };

  console.time('render timer')
  MDB.init()
  MDB.full_mandelbrot(PIXELS, ITERATIONS);
  console.timeEnd('render timer')

})();
