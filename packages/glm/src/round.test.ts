import { describe, expect, it } from "vitest";
import { round } from "./round";
import { vec3 } from "./vec3";

describe('round', () => {
  it('should find the nearest integer to the parameter', () => {
    expect(round(0.5)).toBe(1);
    expect(round(-0.5)).toBe(-0);
  });

  it('should find the nearest integer to the parameter component-wise', () => {
    expect(round(vec3(1.4, 2.5, 3.6))).toEqual(vec3(1, 3, 4));
  });
});