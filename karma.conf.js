
var path = require('path');
var webpackConfig = require('./webpack.config');
var merge = require('lodash/object/merge');

module.exports = function(config) {
  config.set({
    reporters: ['nyan'],

    browsers: ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
      'test/*.js',
      'test/**/*.js'
    ],

    preprocessors: {
      'test/*Spec.js': ['webpack'],
      'test/**/*Spec.js': ['webpack']
    },

    webpack: {
      resolve: merge(webpackConfig.resolve, {
        alias: {
          assets: path.resolve(__dirname, 'assets'),
          css: path.resolve(__dirname, 'css'),
          dependencies: path.resolve(__dirname, 'dependencies'),
          javascript: path.resolve(__dirname, 'javascript'),
        }
      }),
      module: webpackConfig.module
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-nyan-reporter'
    ]
    
  });
};
