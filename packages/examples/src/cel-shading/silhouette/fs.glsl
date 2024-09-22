#version 300 es

precision mediump float;

uniform vec4 u_diffuse;

out vec4 outColor;

void main() {
  outColor = u_diffuse;
}
