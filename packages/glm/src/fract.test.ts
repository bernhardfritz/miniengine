import { describe, expect, it } from "vitest";
import { fract } from "./fract";
import { vec3 } from "./vec3";

describe('fract', () => {
  it('should compute the fractional part of the argument', () => {
    expect(fract(1.23)).toBeCloseTo(0.23);
  });

  it('should compute the fractional part of the argument component-wise', () => {
    const v = fract(vec3(1.23, 4.56, 7.89));

    expect(v.x).toBeCloseTo(0.23);
    expect(v.y).toBeCloseTo(0.56);
    expect(v.z).toBeCloseTo(0.89);
  });
});