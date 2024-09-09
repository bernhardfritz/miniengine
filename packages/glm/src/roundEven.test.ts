import { describe, expect, it } from "vitest";
import { roundEven } from "./roundEven";
import { vec3 } from "./vec3";

describe('roundEven', () => {
  it('should find the nearest even integer to the parameter', () => {
    expect(roundEven(0.5)).toBe(0);
    expect(roundEven(-0.5)).toBe(0);
  });

  it('should find the nearest even integer to the parameter component-wise', () => {
    expect(roundEven(vec3(1.4, 2.5, 3.6))).toEqual(vec3(2, 2, 4));
  });
});