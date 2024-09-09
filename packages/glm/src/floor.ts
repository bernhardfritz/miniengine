import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Find the nearest integer less than or equal to the parameter.
 * @param x Specify the value to evaluate.
 * @returns A value equal to the nearest integer that is less than or equal to x.
 */
export function floor<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.floor(x) as WidenGenType<T>;
  } else {
    return componentWise(floor, x) as WidenGenType<T>;
  }
}
