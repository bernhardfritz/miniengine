import { describe, expect, it } from "vitest";
import { atan } from "./atan";
import { vec3 } from "./vec3";

describe('atan', () => {
  it('should return the arc-tangent of the parameters', () => {
    expect(atan(-1)).toBe(-Math.PI / 4);
    expect(atan(0)).toBe(0);
    expect(atan(1)).toBe(Math.PI / 4);
    expect(atan(5, 5)).toBe(Math.PI / 4);
    expect(atan(10, 10)).toBe(Math.PI / 4);
    expect(atan(10, 0)).toBe(Math.PI / 2);
  });

  it('should return the arc-tangent of the parameters component-wise', () => {
    expect(atan(vec3(-1, 0, 1))).toEqual(vec3(-Math.PI / 4, 0, Math.PI / 4));
    expect(atan(vec3(5, 10, 10), vec3(5, 10, 0))).toEqual(vec3(Math.PI / 4, Math.PI / 4, Math.PI / 2));
  });
});