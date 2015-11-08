import { getConfig, setConfig } from 'javascript/config';
import Fractal, { Mandelbrot }  from 'javascript/equations/fractal';
import Renderer                 from 'javascript/Renderer';

import HashSubscriber from 'hash-subscriber';

import 'dependencies/skeleton/css/normalize.css';
import 'dependencies/skeleton/css/skeleton.css';
import 'css/mandelbrot.css';
import 'css/header.css';

let canvas = document.getElementById('mandelbrot');

let renderer = Renderer({
  canvas: canvas,
  equation: Mandelbrot,
  getConfig: getConfig,
  setConfig: setConfig
});

HashSubscriber.subscribe(['iterations'], () => {
  Fractal.MAX_ITERATIONS = getConfig().iterations;
});

HashSubscriber.subscribe(['iterations', 'super_samples', 'x_min', 'x_max', 'y_min', 'y_max'], () => {
  renderer.render();
});
