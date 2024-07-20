import { vec2 } from './vec2';

export type mat2 = [vec2, vec2];

/**
 * If a matrix is constructed with a single scalar value, then that value is used to initialize all the values along the diagonal of the matrix; the rest are given zeros. Therefore, mat4(1.0) is a 4x4 identity matrix.
 * For multiple values, matrices are filled in in column-major order. That is, the first X values are the first column, the second X values are the next column, and so forth. Examples:
 * @example
 * ```
 * mat2(
 *   number, number,   // first column
 *   number, number);  // second column
 * 
 * mat4(
 *   vec4,           // first column
 *   vec4,           // second column
 *   vec4,           // third column
 *   vec4);          // fourth column
 * 
 * mat3(
 *   vec2, number,    // first column
 *   vec2, number,    // second column
 *   vec2, number);   // third column
 * ```
 * A matrix can be constructed from another matrix A matrix can only be constructed from a single other matrix. The column and row values from the input matrix are copied to their corresponding values in the output; any values of the output not filled in are filled with the identity matrix.
 * Therefore:
 * @example
 * ```
 * const diagMatrix = mat3(5.0);  // Diagonal matrix with 5.0 on the diagonal.
 * const otherMatrix = mat4(diagMatrix);
 * ```
 * The otherMatrix is a diagonal matrix, where the first 3 values are 5.0, and the last diagonal value is 1.0.
 */
export function mat2(...args: (number | number[])[]): mat2 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    const d = flattened[0];
    return [vec2(d, 0), vec2(0, d)];
  }
  const m: mat2 = mat2(1);
  for (let i = 0; i < flattened.length; i++) {
    const row = i % 2;
    const col = (i - row) / 2;
    m[col][row] = flattened[i];
  }

  return m;
}
