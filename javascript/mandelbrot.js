'use strict';

(function () {
  var iterations = 128, pixels, SUPER_SAMPLES = 4;

  var MDB = {
    canvas: document.getElementById("mandelbrot"),

    init: function () {
      pixels = MDB.canvas.offsetWidth
      MDB.canvas.width = pixels;
      MDB.canvas.height = pixels;
      MDB.ctx = MDB.canvas.getContext("2d");
      MDB.imageData = new ImageData(pixels, pixels);
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
        x: viewport.range.x / pixels,
        y: viewport.range.y / pixels
      };
      viewport.topLeft = {
        x: viewport.center.x - viewport.range.x / 2,
        y: viewport.center.y - viewport.range.x / 2
      };

      MDB.viewport = viewport;
    },

    mandelbrot: function (pixel, iteration) {
      if (iteration >= iterations) { return 0 }
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

      return MDB.mandelbrot(pixel, ++iteration || 0);
    },

    full_mandelbrot: function () {
      var color, crossoverIteration, dataIndex, sample, x, y;
      console.time('render timer');

      var dx = MDB.viewport.delta.x;
      var dy = MDB.viewport.delta.y;
      
      dataIndex = 0
      for (var y_index = 0; y_index < pixels; y_index++) {
        for (var x_index = 0; x_index < pixels; x_index++) {

          crossoverIteration = 0;
          for (sample = 0; sample < SUPER_SAMPLES; sample++) {
            x = MDB.viewport.x.min + (x_index + Math.random()) * dx;
            y = MDB.viewport.y.min + (y_index + Math.random()) * dy;

            crossoverIteration += MDB.mandelbrot({
              c: {real: x, imaginary: y},
              z: {real: 0, imaginary: 0}
            });
          }

          color = 4 / SUPER_SAMPLES * crossoverIteration;

          MDB.imageData.data[dataIndex + 1] = 255;
          MDB.imageData.data[dataIndex + 3] = color;
          dataIndex += 4;
        }
      }

      MDB.ctx.putImageData(MDB.imageData, 0, 0);
      console.timeEnd('render timer');
    },

    bindEvents: function () {
      MDB.canvas.addEventListener("click", function (event) {
        var range = MDB.viewport.range;
        var topLeft = MDB.viewport.topLeft;

        var zoom_location = {
          x: topLeft.x + range.x * event.offsetX / event.currentTarget.offsetWidth,
          y: topLeft.y + range.y * event.offsetY / event.currentTarget.offsetHeight
        };

        MDB.setViewport({
          x: {
            min: zoom_location.x - range.x / 20,
            max: zoom_location.x + range.x / 20
          },
          y: {
            min: zoom_location.y - range.y / 20,
            max: zoom_location.y + range.y / 20
          }
        })

        iterations *= 2

        MDB.full_mandelbrot();
      }); 
    }
  };

  MDB.init()
  MDB.full_mandelbrot();

})();
