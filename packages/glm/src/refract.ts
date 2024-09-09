import { dot } from './dot';
import { genType } from './genType';
import { multiply } from './multiply';
import { sqrt } from './sqrt';
import { subtract } from './subtract';

/**
 * Calculate the refraction direction for an incident vector.
 * @param I Specifies the incident vector.
 * @param N Specifies the normal vector.
 * @param eta Specifies the ratio of indices of refraction.
 * @returns For a given incident vector I, surface normal N and ratio of indices of refraction, eta, refract returns the refraction vector, R. The input parameters I and N should be normalized in order to achieve the desired result.
 */
export function refract<T extends Exclude<genType, number>>(
  I: T,
  N: T,
  eta: number
): T {
  const NdotI = dot(N, I);
  const k = 1 - eta * eta * (1 - NdotI * NdotI);
  if (k < 0) {
    return genType[I.length](0.0) as T;
  } else {
    return subtract(multiply(eta, I), multiply(eta * NdotI + sqrt(k), N)) as T;
  }
}
