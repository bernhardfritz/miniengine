import { describe, expect, it } from "vitest"
import { mat2 } from "./mat2";
import { vec2 } from "./vec2";

describe('mat2', () => {
  it('should accept 1 scalar', () => {
    expect(mat2(5)).toEqual([[5, 0], [0, 5]]);
  });
  
  it('should accept 4 scalars', () => {
    expect(mat2(1, 2, 3, 4)).toEqual([[1, 2], [3, 4]]);
  });
  
  it('should accept 2 column vectors', () => {
    expect(mat2(vec2(1, 2), vec2(3, 4))).toEqual([[1, 2], [3, 4]]);
  });

  it('should accept 1 matrix', () => {
    expect(mat2(mat2(5))).toEqual([[5, 0], [0, 5]]);
  });
});