import { describe, expect, it } from "vitest";
import { atanh } from "./atanh";
import { vec3 } from "./vec3";

describe('atanh', () => {
  it('should return the arc hyperbolic tangent of the parameter', () => {
    expect(atanh(0)).toBe(0);
  });
  
  it('should return the arc hyperbolic tangent of the parameter component-wise', () => {
    expect(atanh(vec3(0, 0, 0))).toEqual(vec3(0, 0, 0));
  });
});