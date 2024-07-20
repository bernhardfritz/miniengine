import { dot } from './dot';
import { genType } from './genType';
import { multiply } from './multiply';
import { subtract } from './subtract';

/**
 * Calculate the reflection direction for an incident vector.
 * @param I Specifies the incident vector.
 * @param N Specifies the normal vector.
 * @returns For a given incident vector I and surface normal N reflect returns the reflection direction calculated as I - 2.0 * dot(N, I) * N. N should be normalized in order to achieve the desired result.
 */
export function reflect<T extends Exclude<genType, number>>(I: T, N: T): T {
  return subtract(I, multiply(2 * dot(N, I), N)) as T;
}
