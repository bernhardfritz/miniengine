import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';
import { map } from '@miniengine/itertools';

/**
 * Negates a scalar.
 * @param x The scalar.
 * @returns The negated scalar.
 */
export function negate(x: number): number;
/**
 * Negates a vector.
 * @param x The vector.
 * @returns The negated vector.
 */
export function negate<T extends Exclude<genType, number>>(x: T): T;
/**
 * Negates a matrix.
 * @param x The matrix.
 * @returns The negated matrix.
 */
export function negate<T extends mat2 | mat3 | mat4>(x: T): T;
/**
 * Negates a scalar, vector or matrix.
 * @param x The scalar, vector or matrix.
 * @returns The negated scalar, vector or matrix.
 */
export function negate<T extends genType | mat2 | mat3 | mat4>(
  x: T
): WidenGenType<T> {
  if (isNumber(x)) {
    return -x as WidenGenType<T>;
  } else if (isNumber(x[0])) {
    return componentWise(
      negate,
      x as Exclude<T, number | mat2 | mat3 | mat4>
    ) as WidenGenType<Exclude<T, number | mat2 | mat3 | mat4>>;
  } else {
    return matn[x.length](
      ...map(
        (xx: Exclude<genType, number>) => negate(xx),
        x as Exclude<T, genType>
      )
    ) as WidenGenType<T>;
  }
}
