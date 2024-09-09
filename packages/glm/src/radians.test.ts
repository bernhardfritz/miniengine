import { describe, expect, it } from "vitest";
import { radians } from "./radians";
import { vec3 } from "./vec3";

describe('radians', () => {
  it('should convert a quantity in degrees to radians', () => {
    expect(radians(0)).toBe(0);
    expect(radians(90)).toBe(Math.PI / 2);
    expect(radians(180)).toBe(Math.PI);
    expect(radians(270)).toBe(3 * Math.PI / 2);
    expect(radians(360)).toBe(2 * Math.PI);
  });

  it('should convert a quantity in degrees to radians component-wise', () => {
    expect(radians(vec3(90, 180, 270))).toEqual(vec3(Math.PI / 2, Math.PI, 3 * Math.PI / 2));
  });
});