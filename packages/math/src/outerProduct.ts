import { map } from '@miniengine/itertools';
import { genType } from './genType';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';
import { vec2 } from './vec2';
import { vec3 } from './vec3';
import { vec4 } from './vec4';
import { multiply } from './multiply';

/**
 * Calculate the outer product of a pair of vectors.
 * @param c Specifies the parameter to be treated as a column vector.
 * @param r Specifies the parameter to be treated as a row vector.
 * @returns Treats the first parameter c as a column vector (matrix with one column) and the second parameter r as a row vector (matrix with one row) and does a linear algebraic matrix multiply c * r, yielding a matrix whose number of rows is the number of components in c and whose number of columns is the number of components in r.
 */
export function outerProduct(c: vec2, r: vec2): mat2;
/**
 * Calculate the outer product of a pair of vectors.
 * @param c Specifies the parameter to be treated as a column vector.
 * @param r Specifies the parameter to be treated as a row vector.
 * @returns Treats the first parameter c as a column vector (matrix with one column) and the second parameter r as a row vector (matrix with one row) and does a linear algebraic matrix multiply c * r, yielding a matrix whose number of rows is the number of components in c and whose number of columns is the number of components in r.
 */
export function outerProduct(c: vec3, r: vec3): mat3;
/**
 * Calculate the outer product of a pair of vectors.
 * @param c Specifies the parameter to be treated as a column vector.
 * @param r Specifies the parameter to be treated as a row vector.
 * @returns Treats the first parameter c as a column vector (matrix with one column) and the second parameter r as a row vector (matrix with one row) and does a linear algebraic matrix multiply c * r, yielding a matrix whose number of rows is the number of components in c and whose number of columns is the number of components in r.
 */
export function outerProduct(c: vec4, r: vec4): mat4;
export function outerProduct<T extends Exclude<genType, number>>(
  c: T,
  r: T
): mat2 | mat3 | mat4 {
  return matn[c.length](...map((rr) => multiply(c, rr), r));
}
