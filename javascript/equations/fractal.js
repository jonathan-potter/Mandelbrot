'use strict';

import Config from 'javascript/config';

export default function Fractal(pixel, iteration) {
  if (iteration >= Fractal.MAX_ITERATIONS) { return 0; }
  /* the base equation for the mandelbrot set is  */
  /* f(z) = z^2 + c */

  var c = pixel.c;
  var z = pixel.z;
  var real = z.real * z.real - z.imaginary * z.imaginary + c.real;
  var imaginary = 2 * z.real * z.imaginary + c.imaginary;

  pixel.z.real = real;
  pixel.z.imaginary = imaginary;

  if (real * real + imaginary * imaginary > 4) {
    return iteration || 0;
  }

  return Fractal(pixel, ++iteration || 1);
}

Fractal.MAX_ITERATIONS = Config.getConfig().iterations;

function Mandelbrot(x, y) {
  return colorize(Fractal({
    c: {real: x, imaginary: y},
    z: {real: 0, imaginary: 0}
  }));
}

function Julia(x, y) {
  return colorize(Fractal({
    c: {real: -0.835, imaginary: 0.2321},
    z: {real: x, imaginary: y}
  }));
}

function colorize(iterations) {
  return 256 / Fractal.MAX_ITERATIONS * iterations;
}

export { Mandelbrot, Julia };
