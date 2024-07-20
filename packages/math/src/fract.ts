import { WidenGenType, genType } from './genType';
import { subtract } from './subtract';
import { floor } from './floor';

/**
 * Compute the fractional part of the argument.
 * @param x Specify the value to evaluate.
 * @returns The fractional part of x. This is calculated as x - {@link floor}(x).
 */
export function fract<T extends genType>(x: T): WidenGenType<T> {
  return subtract(x, floor(x)) as WidenGenType<T>;
}
