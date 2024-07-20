import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the hyperbolic sine of the parameter.
 * @param x Specify the value whose hyperbolic sine to return.
 * @returns the hyperbolic sine of x. The hyperbolic sine of x is computed as (e^x−e^−x)/2.
 */
export function sinh<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.sinh(x) as WidenGenType<T>;
  } else {
    return componentWise(sinh, x) as WidenGenType<T>;
  }
}
