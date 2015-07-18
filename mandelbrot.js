'use strict'

;(function () {
  var colormap, initializeMatrix, iterationRange, iterations, full_mandelbrot, mandelbrot, mapNumberRange, pixels,
    x_range, y_range, smoothColor, mapNumberToRange;

  var canvas = document.getElementById("mandelbrot");
  x_range = [-2, 2];
  y_range = [-2, 2];
  pixels = 512;
  iterations = 128;
  canvas.width = pixels;
  canvas.height = pixels;
  var ctx = canvas.getContext("2d");
  var imageData = new ImageData(pixels, pixels);
  var data = imageData.data;

  mandelbrot = function (pixel, iteration, override) {
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
        newPixel = mandelbrot(newPixel, null, true)
      }
    }

    return newPixel;
  };

  mapNumberToRange = function (mappedRange, range, value) {
    var rangeScale;

    rangeScale = (range.max - range.min) / (mappedRange.max - mappedRange.min);

    return (value - range.min) / rangeScale + mappedRange.min;
  };

  colormap = function (pixel, range) {
    return ~~mapNumberToRange({min: 0, max: 255}, range, pixel.crossoverIteration);
  };

  iterationRange = function (matrix) {
    var iterations, range, x, y;

    range = {
      max: Number.MIN_SAFE_INTEGER,
      min: Number.MAX_SAFE_INTEGER
    }
    for (x = 0; x < matrix.length; x++) {
      for (y = 0; y < matrix[0].length; y++) {
        iterations = matrix[x][y].crossoverIteration;

        range.max = Math.max(iterations, range.max);
        range.min = Math.min(iterations, range.min);
      }
    }

    return range;
  };

  initializeMatrix = function (pixels) {
    var data, delta_x, delta_y, imageData, iteration, matrix, range, range_x, range_y, x, y;

    range_x = x_range[1] - x_range[0];
    range_y = y_range[1] - y_range[0];
    delta_x = range_x / pixels;
    delta_y = range_y / pixels;

    matrix = [];
    for (var x_index = 0; x_index < pixels; x_index++) {
      matrix.push([]);
      for (var y_index = 0; y_index < pixels; y_index++) {
        x = x_range[0] + x_index * delta_x;
        y = y_range[0] + y_index * delta_y;

        matrix[x_index][y_index] = {
                           c: {real: x, imaginary: y},
                           z: {real: 0, imaginary: 0},
          crossoverIteration: null
        };
      }
    }

    return matrix;
  };

  full_mandelbrot = function (pixels, iterations) {
    var delta_x, delta_y, iteration, matrix, pixel, range, range_x, range_y;

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
          pixel = mandelbrot(pixel, iteration);
        }

        var index = (y_index * pixels + x_index) * 4;
        var color = 2 * smoothColorMap(iterations, pixel.crossoverIteration, pixel.z.real, pixel.z.imaginary);
        data[index + 1] = 255;
        data[index + 3] = color;
      }
    }

    ctx.putImageData(imageData, 0, 0);
    console.log("done!");
  }
  console.time('render timer')
  full_mandelbrot(pixels, iterations);
  console.timeEnd('render timer')

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
    full_mandelbrot(pixels, iterations);
    console.timeEnd('wat')
  });

  function smoothColorMap(steps, n, Tr, Ti) {
    // Some constants used with smoothColor
    var logBase = 1.0 / Math.log(2.0);
    var logHalfBase = Math.log(0.5)*logBase;
    /*
     * Original smoothing equation is
     *
     * var v = 1 + n - Math.log(Math.log(Math.sqrt(Zr*Zr+Zi*Zi)))/Math.log(2.0);
     *
     * but can be simplified using some elementary logarithm rules to
     */
    return 5 + n - logHalfBase - Math.log(Math.log(Tr * Tr + Ti * Ti))*logBase;
  }

})(this);
