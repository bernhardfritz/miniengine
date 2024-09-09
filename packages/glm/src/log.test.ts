import { describe, expect, it } from "vitest";
import { log } from "./log";
import { vec3 } from "./vec3";

describe('log', () => {
  it('should return the natural logarithm of the parameter', () => {
    expect(log(Math.E)).toBe(1);
  });

  it('should return the natural logarithm of the parameter component-wise', () => {
    expect(log(vec3(Math.E, Math.E, Math.E))).toEqual(vec3(1, 1, 1));
  });
});