import { describe, expect, it } from "vitest";
import { range } from "./range";

describe('range', () => {
  it('should work with one parameter', () => {
    expect(Array.from(range(10))).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should work with two parameters', () => {
    expect(Array.from(range(1, 4))).toEqual([1, 2, 3]);
  })

  it('should work with three parameters', () => {
    expect(Array.from(range(0, 10, 2))).toEqual([0, 2, 4, 6, 8]);
  });

  it('should work with negative steps', () => {
    expect(Array.from(range(3, 0, -1))).toEqual([3, 2, 1]);
  });
})