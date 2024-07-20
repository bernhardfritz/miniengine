import { componentWise } from './component-wise';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Return 2 raised to the power of the parameter.
 * @param x Specify the value of the power to which 2 will be raised.
 * @returns 2 raised to the power of x. i.e., 2^x.
 */
export function exp2<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.pow(2, x) as WidenGenType<T>;
  } else {
    return componentWise(exp2, x) as WidenGenType<T>;
  }
}
