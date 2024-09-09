import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the lesser of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The minimum of the two parameters. It returns y if y is less than x, otherwise it returns x.
 */
export function min(x: number, y: number): number;
/**
 * Return the lesser of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The minimum of the two parameters. It returns y if y is less than x, otherwise it returns x.
 */
export function min<T extends Exclude<genType, number>>(x: T, y: T): T;
/**
 * Return the lesser of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The minimum of the two parameters. It returns y if y is less than x, otherwise it returns x.
 */
export function min<T extends Exclude<genType, number>>(x: T, y: number): T;
export function min<T extends genType>(x: T, y: T | number): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.min(x, y as number) as WidenGenType<T>;
  } else {
    if (isNumber(y)) {
      return componentWise(min, x, genType[x.length](y)) as WidenGenType<T>;
    } else {
      return componentWise(min, x, y) as WidenGenType<T>;
    }
  }
}
