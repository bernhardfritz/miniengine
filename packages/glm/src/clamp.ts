import { WidenGenType, genType } from './genType';
import { max } from './max';
import { min } from './min';

/**
 * Constrain a value to lie between two further values.
 * @param x Specify the value to constrain.
 * @param minVal Specify the lower end of the range into which to constrain x.
 * @param maxVal Specify the upper end of the range into which to constrain x.
 * @returns The value of x constrained to the range minVal to maxVal. The returned value is computed as {@link min}({@link max}(x, minVal), maxVal). The result is undefined if minVal ≥ maxVal.
 */
export function clamp(x: number, minVal: number, maxVal: number): number;
/**
 * Constrain a value to lie between two further values.
 * @param x Specify the value to constrain.
 * @param minVal Specify the lower end of the range into which to constrain x.
 * @param maxVal Specify the upper end of the range into which to constrain x.
 * @returns The value of x constrained to the range minVal to maxVal. The returned value is computed as {@link min}({@link max}(x, minVal), maxVal). The result is undefined if minVal ≥ maxVal.
 */
export function clamp<T extends Exclude<genType, number>>(
  x: T,
  minVal: T,
  maxVal: T
): T;
/**
 * Constrain a value to lie between two further values.
 * @param x Specify the value to constrain.
 * @param minVal Specify the lower end of the range into which to constrain x.
 * @param maxVal Specify the upper end of the range into which to constrain x.
 * @returns The value of x constrained to the range minVal to maxVal. The returned value is computed as {@link min}({@link max}(x, minVal), maxVal). The result is undefined if minVal ≥ maxVal.
 */
export function clamp<T extends Exclude<genType, number>>(
  x: T,
  minVal: number,
  maxVal: number
): T;
export function clamp<T extends genType>(
  x: T,
  minVal: T | number,
  maxVal: T | number
): WidenGenType<T> {
  return min(max(x as any, minVal), maxVal);
}
