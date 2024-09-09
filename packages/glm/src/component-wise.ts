import { map, zip } from "@miniengine/itertools";
import { genType } from "./genType";

export function componentWise<T extends Exclude<genType, number>>(
  fn: (...args: number[]) => number,
  ...components: T[]
): T {
  return genType[components[0].length](
    ...Array.from(map((tuple) => fn(...tuple), zip(...components) as Generator<number[]>))
  ) as T;
}