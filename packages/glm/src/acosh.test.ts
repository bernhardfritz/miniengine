import { describe, expect, it } from "vitest";
import { acosh } from "./acosh";
import { vec3 } from "./vec3";

describe('acosh', () => {
  it('should return the arc hyperbolic cosine of the parameter', () => {
    expect(acosh(1)).toBe(0);
  });

  it('should return the arc hyperbolic cosine of the parameter component-wise', () => {
    expect(acosh(vec3(1, 1, 1))).toEqual(vec3(0, 0, 0));
  });
})