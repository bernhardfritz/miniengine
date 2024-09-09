import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Return the arc-tangent of the parameters.
 * @param y Specify the numerator of the fraction whose arctangent to return.
 * @param x Specify the denominator of the fraction whose arctangent to return.
 * @returns The angle whose trigonometric arctangent is y/x. The signs of y and x are used to determine the quadrant that the angle lies in. The value returned by atan in this case is in the range [−π,π]. The result is undefined if x=0.
 */
export function atan<T extends genType>(y: T, x: T): WidenGenType<T>;
/**
 * Return the arc-tangent of the parameters.
 * @param y_over_x Specify the fraction whose arctangent to return.
 * @returns The angle whose tangent is y_over_x. The value returned in this case is in the range [−π/2,π/2].
 */
export function atan<T extends genType>(y_over_x: T): WidenGenType<T>;
export function atan<T extends genType>(y_over_x: T, x?: T): WidenGenType<T> {
  if (x !== undefined) {
    const y = y_over_x;
    if (isNumber(y)) {
      return Math.atan2(y, x as number) as WidenGenType<T>; 
    } else {
      return componentWise(
        atan,
        y,
        x as Exclude<genType, number>
      ) as WidenGenType<T>;
    }
  } else {
    if (isNumber(y_over_x)) {
      return Math.atan(y_over_x) as WidenGenType<T>;
    } else {
      return componentWise(atan, y_over_x) as WidenGenType<T>;
    }
  }
}
