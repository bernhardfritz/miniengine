import { describe, expect, it } from "vitest";
import { clamp } from "./clamp";
import { vec3 } from "./vec3";

describe('clamp', () => {
  it('should constrain a value to lie between two further values', () => {
    expect(clamp(2, 0, 1)).toBe(1);
  });

  it('should constrain a value to lie between two further values component-wise', () => {
    expect(clamp(vec3(1, 2, 3), vec3(0, 0, 0), vec3(1, 1, 1))).toEqual(vec3(1, 1, 1));
    expect(clamp(vec3(1, 2, 3), 0, 1)).toEqual(vec3(1, 1, 1));
  });
});