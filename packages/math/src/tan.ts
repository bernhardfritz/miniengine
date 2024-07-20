import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the tangent of the parameter.
 * @param angle Specify the quantity, in radians, of which to return the tangent.
 * @returns The trigonometric tangent of angle.
 */
export function tan<T extends genType>(angle: T): WidenGenType<T> {
  if (isNumber(angle)) {
    return Math.tan(angle) as WidenGenType<T>;
  } else {
    return componentWise(tan, angle) as WidenGenType<T>;
  }
}
