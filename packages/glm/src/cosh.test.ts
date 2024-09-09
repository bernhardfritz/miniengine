import { describe, expect, it } from "vitest";
import { cosh } from "./cosh";
import { vec3 } from "./vec3";

describe('cosh', () => {
  it('should return the hyperbolic cosine of the parameter', () => {
    expect(cosh(0)).toBe(1);
  });

  it('should return the hyperbolic cosine of the parameter component-wise', () => {
    expect(cosh(vec3(0, 0, 0))).toEqual(vec3(1, 1, 1));
  });
});