import { describe, expect, it } from "vitest";
import { asin } from "./asin";
import { vec3 } from "./vec3";

describe('asin', () => {
  it('it should return the arcsine of the parameter', () => {
    expect(asin(-1)).toBe(-Math.PI / 2);
    expect(asin(0)).toBe(0);
    expect(asin(1)).toBe(Math.PI / 2);
  });

  it('it should return the arcsine of the parameter component-wise', () => {
    expect(asin(vec3(-1, 0, 1))).toEqual(vec3(-Math.PI / 2, 0, Math.PI / 2));
  });
});