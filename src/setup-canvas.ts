import * as twgl from 'twgl.js';
import vs from './vs.glsl?raw';
import fs from './fs.glsl?raw';

export function setupCanvas(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl');
  if (gl === null) {
    throw new Error('Cannot establish webgl context!');
  }
  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  const arrays = {
    position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
  };
  const bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

  function renderBuilder(gl: WebGLRenderingContext) {
    return function render(time: number) {
      twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

      const uniforms = {
        time: time * 0.001,
        resolution: [gl.canvas.width, gl.canvas.height],
      };

      gl.useProgram(programInfo.program);
      twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
      twgl.setUniforms(programInfo, uniforms);
      twgl.drawBufferInfo(gl, bufferInfo);

      requestAnimationFrame(render);
    };
  }
  requestAnimationFrame(renderBuilder(gl));
}
