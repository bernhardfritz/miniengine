import { describe, expect, it } from "vitest"
import { mat4 } from "./mat4"
import { vec4 } from "./vec4"
import { mat3 } from "./mat3";

describe('mat4', () => {
  it('should accept 1 scalar', () => {
    expect(mat4(5)).toEqual([[5, 0, 0, 0], [0, 5, 0, 0], [0, 0, 5, 0], [0, 0, 0, 5]]);
  });
  
  it('should accept 16 scalars', () => {
    expect(mat4(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
  });
  
  it('should accept 4 column vectors', () => {
    expect(mat4(vec4(1, 2, 3, 4), vec4(5, 6, 7, 8), vec4(9, 10, 11, 12), vec4(13, 14, 15, 16))).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
  });

  it('should accept 1 matrix', () => {
    expect(mat4(mat3(5))).toEqual([[5, 0, 0, 0], [0, 5, 0, 0], [0, 0, 5, 0], [0, 0, 0, 1]]);
  });
});