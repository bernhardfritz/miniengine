import {
  Arrays,
  createBufferInfoFromArrays,
  createProgramInfo,
  createVertexArrayInfo,
  drawBufferInfo,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setDefaults,
} from 'twgl.js';
import fs from './fs.glsl?raw';
import vs from './vs.glsl?raw';

export default async function (gl: WebGL2RenderingContext) {
  setDefaults({ attribPrefix: 'a_' });

  const programInfo = createProgramInfo(gl, [vs, fs]);

  const arrays: Arrays = {
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
  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    createBufferInfoFromArrays(gl, arrays)
  );

  return (_time: number) => {
    resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(programInfo.program);
    setBuffersAndAttributes(gl, programInfo, vertexArrayInfo);
    drawBufferInfo(gl, vertexArrayInfo);
  };
}
