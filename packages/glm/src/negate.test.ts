import { describe, expect, it } from "vitest";
import { negate } from "./negate";
import { vec3 } from "./vec3";
import { mat2 } from "./mat2";
import { vec2 } from "./vec2";

describe('negate', () => {
  it('should negate a scalar', () => {
    expect(negate(1)).toBe(-1);
  });

  it('should negate a vector', () => {
    expect(negate(vec3(1, 2, 3))).toEqual(vec3(-1, -2, -3));
  });

  it('should negate a matrix', () => {
    expect(negate(mat2(vec2(1, 2), vec2(3, 4)))).toEqual(mat2(vec2(-1, -2), vec2(-3, -4)));
  });
});