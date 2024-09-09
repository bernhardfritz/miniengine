import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the inverse of the square root of the parameter.
 * @param x Specify the value of which to take the inverse of the square root.
 * @returns the inverse of the square root of x; i.e. the value 1/√x. The result is undefined if x≤0.
 */
export function inversesqrt<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return (1 / Math.sqrt(x)) as WidenGenType<T>;
  } else {
    return componentWise(inversesqrt, x) as WidenGenType<T>;
  }
}
