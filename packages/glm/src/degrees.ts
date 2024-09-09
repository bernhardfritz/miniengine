import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Convert a quantity in radians to degrees.
 * @param radians Specify the quantity, in radians, to be converted to degrees.
 * @returns Converts a quantity, specified in radians into degrees. That is, the return value is (180⋅radians)/π.
 */
export function degrees<T extends genType>(radians: T): WidenGenType<T> {
  if (isNumber(radians)) {
    return ((180 * radians) / Math.PI) as WidenGenType<T>;
  } else {
    return componentWise(degrees, radians) as WidenGenType<T>;
  }
}
