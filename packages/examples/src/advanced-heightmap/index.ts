import {
  inverse,
  lookAt,
  mat4,
  multiply,
  perspective,
  radians,
  rotate,
  transpose,
  vec3,
  vec4,
} from '@miniengine/glm';
import {
  createProgramInfo,
  createTexture,
  createVertexArrayInfo,
  drawBufferInfo,
  primitives,
  resizeCanvasToDisplaySize,
  setBuffersAndAttributes,
  setDefaults,
  setUniforms,
} from 'twgl.js';
import fs from './fs.glsl?raw';
import vs from './vs.glsl?raw';

export default async function (gl: WebGL2RenderingContext) {
  setDefaults({ attribPrefix: 'a_' });

  const programInfo = createProgramInfo(gl, [vs, fs]);

  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    primitives.createPlaneBufferInfo(gl, 4, 4, 255, 255),
  );

  const u_diffuse = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'hypsometric-tint.png',
  });

  const u_heightmap = createTexture(gl, {
    min: gl.LINEAR_MIPMAP_LINEAR,
    mag: gl.LINEAR,
    src: 'heightmap.png',
  });

  const uniforms = {
    u_lightWorldPos: vec3(1, 8, -10),
    u_lightColor: vec4(1, 1, 1, 1),
    u_ambient: vec4(0.1, 0.1, 0.1, 1),
    u_specular: vec4(0.2, 0.2, 0.2, 1),
    u_shininess: 32,
    u_specularFactor: 0,
    u_diffuse,
    u_viewInverse: mat4(1).flat(),
    u_world: mat4(1).flat(),
    u_worldInverseTranspose: mat4(1).flat(),
    u_worldViewProjection: mat4(1).flat(),
    u_heightmap,
    u_minElevation: 0,
    u_maxElevation: 1.5,
  };

  return (_deltaTime: number) => {
    resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fov = radians(30);
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 0.5;
    const zFar = 10;
    const projection = perspective(fov, aspect, zNear, zFar);
    const eye = vec3(1, 4, -6);
    const target = vec3(0, 0, 0);
    const up = vec3(0, 1, 0);

    const view = lookAt(eye, target, up);
    const viewProjection = multiply(projection, view);
    const world = rotate(mat4(1), document.timeline.currentTime as number * 0.0001, vec3(0, 1, 0));

    Object.assign(uniforms, {
      u_viewInverse: inverse(view).flat(),
      u_world: world.flat(),
      u_worldInverseTranspose: transpose(inverse(world)).flat(),
      u_worldViewProjection: multiply(viewProjection, world).flat(),
    });

    gl.useProgram(programInfo.program);
    setBuffersAndAttributes(gl, programInfo, vertexArrayInfo);
    setUniforms(programInfo, uniforms);
    drawBufferInfo(gl, vertexArrayInfo);
  };
}