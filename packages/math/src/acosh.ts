import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arc hyperbolic cosine of the parameter.
 * @param x Specify the value whose arc hyperbolic cosine to return.
 * @returns The arc hyperbolic cosine of x; the non-negative inverse of {@link cosh}. The result is undefined if x<1.
 */
export function acosh<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.acosh(x) as WidenGenType<T>;
  } else {
    return componentWise(acosh, x) as WidenGenType<T>;
  }
}
