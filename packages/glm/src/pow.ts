import { componentWise } from './component-wise';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Return the value of the first parameter raised to the power of the second.
 * @param x Specify the value to raise to the power y.
 * @param y Specify the power to which to raise x.
 * @returns The value of x raised to the y power. i.e., x^y. Results are undefined if x < 0 or if x == 0 and y ≤ 0.
 */
export function pow<T extends genType>(
  x: T | number,
  y: T | number
): WidenGenType<T> {
  if (isNumber(x)) {
    if (isNumber(y)) {
      return Math.pow(x, y) as WidenGenType<T>;
    } else {
      return pow(genType[y.length](x), y) as WidenGenType<T>;
    }
  } else {
    if (isNumber(y)) {
      return pow(
        x as Exclude<genType, number>,
        genType[x.length](y)
      ) as WidenGenType<T>;
    } else {
      return componentWise(pow, x, y) as WidenGenType<T>;
    }
  }
}
