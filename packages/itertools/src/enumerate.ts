/**
 * Adds a counter to an iterable.
 * @param iterable The iterable to be enumerated.
 * @param start The number to start counting from (defaults to 0).
 * @returns An iterator of tuples containing a count (from {@link start} which defaults to 0) and the values obtained from iterating over {@link iterable}.
 */
export function* enumerate<T>(
  iterable: Iterable<T>,
  start = 0
): Generator<[number, T]> {
  let n = start;
  for (const elem of iterable) {
    yield [n, elem];
    n += 1;
  }
}
