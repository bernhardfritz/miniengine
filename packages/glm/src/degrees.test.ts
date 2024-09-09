import { describe, expect, it } from "vitest";
import { degrees } from "./degrees";
import { vec3 } from "./vec3";

describe('degrees', () => {
  it('should convert a quantity in radians to degrees', () => {
    expect(degrees(0)).toBe(0);
    expect(degrees(Math.PI / 2)).toBe(90);
    expect(degrees(Math.PI)).toBe(180);
    expect(degrees(3 * Math.PI / 2)).toBe(270);
    expect(degrees(2 * Math.PI)).toBe(360);
  });

  it('should convert a quantity in radians to degrees component-wise', () => {
    expect(degrees(vec3(Math.PI / 2, Math.PI, 3 * Math.PI / 2))).toEqual(vec3(90, 180, 270));
  });
});