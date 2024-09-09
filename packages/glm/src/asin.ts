import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arcsine of the parameter.
 * @param x Specify the value whose arcsine to return.
 * @returns The angle whose trigonometric sine is x. The range of values returned by asin is [−π/2,π/2]. The result is undefined if |x|>1.
 */
export function asin<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.asin(x) as WidenGenType<T>;
  } else {
    return componentWise(asin, x) as WidenGenType<T>;
  }
}
