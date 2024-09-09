import { genType } from './genType';
import { subtract } from './subtract';
import { length } from './length';

/**
 * Calculate the distance between two points.
 * @param p0 Specifies the first of two points.
 * @param p1 Specifies the second of two points.
 * @returns The distance between the two points p0 and p1.
 */
export function distance<T extends Exclude<genType, number>>(p0: T, p1: T): number {
  return length(subtract(p0, p1));
}
