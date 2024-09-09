import { describe, expect, it } from "vitest"
import { acos } from "./acos";
import { vec3 } from "./vec3";

describe('acos', () => {
  it('should return the arccosine of the parameter', () => {
    expect(acos(-1)).toBe(Math.PI);
    expect(acos(0)).toBe(Math.PI / 2);
    expect(acos(1)).toBe(0);
  });

  it('should return the arccosine of the parameter component-wise', () => {
    expect(acos(vec3(0, 1, -1))).toEqual(vec3(Math.PI / 2, 0, Math.PI));
  })
})