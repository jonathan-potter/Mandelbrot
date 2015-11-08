'use strict';

import HashSubscriber from 'hash-subscriber';

import Fractal, { Mandelbrot }    from 'javascript/equations/fractal';
import Renderer          from './renderer'; 
import Viewport          from './viewport';

import Config            from 'javascript/config';
import parseLocationHash from 'javascript/tools/parseLocationHash';

import 'dependencies/skeleton/css/normalize.css';
import 'dependencies/skeleton/css/skeleton.css';
import 'css/mandelbrot.css';
import 'css/header.css';

let Application = {
  status: { activelyRendering: false },
  canvas: document.getElementById("mandelbrot"),
  init() {
    let CONFIG = Config.getConfig(parseLocationHash());

    this.viewport = Viewport({
      applicationStatus: this.status,
      bounds: {
        x: {min: CONFIG.x_min, max: CONFIG.x_max},
        y: {min: CONFIG.y_min, max: CONFIG.y_max} 
      },
      canvas: this.canvas
    });

    this.renderer = Renderer({
      applicationStatus: this.status,
      canvas: this.canvas,
      equation: Mandelbrot,
      viewport: this.viewport
    });

    this.renderer.render({});
  },
  render() {
    this.renderer.render({});
  }
};

Application.init();

HashSubscriber.subscribe(['iterations'], params => {
  Fractal.MAX_ITERATIONS = Config.getConfig(params).iterations;
});

HashSubscriber.subscribe(['iterations', 'super_samples', 'x_min', 'x_max', 'y_min', 'y_max'], params => {
  Application.renderer.render({});
});
