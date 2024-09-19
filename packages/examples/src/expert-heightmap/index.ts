import {
  inverse,
  lookAt,
  mat4,
  multiply,
  perspective,
  radians,
  rotate,
  subtract,
  transpose,
  vec2,
  vec3,
  vec4,
} from '@miniengine/glm';
import {
  Arrays,
  createBufferInfoFromArrays,
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

  const arrays = withTangent(primitives.createPlaneVertices(4, 4, 255, 255));
  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    createBufferInfoFromArrays(gl, arrays),
  );

  const u_diffuse = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'hypsometric-tint.png',
  });

  const u_heightmap = createTexture(gl, {
    min: gl.NEAREST_MIPMAP_NEAREST,
    mag: gl.NEAREST,
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
    u_resolution: 1024,
    u_size: 4,
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
    const zNear = 0.5;
    const zFar = 10;
    const projection = perspective(fov, aspect, zNear, zFar);
    const eye = vec3(1, 4, -6);
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

function withTangent(arrays: Arrays): Arrays {
  const position = arrays.position as Float32Array; // vec3
  const normal = arrays.normal as Float32Array; // vec3
  const texcoord = arrays.texcoord as Float32Array; // vec2
  const indices = arrays.indices as Uint16Array; // int
  const tangent = new Float32Array(normal.length);
  const trianglesIncluded = new Array(position.length / 3).fill(0);

  for (let i = 0; i < indices.length; i += 3) {
    // positions
    const pos1 = vec3(
      ...position.slice(indices[i + 0] * 3, indices[i + 0] * 3 + 3)
    );
    const pos2 = vec3(
      ...position.slice(indices[i + 1] * 3, indices[i + 1] * 3 + 3)
    );
    const pos3 = vec3(
      ...position.slice(indices[i + 2] * 3, indices[i + 2] * 3 + 3)
    );
    // texture coordinates
    const uv1 = vec2(
      ...texcoord.slice(indices[i + 0] * 2, indices[i + 0] * 2 + 2)
    );
    const uv2 = vec2(
      ...texcoord.slice(indices[i + 1] * 2, indices[i + 1] * 2 + 2)
    );
    const uv3 = vec2(
      ...texcoord.slice(indices[i + 2] * 2, indices[i + 2] * 2 + 2)
    );

    const edge1 = subtract(pos2, pos1);
    const edge2 = subtract(pos3, pos1);
    const deltaUV1 = subtract(uv2, uv1);
    const deltaUV2 = subtract(uv3, uv1);

    const f = 1 / (deltaUV1[0] * deltaUV2[1] - deltaUV2[0] * deltaUV1[1]);

    tangent[indices[i + 0] * 3 + 0] +=
      f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
    tangent[indices[i + 0] * 3 + 1] +=
      f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
    tangent[indices[i + 0] * 3 + 2] +=
      f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);
    tangent[indices[i + 1] * 3 + 0] +=
      f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
    tangent[indices[i + 1] * 3 + 1] +=
      f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
    tangent[indices[i + 1] * 3 + 2] +=
      f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);
    tangent[indices[i + 2] * 3 + 0] +=
      f * (deltaUV2[1] * edge1[0] - deltaUV1[1] * edge2[0]);
    tangent[indices[i + 2] * 3 + 1] +=
      f * (deltaUV2[1] * edge1[1] - deltaUV1[1] * edge2[1]);
    tangent[indices[i + 2] * 3 + 2] +=
      f * (deltaUV2[1] * edge1[2] - deltaUV1[1] * edge2[2]);

    trianglesIncluded[indices[i + 0]] += 1;
    trianglesIncluded[indices[i + 1]] += 1;
    trianglesIncluded[indices[i + 2]] += 1;
  }

  // average the tangents
  for (let i = 0; i < trianglesIncluded.length; i++) {
    tangent[i * 3 + 0] /= trianglesIncluded[i];
    tangent[i * 3 + 1] /= trianglesIncluded[i];
    tangent[i * 3 + 2] /= trianglesIncluded[i];
  }

  return { ...arrays, tangent };
}