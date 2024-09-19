#version 300 es

uniform mat4 u_worldViewProjection;
uniform vec3 u_lightWorldPos;
uniform mat4 u_world;
uniform mat4 u_viewInverse;
uniform sampler2D u_heightmap;
uniform float u_minElevation;
uniform float u_maxElevation;

in vec4 a_position;
in vec2 a_texcoord;

out vec2 v_texCoord;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;
out vec4 v_position;

void main() {
  v_texCoord = a_texcoord;
  v_position = a_position;
  v_position.y = mix(u_minElevation, u_maxElevation, texture(u_heightmap, v_texCoord).r);
  v_surfaceToLight = u_lightWorldPos - (u_world * v_position).xyz;
  v_surfaceToView = (u_viewInverse[3] - (u_world * v_position)).xyz;
  gl_Position = u_worldViewProjection * v_position;
}
