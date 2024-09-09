import { describe, expect, it } from "vitest";
import { sin } from "./sin";
import { vec3 } from "./vec3";

describe('sin', () => {
  it('should return the sine of the parameter', () => {
    expect(sin(0)).toBe(0);
    expect(sin(Math.PI / 2)).toBe(1);
    expect(sin(Math.PI)).toBeCloseTo(0);
    expect(sin(3 * Math.PI / 2)).toBe(-1);
    expect(sin(2 * Math.PI)).toBeCloseTo(0);
  });

  it('should return the sine of the parameter component-wise', () => {
    expect(sin(vec3(Math.PI / 2, Math.PI, 2 * Math.PI))).toEqual(vec3(1, expect.closeTo(0), expect.closeTo(0)));
  });
});