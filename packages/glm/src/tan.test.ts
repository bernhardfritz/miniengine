import { describe, expect, it } from "vitest"
import { tan } from "./tan";
import { vec3 } from "./vec3";

describe('tan', () => {
  it('should return the tangent of the parameter', () => {
    expect(tan(0)).toBe(0);
    expect(tan(Math.PI / 4)).toBeCloseTo(1);
    expect(tan(Math.PI)).toBeCloseTo(0);
    expect(tan(2 * Math.PI - Math.PI / 4)).toBeCloseTo(-1);
    expect(tan(2 * Math.PI)).toBeCloseTo(0);
  });

  it('should return the tangent of the parameter component-wise', () => {
    expect(tan(vec3(Math.PI / 4, Math.PI, 2 * Math.PI - Math.PI / 4))).toEqual(vec3(expect.closeTo(1), expect.closeTo(0), expect.closeTo(-1)));
  });
});