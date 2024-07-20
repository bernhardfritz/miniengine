import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { vec4 } from './vec4';

/**
 * Calculate the determinant of a matrix.
 * @param m Specifies the matrix of which to take the determinant.
 * @returns The determinant of the matrix m.
 */
export function determinant(m: mat2 | mat3 | mat4): number {
  if (m.length === 2) {
    return m[0][0] * m[1][1] - m[1][0] * m[0][1];
  } else if (m.length === 3) {
    return (
      m[0][0] * (m[1][1] * m[2][2] - m[2][1] * m[1][2]) -
      m[1][0] * (m[0][1] * m[2][2] - m[2][1] * m[0][2]) +
      m[2][0] * (m[0][1] * m[1][2] - m[1][1] * m[0][2])
    );
  } else {
    const subFactor00 = m[2][2] * m[3][3] - m[3][2] * m[2][3];
    const subFactor01 = m[2][1] * m[3][3] - m[3][1] * m[2][3];
    const subFactor02 = m[2][1] * m[3][2] - m[3][1] * m[2][2];
    const subFactor03 = m[2][0] * m[3][3] - m[3][0] * m[2][3];
    const subFactor04 = m[2][0] * m[3][2] - m[3][0] * m[2][2];
    const subFactor05 = m[2][0] * m[3][1] - m[3][0] * m[2][1];

    const detCof = vec4(
      +(m[1][1] * subFactor00 - m[1][2] * subFactor01 + m[1][3] * subFactor02),
      -(m[1][0] * subFactor00 - m[1][2] * subFactor03 + m[1][3] * subFactor04),
      +(m[1][0] * subFactor01 - m[1][1] * subFactor03 + m[1][3] * subFactor05),
      -(m[1][0] * subFactor02 - m[1][1] * subFactor04 + m[1][2] * subFactor05)
    );

    return (
      m[0][0] * detCof[0] +
      m[0][1] * detCof[1] +
      m[0][2] * detCof[2] +
      m[0][3] * detCof[3]
    );
  }
}
