import { map, zip } from '@miniengine/itertools';
import { mat2 } from './mat2';
import { mat3 } from './mat3';
import { mat4 } from './mat4';
import { matn } from './matn';
import { multiply } from './multiply';
import { genType } from './genType';

/**
 * Perform a component-wise multiplication of two matrices
 * @param x Specifies the first matrix multiplicand.
 * @param y Specifies the second matrix multiplicand.
 * @returns Performs a component-wise multiplication of two matrices, yielding a result matrix where each component, result[i][j] is computed as the scalar product of x[i][j] and y[i][j].
 */
export function matrixCompMult<T extends mat2 | mat3 | mat4>(x: T, y: T): T {
  return matn[x.length](
    ...map(([xx, yy]) => multiply(xx, yy), zip<Exclude<genType, number>>(x, y))
  ) as T;
}
