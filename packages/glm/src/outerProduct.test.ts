import { describe, expect, it } from "vitest";
import { outerProduct } from "./outerProduct";
import { vec2 } from "./vec2";
import { mat2 } from "./mat2";

describe('outerProduct', () => {
  it('should calculate the outer product of a pair of vectors', () => {
    expect(outerProduct(vec2(1, 2), vec2(3, 4))).toEqual(mat2(vec2(3, 6), vec2(4, 8)));
  });
});