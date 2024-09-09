import { cross } from './cross';
import { dot } from './dot';
import { mat4 } from './mat4';
import { normalize } from './normalize';
import { subtract } from './subtract';
import { vec3 } from './vec3';

/**
 * Build a look at view matrix.
 * @param eye Position of the camera.
 * @param center Position where the camera is looking at.
 * @param up Normalized up vector, how the camera is oriented. Typically (0, 0, 1).
 * @returns A viewing matrix derived from an eye point, a reference point indicating the center of the scene, and an up vector.
 */
export function lookAt(eye: vec3, center: vec3, up: vec3): mat4 {
  const f = normalize(subtract(center, eye));
  const s = normalize(cross(f, up));
  const u = cross(s, f);

  return mat4(
    s.x,
    u.x,
    -f.x,
    0,
    s.y,
    u.y,
    -f.y,
    0,
    s.z,
    u.z,
    -f.z,
    0,
    -dot(s, eye),
    -dot(u, eye),
    dot(f, eye),
    1
  );
}
