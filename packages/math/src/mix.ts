import { componentWise } from './component-wise';
import { genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Linearly interpolate between two values.
 * @param x Specify the start of the range in which to interpolate.
 * @param y Specify the end of the range in which to interpolate.
 * @param a Specify the value to use to interpolate between x and y.
 * @returns Performs a linear interpolation between x and y using a to weight between them. The return value is computed as follows: x⋅(1−a)+y⋅a.
 */
export function mix<T extends genType>(x: T, y: T, a: T | number): T {
  if (isNumber(x) && isNumber(a)) {
    return (x * (1 - a) + (y as number) * a) as T;
  } else {
    if (isNumber(a)) {
      return mix(x, y, genType[(x as Exclude<genType, number>).length](a) as T);
    } else {
      return componentWise(
        mix,
        x as Exclude<genType, number>,
        y as Exclude<genType, number>,
        a
      ) as T;
    }
  }
}
