import { componentWise } from './component-wise';
import { dot } from './dot';
import { genType } from './genType';
import { isNumber } from './isNumber';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';
import { transpose } from './transpose';

type Product<
  T extends genType | mat2 | mat3 | mat4,
  U extends genType | mat2 | mat3 | mat4
> = T extends mat2 | mat3 | mat4
  ? U extends mat2 | mat3 | mat4
    ? T
    : U extends number
    ? T
    : U // U is vector
  : T extends number
  ? U extends mat2 | mat3 | mat4
    ? U
    : U extends number
    ? number
    : U // U is vector
  : U extends mat2 | mat3 | mat4
  ? T // T is vector
  : U extends number
  ? T
  : T; // U is vector

/**
 * Multiply scalars, vectors and matrices.
 * If one operand is a scalar, and the other is a vector or matrix. In this case, the scalar operation is applied independently to each component of the vector or matrix, resulting in the same size vector or matrix.
 * Note that the vector has to be multiplied to the matrix from the right.
 * If a vector is multiplied to a matrix from the left, the result corresponds to multiplying a row vector from the left to the matrix.
 * @param x The first factor.
 * @param y The second factor.
 * @returns The product.
 */
export function multiply<
  T extends genType | mat2 | mat3 | mat4,
  U extends genType | mat2 | mat3 | mat4
>(x: T, y: U): Product<T, U> {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return (x * y) as Product<T, U>;
    } else if (isNumber(y[0])) {
      // y is vector
      return multiply(genType[y.length](x), y) as Product<T, U>;
    } else {
      // y is matrix
      const xx = genType[y[0].length](x);
      return matn[y.length](...y.map((yy) => multiply(xx, yy))) as Product<
        T,
        U
      >;
    }
  } else if (isNumber(x[0])) {
    // x is vector
    if (isNumber(y)) {
      return multiply(x, genType[x.length](y) as U);
    } else if (isNumber(y[0])) {
      // y is vector
      return componentWise(
        multiply,
        x as Exclude<genType, number>,
        y as Exclude<genType, number>
      ) as Product<T, U>;
    } else {
      // y is matrix
      return genType[y.length](
        ...y.map((yy) =>
          dot(x as Exclude<genType, number>, yy as Exclude<genType, number>)
        )
      ) as Product<T, U>;
    }
  } else {
    // x is matrix
    if (isNumber(y)) {
      const yy = genType[x[0].length](y);
      return matn[x.length](...x.map((xx) => multiply(xx, yy))) as Product<
        T,
        U
      >;
    } else if (isNumber(y[0])) {
      // y is vector
      return genType[x.length](
        ...transpose(x as Exclude<T, genType>).map((xx) =>
          dot(xx, y as Exclude<genType, number>)
        )
      ) as Product<T, U>;
    } else {
      // y is matrix
      return transpose(
        matn[x.length](
          ...transpose(x as Exclude<T, genType>).map((xx) =>
            genType[y.length](
              y.map((yy) => dot(xx, yy as Exclude<genType, number>))
            )
          )
        )
      ) as Product<T, U>;
    }
  }
}
