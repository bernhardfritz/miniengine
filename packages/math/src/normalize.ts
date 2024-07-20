import { divide } from './divide';
import { genType } from './genType';
import { length } from './length';

/**
 * Calculates the unit vector in the same direction as the original vector.
 * @param v Specifies the vector to normalize.
 * @returns A vector with the same direction as its parameter, v, but with length 1.
 */
export function normalize<T extends Exclude<genType, number>>(v: T): T {
  return divide(v, length(v)) as T;
}