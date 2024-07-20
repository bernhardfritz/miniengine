/**
 * @param iterable The iterable to be reversed.
 * @returns A reverse iterator.
 */
export function* reversed<T>(iterable: Iterable<T>): Generator<T> {
  const items = Array.from(iterable).reverse();
  for (const item of items) {
    yield item;
  }
}