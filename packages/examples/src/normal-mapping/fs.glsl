#version 300 es

precision mediump float;

in vec2 v_texCoord;
in vec3 v_surfaceToLight;
in vec3 v_surfaceToView;

uniform vec4 u_lightColor;
uniform vec4 u_ambient;
uniform sampler2D u_diffuse;
uniform sampler2D u_normal;
uniform vec4 u_specular;
uniform float u_shininess;
uniform float u_specularFactor;

out vec4 outColor;

vec4 lit(float l, float h, float m) {
  return vec4(1.0f, max(l, 0.0f), (l > 0.0f) ? pow(max(0.0f, h), m) : 0.0f, 1.0f);
}

void main() {
  vec4 diffuseColor = texture(u_diffuse, v_texCoord);
  vec3 normal = texture(u_normal, v_texCoord).rgb;
  normal = normalize(normal * 2.0 - 1.0);
  vec3 surfaceToLight = normalize(v_surfaceToLight);
  vec3 surfaceToView = normalize(v_surfaceToView);
  vec3 halfVector = normalize(surfaceToLight + surfaceToView);
  vec4 litR = lit(dot(normal, surfaceToLight), dot(normal, halfVector), u_shininess);
  outColor = vec4((u_lightColor * (diffuseColor * litR.y + diffuseColor * u_ambient +
    u_specular * litR.z * u_specularFactor)).rgb, diffuseColor.a);
}
