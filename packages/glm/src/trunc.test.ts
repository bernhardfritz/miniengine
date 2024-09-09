import { describe, expect, it } from "vitest";
import { trunc } from "./trunc";
import { vec3 } from "./vec3";

describe('trunc', () => {
  it('should find the truncated value of the parameter', () => {
    expect(trunc(0.5)).toBe(0);
    expect(trunc(-0.5)).toBe(-0);
  });

  it('should find the truncated value of the parameter component-wise', () => {
    expect(trunc(vec3(1.4, 2.5, 3.6))).toEqual(vec3(1, 2, 3));
  });
});