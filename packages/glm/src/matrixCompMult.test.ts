import { describe, expect, it } from "vitest";
import { mat2 } from "./mat2";
import { vec2 } from "./vec2";
import { matrixCompMult } from "./matrixCompMult";

describe('matrixCompMult', () => {
  it('should perform a component-wise multiplication of two matrices', () => {
    const a = mat2(vec2(1, 2), vec2(3, 4));
    const b = mat2(vec2(5, 6), vec2(7, 8));

    const c = matrixCompMult(a, b);

    expect(c).toEqual(mat2(vec2(5, 12), vec2(21, 32)));
  });
});