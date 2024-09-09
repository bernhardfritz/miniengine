import { describe, expect, it } from "vitest";
import { sinh } from "./sinh";
import { vec3 } from "./vec3";

describe('sinh', () => {
  it('should return the hyperbolic sine of the parameter', () => {
    expect(sinh(0)).toBe(0);
  });

  it('should return the hyperbolic cosine of the parameter component-wise', () => {
    expect(sinh(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  });
});