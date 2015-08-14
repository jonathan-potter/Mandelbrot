'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var VIEWPORT_PROTOTYPE = {
    x: {min: 0, max: 0},
    y: {min: 0, max: 0},
    center: function () {
      return {
        x: (this.x.max + this.x.min) / 2,
        y: (this.y.max + this.y.min) / 2
      };
    },
    range: function () {
      return {
        x: this.x.max - this.x.min,
        y: this.y.max - this.y.min
      };
    },
    delta: function () {
      return {
        x: this.range().x / MDB.PIXELS,
        y: this.range().y / MDB.PIXELS
      };
    },
    topLeft: function () {
      return {
        x: this.center().x - this.range().x / 2,
        y: this.center().y - this.range().x / 2
      };
    },
    clickLocation: function (event) {
      var range = this.range();
      var topLeft = this.topLeft();

      return {
        x: topLeft.x + range.x * event.offsetX / event.currentTarget.offsetWidth,
        y: topLeft.y + range.y * event.offsetY / event.currentTarget.offsetHeight
      };
    },
    zoomToLocation: function (location) {
      var range = this.range();

      this.x = {
        min: location.x - range.x / 20,
        max: location.x + range.x / 20
      };
      this.y = {
        min: location.y - range.y / 20,
        max: location.y + range.y / 20
      };
    },
    bindToCanvas: function (canvas, renderCallback) {
      var self = this;

      canvas.addEventListener('click', function (event) {
        var clickLocation = self.clickLocation(event);
        
        self.zoomToLocation(clickLocation);

        renderCallback();
      })
    }
  };

  MDB.Viewport = function (bounds) {
    var viewport = Object.create(VIEWPORT_PROTOTYPE);

    viewport.x = bounds.x;
    viewport.y = bounds.y;

    return viewport
  };

})(this);
