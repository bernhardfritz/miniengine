/**
 * Reduces an iterable to a single value.
 * @param fn The function of two arguments to cumulatively apply to the items of {@link iterable}, from left to right, so as to reduce the iterable to a single value. For example, reduce((x, y) => x + y, [1, 2, 3, 4, 5]) calculates ((((1 + 2) + 3) + 4) + 5).
 * @param iterable The iterable to be reduced.
 * @param initializer If the optional {@link initializer} is present, it is placed before the items of the iterable in the calculation, and serves as a default when the {@link iterable} is empty. If {@link initializer} is not given and {@link iterable} contains only one item, the first item is returned.
 * @returns A single value the {@link iterable} was reduced to.
 */
export function reduce<T, U = T>(fn: (accumulator: U, updateValue: T) => U, iterable: Iterable<T>, initializer?: U): U {
  const it = iterable[Symbol.iterator]();
  let result;
  if (initializer === undefined) {
    let tmp = it.next();
    if (tmp.done) {
      throw new TypeError('Reduce of empty iterable with no initial value');
    }
    result = tmp;
  } else {
    result = { done: false, value: initializer } as IteratorYieldResult<U>;
  }
  let value = result.value as U;
  for (let r = it.next(); !r.done; r = it.next()) {
    value = fn(value, r.value);
  }
  return value;
}
