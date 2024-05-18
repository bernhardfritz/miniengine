#version 300 es

uniform mat4 u_worldViewProjection;
uniform vec3 u_lightWorldPos;
uniform mat4 u_world;
uniform mat4 u_viewInverse;
uniform mat4 u_worldInverseTranspose;

in vec4 a_POSITION;
in vec3 a_NORMAL;
in vec2 a_TEXCOORD_0;

out vec2 v_texCoord;
out vec3 v_normal;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {
  v_texCoord = a_TEXCOORD_0;
  v_normal = (u_worldInverseTranspose * vec4(a_NORMAL, 0)).xyz;
  v_surfaceToLight = u_lightWorldPos - (u_world * a_POSITION).xyz;
  v_surfaceToView = (u_viewInverse[3] - (u_world * a_POSITION)).xyz;
  gl_Position = u_worldViewProjection * a_POSITION;
}
