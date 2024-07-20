import { mat4 } from './mat4';
import { multiply } from './multiply';
import { vec3 } from './vec3';

/**
 * Builds a scale 4 * 4 matrix created from 3 scalars.
 * @param m Input matrix multiplied by this scale matrix.
 * @param v Ratio of scaling for each axis.
 * @returns A nonuniform scaling along the v vector. The three components of the vector indicate the desired scale factor along each of the three axes.
 */
export function scale(m: mat4, v: vec3) {
  return mat4(
    multiply(m[0], v[0]),
    multiply(m[1], v[1]),
    multiply(m[2], v[2]),
    m[3]
  );
}
