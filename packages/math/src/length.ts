import { genType } from './genType';

/**
 * Calculate the length of a vector.
 * @param x Specifies a vector of which to calculate the length.
 * @returns The length of the vector.
 */
export function length<T extends Exclude<genType, number>>(x: T): number {
  return Math.sqrt(
    x.reduce((accumulator, component) => accumulator + component * component, 0)
  );
}
