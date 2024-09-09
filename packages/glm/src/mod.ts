import { divide } from "./divide";
import { floor } from "./floor";
import { WidenGenType, genType } from "./genType";
import { multiply } from "./multiply";
import { subtract } from "./subtract";

/**
 * Compute value of one parameter modulo another
 * @param x Specify the value to evaluate.
 * @param y Specify the value by which to perform the modulo.
 * @returns The value of x modulo y. This is computed as x - y * {@link floor}(x/y).
 */
export function mod<T extends genType>(x: T, y: T | number): WidenGenType<T> {
  return subtract(x, multiply(y, floor(divide(x, y)))) as WidenGenType<T>;
}