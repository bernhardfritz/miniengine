#version 300 es

uniform mat4 u_worldViewProjection;
uniform vec3 u_lightWorldPos;
uniform mat4 u_world;
uniform mat4 u_viewInverse;
uniform mat4 u_worldInverseTranspose;
uniform sampler2D u_heightmap;
uniform float u_minElevation;
uniform float u_maxElevation;
uniform float u_resolution;
uniform float u_size;

in vec4 a_position;
in vec3 a_normal;
in vec2 a_texcoord;
in vec3 a_tangent;

out vec2 v_texCoord;
out vec3 v_normal;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {
  v_texCoord = a_texcoord;
  float offset = u_size / u_resolution;
  vec3 normal = a_normal;
  vec3 tangent = a_tangent;
  tangent = tangent - dot(tangent, normal) * normal; // re-orthogonalize tangent with respect to normal
  vec3 bitangent = cross(normal, tangent); // retrieve perpendicular bitangent with the cross product of normal and tangent
  vec3 pos1 = a_position.xyz + normal * mix(u_minElevation, u_maxElevation, texture(u_heightmap, v_texCoord).r);
  vec3 pos2 = a_position.xyz + tangent * offset + normal * mix(u_minElevation, u_maxElevation, texture(u_heightmap, v_texCoord + vec2(offset, 0)).r);
  vec3 pos3 = a_position.xyz + bitangent * offset + normal * mix(u_minElevation, u_maxElevation, texture(u_heightmap, v_texCoord + vec2(0, -offset)).r);
  vec3 edge1 = pos2 - pos1;
  vec3 edge2 = pos3 - pos1;
  normal = cross(edge1, edge2);
  v_normal = (u_worldInverseTranspose * vec4(normal, 0)).xyz;
  v_surfaceToLight = u_lightWorldPos - (u_world * vec4(pos1, 1.0)).xyz;
  v_surfaceToView = (u_viewInverse[3] - (u_world * vec4(pos1, 1.0))).xyz;
  gl_Position = u_worldViewProjection * vec4(pos1, 1.0);
}
