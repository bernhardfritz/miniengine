import { componentWise } from './component-wise';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Return the natural exponentiation of the parameter.
 * @param x Specify the value to exponentiate.
 * @returns The natural exponentiation of x. i.e., e^x.
 */
export function exp<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.exp(x) as WidenGenType<T>;
  } else {
    return componentWise(exp, x) as WidenGenType<T>;
  }
}
