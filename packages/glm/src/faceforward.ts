import { genType } from './genType';
import { dot } from './dot';
import { negate } from './negate';

/**
 * Return a vector pointing in the same direction as another.
 * @param N Specifies the vector to orient.
 * @param I Specifies the incident vector.
 * @param Nref Specifies the reference vector.
 * @returns N if {@link dot}(Nref, I) < 0, otherwise it returns -N.
 */
export function faceforward<T extends Exclude<genType, number>>(N: T, I: T, Nref: T): T {
  if (dot(Nref, I) < 0) {
    return N;
  } else {
    return negate(N);
  }
}
