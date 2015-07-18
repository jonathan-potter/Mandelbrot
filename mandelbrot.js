'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var iterations, pixels, x_range, y_range;

  var canvas = document.getElementById("mandelbrot");
  x_range = [-2, 2];
  y_range = [-2, 2];
  pixels = 512;
  iterations = 128;
  canvas.width = pixels;
  canvas.height = pixels;
  var ctx = canvas.getContext("2d");
  var imageData = new ImageData(pixels, pixels);

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
    var delta_x, delta_y, iteration, pixel, range_x, range_y;

    /* initial setup */
    range_x = x_range[1] - x_range[0];
    range_y = y_range[1] - y_range[0];
    delta_x = range_x / pixels;
    delta_y = range_y / pixels;

    /* iterate over all of the pixels */
    for (var x_index = 0; x_index < pixels; x_index++) {
      for (var y_index = 0; y_index < pixels; y_index++) {
        var x = x_range[0] + x_index * delta_x;
        var y = y_range[0] + y_index * delta_y;

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

  canvas.addEventListener("click", function (event) {
    var click = {x: event.offsetX, y: event.offsetY};

    var range_x = x_range[1] - x_range[0];
    var range_y = y_range[1] - y_range[0];

    var center = {}
    center.x = (x_range[0] + x_range[1]) / 2;
    center.y = (y_range[0] + y_range[1]) / 2;

    var top_left = { x: center.x - range_x / 2, y: center.y - range_y / 2 };

    var zoom_x = top_left.x + click.x / pixels * range_x;
    var zoom_y = top_left.y + click.y / pixels * range_y;
    var zoom = { x: zoom_x, y: zoom_y };

    x_range = [zoom.x - range_x / 20, zoom.x + range_x / 20];
    y_range = [zoom.y - range_y / 20, zoom.y + range_y / 20];

    console.time('wat')
    MDB.full_mandelbrot(pixels, iterations);
    console.timeEnd('wat')
  });

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
  MDB.full_mandelbrot(pixels, iterations);
  console.timeEnd('render timer')

})(this);
