import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Find the truncated value of the parameter.
 * @param x Specify the value to evaluate.
 * @returns A value equal to the nearest integer to x whose absolute value is not larger than the absolute value of x.
 */
export function trunc<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.trunc(x) as WidenGenType<T>;
  } else {
    return componentWise(trunc, x) as WidenGenType<T>;
  }
}
