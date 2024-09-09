import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the hyperbolic tangent of the parameter.
 * @param angle Specify the value whose hyperbolic tangent to return.
 * @returns The hyperbolic tangent of x. The hyperbolic tangent of x is computed as sinh(x)/cosh(x).
 */
export function tanh<T extends genType>(angle: T): WidenGenType<T> {
  if (isNumber(angle)) {
    return Math.tanh(angle) as WidenGenType<T>;
  } else {
    return componentWise(tanh, angle) as WidenGenType<T>;
  }
}
