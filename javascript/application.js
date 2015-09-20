'use strict';

import { Mandelbrot }    from 'javascript/equations/fractal';

import 'dependencies/skeleton/css/normalize.css';
import 'dependencies/skeleton/css/skeleton.css';
import 'css/mandelbrot.css';
import 'css/header.css';

import Renderer from 'javascript/renderer';

Renderer.init({ equation: Mandelbrot });
Renderer.render({});
