'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var Renderer = MDB.Renderer;
  
  setTimeout(function () {
    Renderer.init();
    Renderer.render();
  }, 200);
})(this);
