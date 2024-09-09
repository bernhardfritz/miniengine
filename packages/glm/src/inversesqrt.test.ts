import { describe, expect, it } from "vitest";
import { inversesqrt } from "./inversesqrt"
import { vec3 } from "./vec3";

describe('inversesqrt', () => {
  it('should return the inverse of the square root of the parameter', () => {
    expect(inversesqrt(0.15625)).toBeCloseTo(2.52982);
  });

  it('should return the inverse of the square root of the parameter component-wise', () => {
    const v = inversesqrt(vec3(0.15625, 0.15625, 0.15625));

    expect(v.x).toBeCloseTo(2.52982);
    expect(v.y).toBeCloseTo(2.52982);
    expect(v.z).toBeCloseTo(2.52982);
  });
})