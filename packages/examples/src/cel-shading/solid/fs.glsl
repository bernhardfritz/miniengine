#version 300 es

precision mediump float;

in vec3 v_normal;
in vec3 v_surfaceToLight;
in vec3 v_surfaceToView;

uniform vec4 u_lightColor;
uniform vec4 u_ambient;
uniform vec4 u_diffuse;
uniform vec4 u_specular;
uniform float u_shininess;
uniform float u_specularFactor;

out vec4 outColor;

vec4 lit(float l, float h, float m) {
  return vec4(1.0f, max(l, 0.0f), (l > 0.0f) ? pow(max(0.0f, h), m) : 0.0f, 1.0f);
}

// float toonifyUnoptimized(float f) {
//   if (f > 0.6) {
//     return 1.0;
//   }
//   if (f > 0.4) {
//     return 0.6;
//   }
//   if (f > 0.2) {
//     return 0.3;
//   }
//   return 0.1;
// }

float toonify(float f) {
  return 0.1 - 0.1 * step(0.2, f) + 0.3 * step(0.2, f) - 0.3 * step(0.4, f) + 0.6 * step(0.4, f) - 0.6 * step(0.6, f) + step(0.6, f);
}

void main() {
  vec3 a_normal = normalize(v_normal);
  vec3 surfaceToLight = normalize(v_surfaceToLight);
  vec3 surfaceToView = normalize(v_surfaceToView);
  vec3 halfVector = normalize(surfaceToLight + surfaceToView);
  vec4 litR = lit(dot(a_normal, surfaceToLight), dot(a_normal, halfVector), u_shininess);
  outColor = vec4((u_lightColor * (u_diffuse * toonify(litR.y) + u_diffuse * u_ambient +
    u_specular * litR.z * u_specularFactor)).rgb, u_diffuse.a);
}
