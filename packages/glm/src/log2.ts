import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the base 2 logarithm of the parameter.
 * @param x Specify the value of which to take the base 2 logarithm.
 * @returns The base 2 logarithm of x, i.e. the value y which satisfies x=2^y. The result is undefined if x≤0.
 */
export function log2<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.log2(x) as WidenGenType<T>;
  } else {
    return componentWise(log2, x) as WidenGenType<T>;
  }
}
