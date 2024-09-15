/**
 * Generates a range of numbers.
 * @param stop The exclusive number to stop at.
 * @returns An iterator of numbers with n between 0 (inclusive) and {@link stop} (exclusive) using a step size of 1.
 */
export function range(stop: number): Generator<number>;
/**
 * Generates a range of numbers.
 * @param start The inclusive number to start from.
 * @param stop The exclusive number to stop at.
 * @param step The increment.
 * @returns An iterator of numbers with n between {@link start} (inclusive) and {@link stop} (exclusive) using a increment of {@link step}.
 */
export function range(start: number, stop: number, step?: number): Generator<number>;
export function* range(start: number, stop?: number, step = 1): Generator<number> {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  for (let i = start; step >= 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}