import { describe, expect, it } from "vitest"
import { mat3 } from "./mat3";
import { vec3 } from "./vec3";
import { mat2 } from "./mat2";

describe('mat3', () => {
  it('should accept 1 scalar', () => {
    expect(mat3(5)).toEqual([[5, 0, 0], [0, 5, 0], [0, 0, 5]]);
  });
  
  it('should accept 9 scalars', () => {
    expect(mat3(1, 2, 3, 4, 5, 6, 7, 8, 9));
  });
  
  it('should accept 3 column vectors', () => {
    expect(mat3(vec3(1, 2, 3), vec3(4, 5, 6), vec3(7, 8, 9))).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });

  it('should accept 1 matrix', () => {
    expect(mat3(mat2(5))).toEqual([[5, 0, 0], [0, 5, 0], [0, 0, 1]]);
  });
});