import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Extract the sign of the parameter.
 * @param x Specify the value from which to extract the sign.
 * @returns -1.0 if x is less than 0.0, 0.0 if x is equal to 0.0, and +1.0 if x is greater than 0.0.
 */
export function sign<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.sign(x) as WidenGenType<T>;
  } else {
    return componentWise(sign, x) as WidenGenType<T>;
  }
}
