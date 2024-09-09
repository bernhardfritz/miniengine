import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the absolute value of the parameter.
 * @param x Specify the value of which to return the absolute.
 * @returns x if x ≥ 0, otherwise returns -x.
 */
export function abs<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.abs(x) as WidenGenType<T>;
  } else {
    return componentWise(abs, x) as WidenGenType<T>;
  }
}
