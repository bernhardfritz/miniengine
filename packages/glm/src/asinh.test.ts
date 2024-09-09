import { describe, expect, it } from "vitest";
import { asinh } from "./asinh";
import { vec3 } from "./vec3";

describe('asinh', () => {
  it('should return the arc hyperbolic sine of the parameter', () => {
    expect(asinh(0)).toBe(0);
  });

  it('should return the arc hyperbolic sine of the parameter component-wise', () => {
    expect(asinh(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  });
});