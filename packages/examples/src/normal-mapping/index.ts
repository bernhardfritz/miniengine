import {
  Arrays,
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
  v3,
} from 'twgl.js';
import fs from './fs.glsl?raw';
import vs from './vs.glsl?raw';
import * as v2 from './v2';

export default async function (gl: WebGL2RenderingContext) {
  setDefaults({ attribPrefix: 'a_' });

  const programInfo = createProgramInfo(gl, [vs, fs]);

  const arrays = withTangent(primitives.createSphereVertices(1.5, 24, 12));
  const vertexArrayInfo = createVertexArrayInfo(
    gl,
    programInfo,
    createBufferInfoFromArrays(gl, arrays)
  );

  const u_diffuse = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'brickwall.jpg',
  });
  // make sure to provide a "right-handed" normal map
  // handiness of normal map can be modified with an image editor of your choice by inverting the green channel
  // in OpenGL green channel indicates how the model should look when lit from above
  const u_normal = createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'brickwall_normal.jpg',
  });

  const uniforms = {
    u_lightWorldPos: [1, 8, -10],
    u_lightColor: [1, 1, 1, 1],
    u_ambient: [0.1, 0.1, 0.1, 1],
    u_specular: [0.2, 0.2, 0.2, 1],
    u_shininess: 32,
    u_specularFactor: 1,
    u_diffuse,
    u_normal,
    u_viewInverse: m4.identity(),
    u_world: m4.identity(),
    u_worldInverseTranspose: m4.identity(),
    u_worldViewProjection: m4.identity(),
  };

  return (time: number) => {
    time *= 0.0001;
    resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fov = (30 * Math.PI) / 180;
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 0.5;
    const zFar = 10;
    const projection = m4.perspective(fov, aspect, zNear, zFar);
    const eye = [1, 4, -6];
    const target = [0, 0, 0];
    const up = [0, 1, 0];

    const camera = m4.lookAt(eye, target, up);
    const view = m4.inverse(camera);
    const viewProjection = m4.multiply(projection, view);
    const world = m4.rotationY(time);

    Object.assign(uniforms, {
      u_viewInverse: camera,
      u_world: world,
      u_worldInverseTranspose: m4.transpose(m4.inverse(world)),
      u_worldViewProjection: m4.multiply(viewProjection, world),
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
    const pos1: v3.Vec3 = position.slice(
      indices[i + 0] * 3,
      indices[i + 0] * 3 + 3
    );
    const pos2: v3.Vec3 = position.slice(
      indices[i + 1] * 3,
      indices[i + 1] * 3 + 3
    );
    const pos3: v3.Vec3 = position.slice(
      indices[i + 2] * 3,
      indices[i + 2] * 3 + 3
    );
    // texture coordinates
    const uv1: v2.Vec2 = texcoord.slice(
      indices[i + 0] * 2,
      indices[i + 0] * 2 + 2
    );
    const uv2: v2.Vec2 = texcoord.slice(
      indices[i + 1] * 2,
      indices[i + 1] * 2 + 2
    );
    const uv3: v2.Vec2 = texcoord.slice(
      indices[i + 2] * 2,
      indices[i + 2] * 2 + 2
    );

    const edge1: v3.Vec3 = v3.subtract(pos2, pos1);
    const edge2: v3.Vec3 = v3.subtract(pos3, pos1);
    const deltaUV1: v2.Vec2 = v2.subtract(uv2, uv1);
    const deltaUV2: v2.Vec2 = v2.subtract(uv3, uv1);

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
