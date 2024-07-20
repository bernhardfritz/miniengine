import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the cosine of the parameter.
 * @param angle Specify the quantity, in radians, of which to return the cosine.
 * @returns The trigonometric cosine of angle.
 */
export function cos<T extends genType>(angle: T): WidenGenType<T> {
  if (isNumber(angle)) {
    return Math.cos(angle) as WidenGenType<T>;
  } else {
    return componentWise(cos, angle) as WidenGenType<T>;
  }
}
