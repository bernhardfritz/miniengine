import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Convert a quantity in degrees to radians.
 * @param degrees Specify the quantity, in degrees, to be converted to radians.
 * @returns Converts a quantity, specified in degrees into radians. That is, the return value is π⋅degrees/180.
 */
export function radians<T extends genType>(degrees: T): WidenGenType<T> {
  if (isNumber(degrees)) {
    return ((Math.PI * degrees) / 180) as WidenGenType<T>;
  } else {
    return componentWise(radians, degrees) as WidenGenType<T>;
  }
}
