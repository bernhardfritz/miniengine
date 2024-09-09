import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arccosine of the parameter.
 * @param x Specify the value whose arccosine to return.
 * @returns The angle whose trigonometric cosine is x. The range of values returned by acos is [0,π]. The result is undefined if |x|>1.
 */
export function acos<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.acos(x) as WidenGenType<T>;
  } else {
    return componentWise(acos, x) as WidenGenType<T>;
  }
}
