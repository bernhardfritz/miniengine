import {
  cross,
  floor,
  inverse,
  lookAt,
  mat4,
  mix,
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
import {
  Arrays,
  BufferInfo,
  createBufferInfoFromArrays,
  createProgramInfo,
  createTexture,
  createVertexArrayInfo,
  drawBufferInfo,
  m4,
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
    await createHeightmapBufferInfo(gl, 'heightmap.png', 0, 1.5, 4, 4, 255, 255),
  );

  const u_diffuse = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'hypsometric-tint.png',
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

async function createHeightmapBufferInfo(gl: WebGLRenderingContext, src: string, minElevation = 0, maxElevation = 1, width = 1, depth = 1, subdivisionsWidth = 1, subdivisionsDepth = 1, matrix = m4.identity()): Promise<BufferInfo> {
  const image = await loadImage(src);

  const arrays = primitives.createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth);
  const positions = arrays.position as Float32Array; // vec3
  for (let i = 0; i < positions.length; i += 3) {
    const [x, z] = [positions[i + 0], positions[i + 2]];
    const col = floor(mix(0, image.width - 1, x / width + 0.5));
    const row = floor(mix(0, image.height - 1, z / depth + 0.5));
    const idx = (row * image.width + col) * 4;
    const r = image.data[idx + 0];
    const y = mix(minElevation, maxElevation, r / 255);
    positions[i + 1] = y;
  }

  updateNormals(arrays);

  const normals = arrays.normal as Float32Array; // vec3
  const texcoords = arrays.texcoord as Float32Array; // vec2
  const indices = arrays.indices as Uint16Array;

  const reoriented = primitives.reorientVertices({
    position: positions,
    normal: normals,
    texcoord: texcoords,
    indices: indices,
  }, matrix);

  return createBufferInfoFromArrays(gl, reoriented);
}

async function loadImage(src: string): Promise<ImageData> {
  const res = await fetch(src);
  const blob = await res.blob();
  const bitmap = await createImageBitmap(blob);
  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext('2d');
  if (ctx === null) {
    throw new Error('Cannot create context');
  }
  ctx.drawImage(bitmap, 0, 0);

  return ctx.getImageData(0, 0, bitmap.width, bitmap.height);
}

function updateNormals(arrays: Arrays): void {
  const positions = arrays.position as Float32Array; // vec3
  const normals = arrays.normal as Float32Array; // vec3
  const indices = arrays.indices as Uint16Array;
  for (let i = 0; i < indices.length; i += 3) {
    // positions
    const pos1 = vec3(
      ...positions.slice(indices[i + 0] * 3, indices[i + 0] * 3 + 3)
    );
    const pos2 = vec3(
      ...positions.slice(indices[i + 1] * 3, indices[i + 1] * 3 + 3)
    );
    const pos3 = vec3(
      ...positions.slice(indices[i + 2] * 3, indices[i + 2] * 3 + 3)
    );
    // edges
    const edge1 = subtract(pos2, pos1);
    const edge2 = subtract(pos3, pos1);
    // normal
    const normal = normalize(cross(edge1, edge2));
    normals[indices[i + 0] * 3 + 0] = normal[0];
    normals[indices[i + 0] * 3 + 1] = normal[1];
    normals[indices[i + 0] * 3 + 2] = normal[2];
    normals[indices[i + 1] * 3 + 0] = normal[0];
    normals[indices[i + 1] * 3 + 1] = normal[1];
    normals[indices[i + 1] * 3 + 2] = normal[2];
    normals[indices[i + 2] * 3 + 0] = normal[0];
    normals[indices[i + 2] * 3 + 1] = normal[1];
    normals[indices[i + 2] * 3 + 2] = normal[2];
  }
}