'use strict';

import Config from 'javascript/config';

var max_iterations = Config.getConfig().iterations;
var Mandelbrot = function (pixel, iteration) {
  if (iteration >= max_iterations) { return 0; }
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

  return Mandelbrot(pixel, ++iteration || 1);
};

export default Mandelbrot;

