import { clamp } from './clamp';
import { componentWise } from './component-wise';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Perform Hermite interpolation between two values.
 * @param edge0 Specifies the value of the lower edge of the Hermite function.
 * @param edge1 Specifies the value of the upper edge of the Hermite function.
 * @param x Specifies the source value for interpolation.
 * @returns Performs smooth Hermite interpolation between 0 and 1 when edge0 < x < edge1. This is useful in cases where a threshold function with a smooth transition is desired. Returns 0.0 if x ≤ edge0 and 1.0 if x ≥ edge1.
 */
export function smoothstep<T extends genType>(edge0: T, edge1: T, x: T): WidenGenType<T>;
/**
 * Perform Hermite interpolation between two values.
 * @param edge0 Specifies the value of the lower edge of the Hermite function.
 * @param edge1 Specifies the value of the upper edge of the Hermite function.
 * @param x Specifies the source value for interpolation.
 * @returns Performs smooth Hermite interpolation between 0 and 1 when edge0 < x < edge1. This is useful in cases where a threshold function with a smooth transition is desired. Returns 0.0 if x ≤ edge0 and 1.0 if x ≥ edge1.
 */
export function smoothstep<T extends genType>(edge0: number, edge1: number, x: T): WidenGenType<T>;
export function smoothstep<T extends genType>(
  edge0: T | number,
  edge1: T | number,
  x: T
): WidenGenType<T> {
  if (isNumber(x)) {
    const t = clamp((x - (edge0 as number)) / ((edge1 as number)- (edge0 as number)), 0, 1);

    return (t * t * (3 - 2 * t)) as WidenGenType<T>;
  } else {
    if (isNumber(edge0)) {
      edge0 = genType[x.length](edge0) as Exclude<T, number>;
    }
    if (isNumber(edge1)) {
      edge1 = genType[x.length](edge1) as Exclude<T, number>;
    }

    return componentWise(smoothstep, edge0, edge1, x) as WidenGenType<T>;
  }
}
