import { map, zip } from '@miniengine/itertools';
import { componentWise } from './component-wise';
import { genType } from './genType';
import { isNumber } from './isNumber';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';

type Quotient<
  T extends genType | mat2 | mat3 | mat4,
  U extends genType | mat2 | mat3 | mat4
> = T extends mat2 | mat3 | mat4
  ? U extends mat2 | mat3 | mat4
    ? T
    : U extends number
    ? T
    : never // U is vector
  : T extends number
  ? U extends mat2 | mat3 | mat4
    ? U
    : U extends number
    ? number
    : U // U is vector
  : U extends mat2 | mat3 | mat4
  ? never // T is vector
  : U extends number
  ? T
  : T; // U is vector

/**
 * Divide scalars, vectors and matrices.
 * If one operand is a scalar, and the other is a vector or matrix. In this case, the scalar operation is applied independently to each component of the vector or matrix, resulting in the same size vector or matrix.
 * @param x The dividend.
 * @param y The divisor.
 * @returns The quotient.
 */
export function divide<
  T extends genType | mat2 | mat3 | mat4,
  U extends genType | mat2 | mat3 | mat4
>(x: T, y: U): Quotient<T, U> {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return (x / y) as Quotient<T, U>;
    } else if (isNumber(y[0])) {
      // y is vector
      return divide(genType[y.length](x), y) as Quotient<T, U>;
    } else {
      // y is matrix
      const xx = genType[y[0].length](x);
      return matn[y.length](...y.map((yy) => divide(xx, yy))) as Quotient<T, U>;
    }
  } else if (isNumber(x[0])) {
    // x is vector
    if (isNumber(y)) {
      return divide(x, genType[x.length](y)) as Quotient<T, U>;
    } else if (isNumber(y[0])) {
      // y is vector
      return componentWise(
        divide,
        x as Exclude<genType, number>,
        y as Exclude<genType, number>
      ) as Quotient<T, U>;
    } else {
      // y is matrix
      throw new Error('Cannot add vector and matrix');
    }
  } else {
    // x is matrix
    if (isNumber(y)) {
      const yy = genType[x[0].length](y);
      return matn[x.length](...x.map((xx) => divide(xx, yy))) as Quotient<T, U>;
    } else if (isNumber(y[0])) {
      // y is vector
      throw new Error('Cannot add matrix and vector');
    } else {
      // y is matrix
      return matn[x.length](
        ...map(
          ([xx, yy]) => divide(xx, yy),
          zip<Exclude<genType, number>>(
            x as Exclude<T, genType>,
            y as Exclude<U, genType>
          )
        )
      ) as Quotient<T, U>;
    }
  }
}
