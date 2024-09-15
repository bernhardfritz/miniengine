import {
  cross,
  inverse,
  lookAt,
  mat4,
  multiply,
  normalize,
  perspective,
  radians,
  rotate,
  subtract,
  transpose,
  vec3,
  vec4,
} from '@miniengine/glm';
import { loadGltf } from '@miniengine/gltf';
import {
  Arrays,
  FullArraySpec,
  createBufferInfoFromArrays,
  createProgramInfo,
  createTexture,
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

  const arrayOfArrays = await loadGltf(gl, 'Fox.gltf');
  const arrays = withNormals(arrayOfArrays[0]);
  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    createBufferInfoFromArrays(gl, arrays)
  );

  const u_diffuse = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'Texture.png',
  });

  const uniforms = {
    u_lightWorldPos: vec3(100, 50, -333),
    u_lightColor: vec4(1, 1, 1, 1),
    u_ambient: vec4(0.1, 0.1, 0.1, 1),
    u_specular: vec4(0.2, 0.2, 0.2, 1),
    u_shininess: 32,
    u_specularFactor: 1,
    u_diffuse,
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
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fov = radians(30);
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 50;
    const zFar = 1000;
    const projection = perspective(fov, aspect, zNear, zFar);
    const eye = vec3(100, 100, -200);
    const target = vec3(0, 40, -11);
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

function withNormals(arrays: Arrays): Arrays {
  const positions = (arrays.POSITION as FullArraySpec).data as Float32Array; // vec3
  const normals = new Float32Array(positions.length);

  for (let i = 0; i < positions.length / 3; i += 3) {
    // positions
    const pos1 = vec3(...positions.slice((i + 0) * 3, (i + 0) * 3 + 3));
    const pos2 = vec3(...positions.slice((i + 1) * 3, (i + 1) * 3 + 3));
    const pos3 = vec3(...positions.slice((i + 2) * 3, (i + 2) * 3 + 3));
    // edges
    const edge1 = subtract(pos2, pos1);
    const edge2 = subtract(pos3, pos1);
    // normal
    const normal = normalize(cross(edge1, edge2));
    normals[(i + 0) * 3 + 0] = normal[0];
    normals[(i + 0) * 3 + 1] = normal[1];
    normals[(i + 0) * 3 + 2] = normal[2];
    normals[(i + 1) * 3 + 0] = normal[0];
    normals[(i + 1) * 3 + 1] = normal[1];
    normals[(i + 1) * 3 + 2] = normal[2];
    normals[(i + 2) * 3 + 0] = normal[0];
    normals[(i + 2) * 3 + 1] = normal[1];
    normals[(i + 2) * 3 + 2] = normal[2];
  }

  return {
    ...arrays,
    NORMAL: {
      numComponents: 3,
      data: normals,
    },
  };
}
