import Renderer from './renderer'; 
import Viewport from './viewport';

import assign from 'lodash/object/assign';

let APPLICATION_PROTOTYPE = {
  status: { activelyRendering: false },
  init({canvas, getConfig, equation, setConfig}) {
    assign(this, {canvas, getConfig, equation, setConfig});

    this.viewport = Viewport.create({
      applicationStatus: this.status,
      canvas: this.canvas,
      getConfig: this.getConfig,
      setConfig: this.setConfig
    });

    this.renderer = Renderer.create({
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

export default {
  create({canvas, getConfig, equation, setConfig}) {
    var application = Object.create(APPLICATION_PROTOTYPE);

    application.init({canvas, getConfig, equation, setConfig});

    return application;
  }
};
