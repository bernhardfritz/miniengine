import { add } from './add';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { multiply } from './multiply';
import { subtract } from './subtract';
import { vec2 } from './vec2';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

/**
 * Calculate the inverse of a matrix.
 * @param m Specifies the matrix of which to take the inverse.
 * @returns The inverse of the matrix m. The values in the returned matrix are undefined if m is singular or poorly-conditioned (nearly singular).
 */
export function inverse(m: mat2): mat2;
/**
 * Calculate the inverse of a matrix.
 * @param m Specifies the matrix of which to take the inverse.
 * @returns The inverse of the matrix m. The values in the returned matrix are undefined if m is singular or poorly-conditioned (nearly singular).
 */
export function inverse(m: mat3): mat3;
/**
 * Calculate the inverse of a matrix.
 * @param m Specifies the matrix of which to take the inverse.
 * @returns The inverse of the matrix m. The values in the returned matrix are undefined if m is singular or poorly-conditioned (nearly singular).
 */
export function inverse(m: mat4): mat4;
export function inverse(m: mat2 | mat3 | mat4): mat2 | mat3 | mat4 {
  if (m.length === 2) {
    const oneOverDeterminant = 1 / (m[0][0] * m[1][1] - m[1][0] * m[0][1]);

    return mat2(
      vec2(m[1][1] * oneOverDeterminant, -m[0][1] * oneOverDeterminant),
      vec2(-m[1][0] * oneOverDeterminant, m[0][0] * oneOverDeterminant)
    );
  } else if (m.length === 3) {
    const oneOverDeterminant =
      1 /
      (m[0][0] * (m[1][1] * m[2][2] - m[2][1] * m[1][2]) -
        m[1][0] * (m[0][1] * m[2][2] - m[2][1] * m[0][2]) +
        m[2][0] * (m[0][1] * m[1][2] - m[1][1] * m[0][2]));

    const inverse = mat3(
      vec3(
        m[1][1] * m[2][2] - m[2][1] * m[1][2],
        -(m[0][1] * m[2][2] - m[2][1] * m[0][2]),
        m[0][1] * m[1][2] - m[1][1] * m[0][2]
      ),
      vec3(
        -(m[1][0] * m[2][2] - m[2][0] * m[1][2]),
        m[0][0] * m[2][2] - m[2][0] * m[0][2],
        -(m[0][0] * m[1][2] - m[1][0] * m[0][2])
      ),
      vec3(
        m[1][0] * m[2][1] - m[2][0] * m[1][1],
        -(m[0][0] * m[2][1] - m[2][0] * m[0][1]),
        m[0][0] * m[1][1] - m[1][0] * m[0][1]
      )
    );

    return multiply(inverse, oneOverDeterminant);
  } else {
    const coef00 = m[2][2] * m[3][3] - m[3][2] * m[2][3];
    const coef02 = m[1][2] * m[3][3] - m[3][2] * m[1][3];
    const coef03 = m[1][2] * m[2][3] - m[2][2] * m[1][3];

    const coef04 = m[2][1] * m[3][3] - m[3][1] * m[2][3];
    const coef06 = m[1][1] * m[3][3] - m[3][1] * m[1][3];
    const coef07 = m[1][1] * m[2][3] - m[2][1] * m[1][3];

    const coef08 = m[2][1] * m[3][2] - m[3][1] * m[2][2];
    const coef10 = m[1][1] * m[3][2] - m[3][1] * m[1][2];
    const coef11 = m[1][1] * m[2][2] - m[2][1] * m[1][2];

    const coef12 = m[2][0] * m[3][3] - m[3][0] * m[2][3];
    const coef14 = m[1][0] * m[3][3] - m[3][0] * m[1][3];
    const coef15 = m[1][0] * m[2][3] - m[2][0] * m[1][3];

    const coef16 = m[2][0] * m[3][2] - m[3][0] * m[2][2];
    const coef18 = m[1][0] * m[3][2] - m[3][0] * m[1][2];
    const coef19 = m[1][0] * m[2][2] - m[2][0] * m[1][2];

    const coef20 = m[2][0] * m[3][1] - m[3][0] * m[2][1];
    const coef22 = m[1][0] * m[3][1] - m[3][0] * m[1][1];
    const coef23 = m[1][0] * m[2][1] - m[2][0] * m[1][1];

    const fac0 = vec4(coef00, coef00, coef02, coef03);
    const fac1 = vec4(coef04, coef04, coef06, coef07);
    const fac2 = vec4(coef08, coef08, coef10, coef11);
    const fac3 = vec4(coef12, coef12, coef14, coef15);
    const fac4 = vec4(coef16, coef16, coef18, coef19);
    const fac5 = vec4(coef20, coef20, coef22, coef23);

    const v0 = vec4(m[1][0], m[0][0], m[0][0], m[0][0]);
    const v1 = vec4(m[1][1], m[0][1], m[0][1], m[0][1]);
    const v2 = vec4(m[1][2], m[0][2], m[0][2], m[0][2]);
    const v3 = vec4(m[1][3], m[0][3], m[0][3], m[0][3]);

    const inv0 = vec4(
      add(subtract(multiply(v1, fac0), multiply(v2, fac1)), multiply(v3, fac2))
    );
    const inv1 = vec4(
      add(subtract(multiply(v0, fac0), multiply(v2, fac3)), multiply(v3, fac4))
    );
    const inv2 = vec4(
      add(subtract(multiply(v0, fac1), multiply(v1, fac3)), multiply(v3, fac5))
    );
    const inv3 = vec4(
      add(subtract(multiply(v0, fac2), multiply(v1, fac4)), multiply(v2, fac5))
    );

    const signA = vec4(+1, -1, +1, -1);
    const signB = vec4(-1, +1, -1, +1);
    const inverse = mat4(
      multiply(inv0, signA),
      multiply(inv1, signB),
      multiply(inv2, signA),
      multiply(inv3, signB)
    );

    const row0 = vec4(
      inverse[0][0],
      inverse[1][0],
      inverse[2][0],
      inverse[3][0]
    );

    const dot0 = multiply(m[0], row0);
    const dot1 = dot0.x + dot0.y + (dot0.z + dot0.w);

    const oneOverDeterminant = 1 / dot1;

    return multiply(inverse, oneOverDeterminant);
  }
}
