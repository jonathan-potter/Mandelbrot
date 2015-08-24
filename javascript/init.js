'use strict';

define(function (require) {

  var Renderer = require('renderer');

  setTimeout(function () {
    Renderer.init();
    Renderer.render();
  }, 500);

});
