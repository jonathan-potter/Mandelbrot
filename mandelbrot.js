'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var canvas, pixels, iterations, ctx, imageData, viewport;

  MDB.init = function () {
    canvas = document.getElementById("mandelbrot");
    pixels = 512;
    iterations = 128;
    canvas.width = pixels;
    canvas.height = pixels;
    ctx = canvas.getContext("2d");
    imageData = new ImageData(pixels, pixels);
    viewport = MDB.setViewport({
      x: {min: -2, max: 2},
      y: {min: -2, max: 2}
    })
    MDB.bindEvents();
  }

  MDB.setViewport = function (options) {
    viewport = {
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

    return viewport
  }

  MDB.mandelbrot = function (pixel, iteration, override) {
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
  };

  MDB.full_mandelbrot = function (pixels, iterations) {
    var iteration, pixel;

    /* iterate over all of the pixels */
    for (var x_index = 0; x_index < pixels; x_index++) {
      for (var y_index = 0; y_index < pixels; y_index++) {
        var x = viewport.x.min + x_index * viewport.delta.x;
        var y = viewport.y.min + y_index * viewport.delta.y;

        pixel = {
          c: {real: x, imaginary: y},
          z: {real: 0, imaginary: 0},
          crossoverIteration: null
        };
        for (iteration = 0; iteration < iterations; iteration++) {
          pixel = MDB.mandelbrot(pixel, iteration);
        }

        var index = (y_index * pixels + x_index) * 4;
        var color = 2 * MDB.smoothColorMap(iterations, pixel.crossoverIteration, pixel.z.real, pixel.z.imaginary);
        imageData.data[index + 1] = 255;
        imageData.data[index + 3] = color;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    console.log("done!");
  }

  MDB.bindEvents = function () {
    canvas.addEventListener("click", function (event) {
      var clickLocation = {x: event.offsetX, y: event.offsetY};

      var zoom_location = {
        x: viewport.topLeft.x + clickLocation.x / pixels * viewport.range.x,
        y: viewport.topLeft.y + clickLocation.y / pixels * viewport.range.y
      };

      viewport = MDB.setViewport({
        x: {min: zoom_location.x - viewport.range.x / 10, max: zoom_location.x + viewport.range.x / 10},
        y: {min: zoom_location.y - viewport.range.y / 10, max: zoom_location.y + viewport.range.y / 10}
      })

      console.time('wat')
      MDB.full_mandelbrot(pixels, iterations);
      console.timeEnd('wat')
    }); 
  }

    // Some constants used with smoothColor
  var LOG_BASE = 1.0 / Math.log(2.0);
  var LOG_HALF_BASE = Math.log(0.5) * LOG_BASE;
  MDB.smoothColorMap = function(steps, n, Zr, Zi) {
    /* credit to: Christian Stigen Larsen */
    /* https://github.com/cslarsen */
    /* https://github.com/cslarsen/mandelbrot-js/blob/master/mandelbrot.js */
    return 5 + n - LOG_HALF_BASE - Math.log(Math.log(Zr * Zr + Zi * Zi))*LOG_BASE;
  }

  console.time('render timer')
  MDB.init()
  MDB.full_mandelbrot(pixels, iterations);
  console.timeEnd('render timer')

})(this);
