import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the hyperbolic cosine of the parameter.
 * @param x Specify the value whose hyperbolic cosine to return.
 * @returns The hyperbolic cosine of x. The hyperbolic cosine of x is computed as (e^x + e^−x) / 2.
 */
export function cosh<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.cosh(x) as WidenGenType<T>;
  } else {
    return componentWise(cosh, x) as WidenGenType<T>;
  }
}
