import Renderer from './renderer'; 
import Viewport from './viewport';

import assign from 'lodash/object/assign';

let APPLICATION_PROTOTYPE = {
  status: { activelyRendering: false },
  init({canvas, config, equation}) {
    assign(this, {canvas, config, equation});

    this.viewport = Viewport({
      applicationStatus: this.status,
      canvas: this.canvas,
      config: this.config
    });

    this.renderer = Renderer({
      applicationStatus: this.status,
      canvas: this.canvas,
      config: this.config,
      equation: this.equation,
      viewport: this.viewport
    });

    this.render();
  },
  render() {
    this.renderer.render({});
  }
};

export default function ({canvas, config, equation}) {
  var application = Object.create(APPLICATION_PROTOTYPE);

  application.init({canvas, config, equation});

  return application;
}
