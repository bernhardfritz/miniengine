import { describe, expect, it } from "vitest"
import { log2 } from "./log2";
import { vec3 } from "./vec3";

describe('log2', () => {
  it('should return the base 2 logarithm of the parameter', () => {
    expect(log2(2)).toBe(1);
  });

  it('should return the base 2 logarithm of the parameter', () => {
    expect(log2(vec3(2, 2, 2))).toEqual(vec3(1, 1, 1));
  });
});