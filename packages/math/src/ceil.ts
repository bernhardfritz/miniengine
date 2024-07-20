import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Find the nearest integer that is greater than or equal to the parameter.
 * @param x Specify the value to evaluate.
 * @returns A value equal to the nearest integer that is greater than or equal to x.
 */
export function ceil<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.ceil(x) as WidenGenType<T>;
  } else {
    return componentWise(ceil, x) as WidenGenType<T>;
  }
}
