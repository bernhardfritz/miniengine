#version 300 es

uniform mat4 u_worldViewProjection;
uniform vec3 u_lightWorldPos;
uniform mat4 u_world;
uniform mat4 u_viewInverse;
uniform mat4 u_worldInverseTranspose;

in vec4 a_position;
in vec3 a_normal;
in vec2 a_texcoord;
in vec3 a_tangent;

out vec2 v_texCoord;
out vec3 v_surfaceToLight;
out vec3 v_surfaceToView;

void main() {
  v_texCoord = a_texcoord;
  vec3 tangent = normalize((u_worldInverseTranspose * vec4(a_tangent, 0)).xyz);
  vec3 normal = normalize((u_worldInverseTranspose * vec4(a_normal, 0)).xyz);
  tangent = normalize(tangent - dot(tangent, normal) * normal); // re-orthogonalize tangent with respect to normal
  vec3 bitangent = cross(normal, tangent); // retrieve perpendicular bitangent with the cross product of normal and tangent
  mat3 tbn = transpose(mat3(tangent, bitangent, normal));
  v_surfaceToLight = tbn * (u_lightWorldPos - (u_world * a_position).xyz);
  v_surfaceToView = tbn * ((u_viewInverse[3] - (u_world * a_position)).xyz);
  gl_Position = u_worldViewProjection * a_position;
}
