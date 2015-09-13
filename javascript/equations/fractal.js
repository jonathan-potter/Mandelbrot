'use strict';

import Config from 'javascript/config';
import HashSubscriber from 'hash-subscriber';

var max_iterations = Config.getConfig().iterations;
HashSubscriber.subscribe(['iterations'], params => {
  max_iterations = Config.getConfig(params).iterations;
});

export default function Fractal(pixel, iteration) {
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
    return iteration || 0;
  }

  return Fractal(pixel, ++iteration || 1);
}

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
  return 255 / max_iterations * iterations;
}

export { Mandelbrot, Julia };
