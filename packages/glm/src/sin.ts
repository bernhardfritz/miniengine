import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the sine of the parameter.
 * @param angle Specify the quantity, in radians, of which to return the sine.
 * @returns The trigonometric sine of angle.
 */
export function sin<T extends genType>(angle: T): WidenGenType<T> {
  if (isNumber(angle)) {
    return Math.sin(angle) as WidenGenType<T>;
  } else {
    return componentWise(sin, angle) as WidenGenType<T>;
  }
}
