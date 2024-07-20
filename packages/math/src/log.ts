import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the natural logarithm of the parameter.
 * @param x Specify the value of which to take the natural logarithm.
 * @returns The natural logarithm of x, i.e. the value y which satisfies x=e^y. The result is undefined if x≤0.
 */
export function log<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.log(x) as WidenGenType<T>;
  } else {
    return componentWise(log, x) as WidenGenType<T>;
  }
}
