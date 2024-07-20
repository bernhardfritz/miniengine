import { componentWise } from './component-wise';
import { floor } from './floor';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Find the nearest even integer to the parameter.
 * @param x Specify the value to evaluate.
 * @returns A value equal to the nearest integer to x. The fractional part of 0.5 will round toward the nearest even integer. For example, both 3.5 and 4.5 will round to 4.0.
 */
export function roundEven<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    const i = floor(x);
    return (i % 2 === 0 ? i : i + 1) as WidenGenType<T>;
  } else {
    return componentWise(roundEven, x) as WidenGenType<T>;
  }
}
