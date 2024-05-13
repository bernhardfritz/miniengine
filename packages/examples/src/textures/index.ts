import twgl, { m4, primitives } from '@miniengine/twgl';
import fs from './fs.glsl?raw';
import vs from './vs.glsl?raw';

export default function (gl: WebGL2RenderingContext) {
  twgl.setDefaults({ attribPrefix: 'a_' });

  const programInfo = twgl.createProgramInfo(gl, [vs, fs]);

  const vertexArrayInfo = twgl.createVertexArrayInfo(gl, programInfo, primitives.createSphereBufferInfo(gl, 1.5, 24, 12));

  const u_diffuse = twgl.createTexture(gl, {
    min: gl.NEAREST,
    mag: gl.NEAREST,
    src: 'brickwall.jpg',
  });

  const uniforms = {
    u_lightWorldPos: [1, 8, -10],
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
    twgl.setBuffersAndAttributes(gl, programInfo, vertexArrayInfo);
    twgl.setUniforms(programInfo, uniforms);
    twgl.drawBufferInfo(gl, vertexArrayInfo);
  };
}
