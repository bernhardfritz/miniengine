import { genType } from './genType';
import { reduce, zip } from '@miniengine/itertools';

/**
 * Calculate the dot product of two vectors.
 * @param x Specifies the first of two vectors.
 * @param y Specifies the second of two vectors.
 * @returns The dot product of two vectors, x and y. i.e., x[0]⋅y[0]+x[1]⋅y[1]+...
 */
export function dot<T extends Exclude<genType, number>>(x: T, y: T): number {
  return reduce((accumulator, [a, b]) => accumulator + a * b, zip(x, y), 0);
}
