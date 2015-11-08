import Renderer from './renderer'; 
import Viewport from './viewport';

import assign from 'lodash/object/assign';

let APPLICATION_PROTOTYPE = {
  status: { activelyRendering: false },
  init({canvas, getConfig, equation}) {
    assign(this, {canvas, getConfig, equation});

    this.viewport = Viewport({
      applicationStatus: this.status,
      canvas: this.canvas,
      getConfig: this.getConfig
    });

    this.renderer = Renderer({
      applicationStatus: this.status,
      canvas: this.canvas,
      getConfig: this.getConfig,
      equation: this.equation,
      viewport: this.viewport
    });

    this.render();
  },
  render() {
    this.renderer.render({});
  }
};

export default function ({canvas, getConfig, equation}) {
  var application = Object.create(APPLICATION_PROTOTYPE);

  application.init({canvas, getConfig, equation});

  return application;
}
