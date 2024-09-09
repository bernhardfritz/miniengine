import { describe, expect, it } from "vitest";
import { sqrt } from "./sqrt";
import { vec3 } from "./vec3";

describe('sqrt', () => {
  it('should return the square root of the parameter', () => {
    expect(sqrt(4)).toBe(2);
  });

  it('should return the square root of the parameter component-wise', () => {
    expect(sqrt(vec3(4, 9, 16))).toEqual(vec3(2, 3, 4));
  });
});