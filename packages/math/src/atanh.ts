import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arc hyperbolic tangent of the parameter.
 * @param x Specify the value whose arc hyperbolic tangent to return.
 * @returns The arc hyperbolic tangent of x; the inverse of tanh. The result is undefined if |x|>1.
 */
export function atanh<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.atanh(x) as WidenGenType<T>;
  } else {
    return componentWise(atanh, x) as WidenGenType<T>;
  }
}
