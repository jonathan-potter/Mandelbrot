'use strict';

import Mandelbrot from 'javascript/Mandelbrot';

describe('Mandelbrot', () => {
  it('returns 0 for locations within the mandelbrot set', () => {
    let x = 0, y = 0;

    let crossoverIteration = Mandelbrot({
      c: {real: x, imaginary: y},
      z: {real: 0, imaginary: 0}
    });

    expect(crossoverIteration).toEqual(0);
  });

  it('returns 0 for locations outside radius 2', () => {
    let x = 2.001, y = 0;

    let crossoverIteration = Mandelbrot({
      c: {real: x, imaginary: y},
      z: {real: 0, imaginary: 0}
    });

    expect(crossoverIteration).toEqual(0);
  });
});
