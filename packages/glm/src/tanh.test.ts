import { describe, expect, it } from "vitest";
import { tanh } from "./tanh";
import { vec3 } from "./vec3";

describe('tanh', () => {
  it('should return the hyperbolic tangent of the parameter', () => {
    expect(tanh(-3)).toBeCloseTo(-1);
    expect(tanh(0)).toBe(0);
    expect(tanh(3)).toBeCloseTo(1);
  });

  it('should return the hyperbolic tangent of the parameter component-wise', () => {
    expect(tanh(vec3(-3, 0, 3))).toEqual(vec3(expect.closeTo(-1), 0, expect.closeTo(1)));
  });
});