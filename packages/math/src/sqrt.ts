import { genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the square root of the parameter.
 * @param x Specify the value of which to take the square root.
 * @returns The square root of x, i.e. the value √x. The result is undefined if x<0.
 */
export function sqrt<T extends genType>(x: T): T {
  if (isNumber(x)) {
    return Math.sqrt(x) as T;
  } else {
    return componentWise(sqrt, x) as T;
  }
}
