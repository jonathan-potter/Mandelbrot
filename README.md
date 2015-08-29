Mandelbrot
========

SUMMARY:
--------
[Mandelbrot](http://jonathan-potter.github.io/Mandelbrot/) is a fractal rendering project built to generate images of the [Mandelbrot Set](https://en.wikipedia.org/wiki/Mandelbrot_set). It allows the user to zoom by clicking.

Instructions:
--------
```
npm install
webpack-dev-server
```
open `http://localhost:8080/` in your browser.

### Recommended Packages to Globally Install

 * babel-eslint
 * webpack-dev-server

## Advanced Features

settings that can be activated by modifying the query string directly

 * `(setting_name): (default_value) (description)`
 * iterations: (256) iteration depth for the Mandelbrot calculation
 * super_samples: (1) number of super samples rendered 

## Technologies Used
##### Development and Build
 * [Babel](https://babeljs.io/)
 * [ESLint](http://eslint.org/)
 * [Node.js](https://nodejs.org/)
 * [Webpack](http://webpack.github.io/)

##### CSS
 * [Skeleton](http://getskeleton.com/)

##### Javascript
 * [Lodash](https://lodash.com/)
