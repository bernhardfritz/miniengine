import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Find the nearest integer to the parameter.
 * @param x Specify the value to evaluate.
 * @returns A value equal to the nearest integer to x. The fraction 0.5 will round in a direction chosen by the implementation, usually in the direction that is fastest. This includes the possibility that round(x) returns the same value as roundEven(x) for all values of x.
 */
export function round<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.round(x) as WidenGenType<T>;
  } else {
    return componentWise(round, x) as WidenGenType<T>;
  }
}
