import { describe, expect, it } from "vitest";
import { sign } from "./sign";
import { vec3 } from "./vec3";

describe('sign', () => {
  it('should extract the sign of the parameter', () => {
    expect(sign(-4)).toBe(-1);
    expect(sign(0)).toBe(0);
    expect(sign(4)).toBe(1);
  });

  it('should extract the sign of the parameter component-wise', () => {
    expect(sign(vec3(-4, 0, 4))).toEqual(vec3(-1, 0, 1));
  });
});