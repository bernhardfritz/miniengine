import { vec3 } from './vec3';

/**
 * Calculate the cross product of two vectors.
 * @param x Specifies the first of two vectors.
 * @param y Specifies the second of two vectors.
 * @returns The cross product of two vectors, x and y.
 */
export function cross(x: vec3, y: vec3): vec3 {
  return vec3(
    x[1] * y[2] - y[1] * x[2],
    x[2] * y[0] - y[2] * x[0],
    x[0] * y[1] - y[0] * x[1]
  );
}
