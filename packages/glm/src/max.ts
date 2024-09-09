import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the greater of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The maximum of the two parameters. It returns y if y is greater than x, otherwise it returns x.
 */
export function max(x: number, y: number): number;
/**
 * Return the greater of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The maximum of the two parameters. It returns y if y is greater than x, otherwise it returns x.
 */
export function max<T extends Exclude<genType, number>>(x: T, y: T): T;
/**
 * Return the greater of two values.
 * @param x Specify the first value to compare.
 * @param y Specify the second value to compare.
 * @returns The maximum of the two parameters. It returns y if y is greater than x, otherwise it returns x.
 */
export function max<T extends Exclude<genType, number>>(x: T, y: number): T;
export function max<T extends genType>(x: T, y: T | number): WidenGenType<T> {
  if (isNumber(x)) {
    return Math.max(x, y as number) as WidenGenType<T>;
  } else {
    if (isNumber(y)) {
      return componentWise(max, x, genType[x.length](y)) as WidenGenType<T>;
    } else {
      return componentWise(max, x, y) as WidenGenType<T>;
    }
  }
}
