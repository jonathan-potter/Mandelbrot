'use strict';

(function (root) {
  var MDB = root.MDB = root.MDB || {};

  var HIGHLIGHT_COLOR = 'white';
  var ZOOM_SIZE = 0.1;

  var VIEWPORT_PROTOTYPE = {
    xBounds: {min: 0, max: 0},
    yBounds: {min: 0, max: 0},
    setBounds: function (bounds) {
      this.xBounds = bounds.x;
      this.yBounds = bounds.y;
    },
    navigateToCurrentBounds: function () {
      var query = MDB.parseQuery();

      var newQuery = _.assign({}, query, {
        x_min: this.xBounds.min,
        x_max: this.xBounds.max,
        y_min: this.yBounds.min,
        y_max: this.yBounds.max,
      });

      MDB.setQuery(newQuery);
    },
    center: function () {
      return {
        x: (this.xBounds.max + this.xBounds.min) / 2,
        y: (this.yBounds.max + this.yBounds.min) / 2
      };
    },
    range: function () {
      return {
        x: this.xBounds.max - this.xBounds.min,
        y: this.yBounds.max - this.yBounds.min
      };
    },
    delta: function () {
      return {
        x: this.range().x / MDB.WIDTH,
        y: this.range().y / MDB.HEIGHT
      };
    },
    topLeft: function () {
      return {
        x: this.center().x - this.range().x / 2,
        y: this.center().y - this.range().y / 2
      };
    },
    canvasSize: function () {
      return {
        x: this.canvas.offsetWidth,
        y: this.canvas.offsetHeight
      };
    },
    canvasClickLocation: function (event) {
      var currentCanvasSize = this.canvasSize();

      return {
        x: event.offsetX / currentCanvasSize.x * this.canvas.width,
        y: event.offsetY / currentCanvasSize.y * this.canvas.height
      };
    },
    cartesianClickLocation: function (canvasClickLocation) {
      var range = this.range();
      var topLeft = this.topLeft();

      return {
        x: topLeft.x + range.x * canvasClickLocation.x / this.canvas.width,
        y: topLeft.y + range.y * canvasClickLocation.y / this.canvas.height
      };
    },
    zoomToLocation: function (location) {
      var range = this.range();

      this.setBounds({
        x: {
          min: location.x - (range.x * ZOOM_SIZE * 0.5),
          max: location.x + (range.x * ZOOM_SIZE * 0.5)
        },
        y: {
          min: location.y - (range.y * ZOOM_SIZE * 0.5),
          max: location.y + (range.y * ZOOM_SIZE * 0.5)
        }
      });

      this.navigateToCurrentBounds();
    },
    bindToCanvas: function (canvas) {
      var self = this;

      self.canvas = canvas;
      self.canvas.addEventListener('click', function (event) {
        if (!MDB.activelyRendering) {
          var canvasClickLocation    = self.canvasClickLocation(event);
          var cartesianClickLocation = self.cartesianClickLocation(canvasClickLocation);

          self.highlightZoomBox(canvasClickLocation);
          self.zoomToLocation(cartesianClickLocation);
        }
      });
    },
    highlightZoomBox: function (location) {
      var context = this.canvas.getContext('2d');
      var canvasSize = this.canvasSize();

      context.beginPath();
      context.lineWidth = 1;
      context.strokeStyle = HIGHLIGHT_COLOR;

      context.rect(
        location.x - canvasSize.x * ZOOM_SIZE * 0.5,
        location.y - canvasSize.y * ZOOM_SIZE * 0.5,
        canvasSize.x * ZOOM_SIZE,
        canvasSize.y * ZOOM_SIZE
      );

      context.stroke();
    },
    growToAspectRatio: function () {
      var windowAspectRatio = MDB.WIDTH / MDB.HEIGHT;

      var range = this.range();
      var center = this.center();
      var currentAspectRatio = range.x / range.y;

      var newDistanceFromCenter;
      var xBounds = this.xBounds;
      var yBounds = this.yBounds;
      if (currentAspectRatio > windowAspectRatio) {
        /* height needs expansion */
        var verticalEdgeToCenterDistance = yBounds.min - center.y;

        newDistanceFromCenter = verticalEdgeToCenterDistance * (currentAspectRatio / windowAspectRatio);
        yBounds = {
          min: center.y + newDistanceFromCenter,
          max: center.y - newDistanceFromCenter
        };
      } else {
        /* width needs expansion */
        var horizontalEdgeToCenterDistance = xBounds.min - center.x;

        newDistanceFromCenter = horizontalEdgeToCenterDistance * (windowAspectRatio / currentAspectRatio);
        xBounds = {
          min: center.x + newDistanceFromCenter,
          max: center.x - newDistanceFromCenter
        };
      }

      this.setBounds({
        x: xBounds,
        y: yBounds
      });
    }
  };

  MDB.Viewport = function (bounds) {
    var viewport = Object.create(VIEWPORT_PROTOTYPE);

    viewport.setBounds(bounds);
    viewport.growToAspectRatio();

    return  viewport;
  };

})(this);
