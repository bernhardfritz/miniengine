import { describe, expect, it } from "vitest";
import { ceil } from "./ceil";
import { vec3 } from "./vec3";

describe('ceil', () => {
  it('should find the nearest integer that is greater than or equal to the parameter', () => {
    expect(ceil(0.5)).toBe(1);
  });

  it('should find the nearest integer that is greater than or equal to the parameter component-wise', () => {
    expect(ceil(vec3(1.1, 2.2, 3.3))).toEqual(vec3(2, 3, 4));
  });
})