/**
 * Maps one iterable to another.
 * @param fn The function used to apply to every item of {@link iterable}.
 * @param iterable The iterable to be mapped.
 * @returns An iterator that applies {@link fn} to every item of {@link iterable}, yielding the results.
 */
export function* map<T, U>(
  fn: (t: T) => U,
  iterable: Iterable<T>
): Generator<U> {
  for (const t of iterable) {
    yield fn(t);
  }
}
