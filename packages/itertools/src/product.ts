/**
 * @param iterables The iterables to be used as factors of the cartesian product.
 * @param repeat An optional argument of type number to specify the desired amount of repetitions (defaults to 1).
 * @returns The cartesian product of input iterables.
 */
export function* product<T>(...args: [...iterables: Iterable<T>[]] | [...iterables: Iterable<T>[], repeat: number]): Generator<T[]> {
  const lastIndex = args.length - 1;
  const [iterables, repeat] = (
    typeof args[lastIndex] === 'number'
      ? [args.slice(undefined, lastIndex), args[lastIndex]]
      : [args, 1]
  ) as [Iterable<T>[], number];
  const pools = new Array(repeat)
    .fill(iterables.map((pool) => Array.from(pool)))
    .flat();
  let result: T[][] = [[]];
  for (const pool of pools) {
    const newResult: T[][] = [];
    for (const x of result) {
      for (const y of pool) {
        newResult.push([...x, y]);
      }
    }
    result = newResult;
  }
  for (const prod of result) {
    yield prod;
  }
}
