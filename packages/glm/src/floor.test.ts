import { describe, expect, it } from "vitest";
import { floor } from "./floor";
import { vec3 } from "./vec3";

describe('floor', () => {
  it('should find the nearest integer less than or equal to the parameter', () => {
    expect(floor(0.5)).toBe(0);
    expect(floor(-0.5)).toBe(-1);
  });

  it('should find the nearest integer less than or equal to the parameter component-wise', () => {
    expect(floor(vec3(1.4, 2.5, 3.6))).toEqual(vec3(1, 2, 3));
  });
});