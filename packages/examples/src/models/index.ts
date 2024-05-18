import twgl, { m4, v3 } from '@miniengine/twgl';
import fs from './fs.glsl?raw';
import vs from './vs.glsl?raw';
import { loadGltf } from '@miniengine/gltf';

export default async function (gl: WebGL2RenderingContext) {
  twgl.setDefaults({ attribPrefix: 'a_' });

  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  const arrayOfArrays = await loadGltf(gl, 'Fox.gltf');
  const arrays = withNormals(arrayOfArrays[0]);
  const vertexArrayInfo = twgl.createVertexArrayInfo(
    gl,
    programInfo,
    twgl.createBufferInfoFromArrays(gl, arrays)
  );

  const u_diffuse = twgl.createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'Texture.png',
  });

  const uniforms = {
    u_lightWorldPos: [100, 50, -333],
    u_lightColor: [1, 1, 1, 1],
    u_ambient: [0.1, 0.1, 0.1, 1],
    u_specular: [0.2, 0.2, 0.2, 1],
    u_shininess: 32,
    u_specularFactor: 1,
    u_diffuse,
    u_viewInverse: m4.identity(),
    u_world: m4.identity(),
    u_worldInverseTranspose: m4.identity(),
    u_worldViewProjection: m4.identity(),
  };

  return (time: number) => {
    time *= 0.0001;
    twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fov = (30 * Math.PI) / 180;
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 50;
    const zFar = 1000;
    const projection = m4.perspective(fov, aspect, zNear, zFar);
    const eye = [100, 100, -200];
    const target = [0, 40, -11];
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
    twgl.setBuffersAndAttributes(gl, programInfo, vertexArrayInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, vertexArrayInfo);
  };
}

function withNormals(arrays: twgl.Arrays): twgl.Arrays {
  const positions = (arrays.POSITION as twgl.FullArraySpec).data as Float32Array; // vec3
  const normals = new Float32Array(positions.length);

  for (let i = 0; i < positions.length; i += 3) {
    // positions
    const pos1: twgl.v3.Vec3 = positions.slice((i + 0) * 3, (i + 0) * 3 + 3);
    const pos2: twgl.v3.Vec3 = positions.slice((i + 1) * 3, (i + 1) * 3 + 3);
    const pos3: twgl.v3.Vec3 = positions.slice((i + 2) * 3, (i + 2) * 3 + 3);
    // edges
    const edge1: twgl.v3.Vec3 = v3.subtract(pos2, pos1);
    const edge2: twgl.v3.Vec3 = v3.subtract(pos3, pos1);
    // normal
    const normal: twgl.v3.Vec3 = v3.normalize(v3.cross(edge1, edge2));
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
