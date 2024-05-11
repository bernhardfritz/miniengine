import * as twgl from 'twgl.js';
import vs from './vs.glsl?raw';
import fs from './fs.glsl?raw';

export default function (gl: WebGL2RenderingContext) {
  twgl.setDefaults({ attribPrefix: 'a_' });

  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  const arrays: twgl.Arrays = {
    position: {
      numComponents: 3,
      data: [0, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0],
    },
    color: {
      numComponents: 3,
      data: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    },
    indices: {
      numComponents: 3,
      data: [0, 1, 2],
    },
  };
  const vertexArrayInfo = twgl.createVertexArrayInfo(
    gl,
    programInfo,
    twgl.createBufferInfoFromArrays(gl, arrays)
  );

  return (_time: number) => {
    twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(programInfo.program);
    twgl.setBuffersAndAttributes(gl, programInfo, vertexArrayInfo);
    twgl.drawBufferInfo(gl, vertexArrayInfo);
  };
}
