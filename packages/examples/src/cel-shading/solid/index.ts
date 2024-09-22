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
import { loadGltf } from '@miniengine/gltf';
import {
  createBufferInfoFromArrays,
  createProgramInfo,
  createVertexArrayInfo,
  drawBufferInfo,
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

  const arrayOfArrays = await loadGltf(gl, 'teapot.gltf');
  const arrays = arrayOfArrays[0];
  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    createBufferInfoFromArrays(gl, arrays)
  );

  const uniforms = {
    u_lightWorldPos: vec3(10, 5, -5),
    u_lightColor: vec4(1, 1, 1, 1),
    u_ambient: vec4(0.1, 0.1, 0.1, 1),
    u_specular: vec4(0.2, 0.2, 0.2, 1),
    u_shininess: 32,
    u_specularFactor: 0,
    u_diffuse: vec4(0.588, 1, 0, 1),
    u_viewInverse: mat4(1).flat(),
    u_world: mat4(1).flat(),
    u_worldInverseTranspose: mat4(1).flat(),
    u_worldViewProjection: mat4(1).flat(),
  };

  return (deltaTime: number) => {
    deltaTime *= 0.0001;
    resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE); // teapot looks bad with face culling enabled
    // gl.cullFace(gl.BACK);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // don't clear silhouette

    const fov = radians(30);
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 5;
    const zFar = 100;
    const projection = perspective(fov, aspect, zNear, zFar);
    const eye = vec3(2, 5, -12);
    const target = vec3(0, 0, 0);
    const up = vec3(0, 1, 0);

    const view = lookAt(eye, target, up);
    const viewProjection = multiply(projection, view);
    const world = rotate(mat4(1), deltaTime, vec3(0, 1, 0));

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
