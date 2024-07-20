import { add } from './add';
import { mat4 } from './mat4';
import { multiply } from './multiply';
import { normalize } from './normalize';
import { vec3 } from './vec3';

/**
 * Builds a rotation 4 * 4 matrix created from an axis vector and an angle.
 * @param m Input matrix multiplied by this rotation matrix.
 * @param angle Rotation angle expressed in radians.
 * @param axis Rotation axis, recommended to be normalized.
 * @returns A rotation matrix of angle degrees around the vector axis.
 */
export function rotate(m: mat4, angle: number, axis: vec3) {
  const a = angle;
  const c = Math.cos(a);
  const s = Math.sin(a);

  const normalizedAxis = normalize(axis);
  const temp = vec3(multiply(1 - c, normalizedAxis));

  return mat4(
    add(
      add(
        multiply(m[0], c + temp[0] * normalizedAxis[0]),
        multiply(m[1], temp[0] * normalizedAxis[1] + s * normalizedAxis[2])
      ),
      multiply(m[2], temp[0] * normalizedAxis[2] - s * normalizedAxis[1])
    ),
    add(
      add(
        multiply(m[0], temp[1] * normalizedAxis[0] - s * normalizedAxis[2]),
        multiply(m[1], c + temp[1] * normalizedAxis[1])
      ),
      multiply(m[2], temp[1] * normalizedAxis[2] + s * normalizedAxis[0])
    ),
    add(
      add(
        multiply(m[0], temp[2] * normalizedAxis[0] + s * normalizedAxis[1]),
        multiply(m[1], temp[2] * normalizedAxis[1] - s * normalizedAxis[0])
      ),
      multiply(m[2], c + temp[2] * normalizedAxis[2])
    ),
    m[3]
  );
}
