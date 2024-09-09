import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arc hyperbolic sine of the parameter.
 * @param x Specify the value whose arc hyperbolic sine to return.
 * @returns The arc hyperbolic sine of x; the inverse of {@link sinh}.
 */
export function asinh<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.asinh(x) as WidenGenType<T>;
  } else {
    return componentWise(asinh, x) as WidenGenType<T>;
  }
}
