'use strict';

import assign from 'lodash/object/assign';
import parseLocationHash from 'javascript/tools/parseLocationHash';
import setLocationHash from 'javascript/tools/setLocationHash';
    
const HIGHLIGHT_COLOR = 'white';
const ZOOM_SIZE = 0.1;

const VIEWPORT_PROTOTYPE = {
  xBounds: {min: 0, max: 0},
  yBounds: {min: 0, max: 0},
  setBounds: function (bounds) {
    this.xBounds = bounds.x;
    this.yBounds = bounds.y;
  },
  locationHash: function () {
    var query = parseLocationHash();

    return assign({}, query, {
      x_min: this.xBounds.min,
      x_max: this.xBounds.max,
      y_min: this.yBounds.min,
      y_max: this.yBounds.max
    });
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
      x: this.range().x / this.width,
      y: this.range().y / this.height
    };
  },
  topLeft: function () {
    return {
      x: this.xBounds.min,
      y: this.yBounds.min
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
      x: event.offsetX / currentCanvasSize.x * this.width,
      y: event.offsetY / currentCanvasSize.y * this.height
    };
  },
  cartesianClickLocation: function (canvasClickLocation) {
    var range = this.range();
    var topLeft = this.topLeft();

    return {
      x: topLeft.x + range.x * canvasClickLocation.x / this.width,
      y: topLeft.y + range.y * canvasClickLocation.y / this.height
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

    var locationHash = this.locationHash();

    setLocationHash(locationHash);
  },
  bindToCanvas: function (canvas) {
    var self = this;

    self.canvas = canvas;
    self.canvas.width = this.canvas.offsetWidth;
    self.canvas.height = this.canvas.offsetHeight;
    self.width = self.canvas.width;
    self.height = self.canvas.height;
    self.width = canvas.width;
    self.height = canvas.height;
    self.canvas.addEventListener('click', function (event) {
      if (!self.applicationStatus.activelyRendering) {
        var canvasClickLocation    = self.canvasClickLocation(event);
        var cartesianClickLocation = self.cartesianClickLocation(canvasClickLocation);

        self.highlightZoomBox(canvasClickLocation);
        self.zoomToLocation(cartesianClickLocation);
      }
    });
    self.growToAspectRatio();
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
    var canvasAspectRatio = this.canvas.width / this.canvas.height;

    var range = this.range();
    var center = this.center();
    var currentAspectRatio = range.x / range.y;

    var newDistanceFromCenter;
    var xBounds = this.xBounds;
    var yBounds = this.yBounds;
    if (currentAspectRatio > canvasAspectRatio) {
      /* height needs expansion */
      var verticalEdgeToCenterDistance = yBounds.min - center.y;

      newDistanceFromCenter = verticalEdgeToCenterDistance * (currentAspectRatio / canvasAspectRatio);
      yBounds = {
        min: center.y + newDistanceFromCenter,
        max: center.y - newDistanceFromCenter
      };
    } else {
      /* width needs expansion */
      var horizontalEdgeToCenterDistance = xBounds.min - center.x;

      newDistanceFromCenter = horizontalEdgeToCenterDistance * (canvasAspectRatio / currentAspectRatio);
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

export default function ({applicationStatus, bounds, canvas}) {
  var viewport = Object.create(VIEWPORT_PROTOTYPE);

  viewport.applicationStatus = applicationStatus;
  viewport.setBounds(bounds);
  viewport.bindToCanvas(canvas);

  return viewport;
}
