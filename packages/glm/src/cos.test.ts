import { describe, expect, it } from "vitest";
import { cos } from "./cos";
import { vec3 } from "./vec3";

describe('cos', () => {
  it('should return the cosine of the parameter', () => {
    expect(cos(0)).toBe(1);
    expect(cos(Math.PI / 2)).toBeCloseTo(0);
    expect(cos(Math.PI)).toBe(-1);
    expect(cos(3 * Math.PI / 2)).toBeCloseTo(0);
    expect(cos(2 * Math.PI)).toBe(1);
  });

  it('should return the cosine of the parameter component-wise', () => {
    expect(cos(vec3(Math.PI / 2, Math.PI, 2 * Math.PI))).toEqual(vec3(expect.closeTo(0), -1, 1));
  });
});