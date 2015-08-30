'use strict';

import { Mandelbrot } from 'javascript/Mandelbrot';

describe('Mandelbrot', () => {
  it('returns 0 for locations within the mandelbrot set', () => {
    let x = 0, y = 0;

    expect(Mandelbrot(x, y)).toEqual(0);
  });

  it('returns 0 for locations outside radius 2', () => {
    let x = 2.001, y = 0;

    expect(Mandelbrot(x, y)).toEqual(0);
  });

  it('returns 1 for locations just inside radius 2', () => {
    let x = 1.999, y = 0;

    expect(Mandelbrot(x, y)).toEqual(1);
  });
});
