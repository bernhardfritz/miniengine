import { describe, expect, it } from "vitest"
import { reduce } from "./reduce";

describe('reduce', () => {
  it('should throw if iterable is empty and initial value is not provided', () => {
    const a: number[] = [];

    expect(() => reduce((accumulator, updateValue) => accumulator + updateValue, a)).toThrow('Reduce of empty iterable with no initial value');
  });

  it('should not throw if iterable is empty but initial value is provided', () => {
    const a: number[] = [];

    const b = reduce((accumulator, updateValue) => accumulator + updateValue, a, 0);

    expect(b).toBe(0);
  })

  it('should use first value as initial value if not specified', () => {
    const a: number[] = [1, 2, 3];

    const b = reduce((accumulator, updateValue) => accumulator + updateValue, a);

    expect(b).toBe(6);
  });

  it('should use initial value if specified', () => {
    const a: number[] = [1, 2, 3];

    const b = reduce((accumulator, updateValue) => accumulator + updateValue, a, 4);

    expect(b).toBe(10);
  });
});