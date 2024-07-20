import { describe, expect, it } from "vitest";
import { abs } from "./abs";
import { vec3 } from "./vec3";

describe('abs', () => {
  it('should return the absolute value of the argument', () => {
    expect(abs(42)).toBe(42);
    expect(abs(-42)).toBe(42);
  });

  it('should return the absolute value of the argument component-wise', () => {
    expect(abs(vec3(-1, -2, -3))).toEqual(vec3(1, 2, 3));
  });
});