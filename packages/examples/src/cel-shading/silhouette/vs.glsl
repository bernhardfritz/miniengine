#version 300 es

uniform mat4 u_worldViewProjection;

in vec4 a_POSITION;
in vec3 a_NORMAL;

void main() {
  vec3 position = a_POSITION.xyz + 0.015 * a_NORMAL;
  gl_Position = u_worldViewProjection * vec4(position, 1.0);
}
