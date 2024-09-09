import { describe, expect, it } from "vitest";
import { exp } from "./exp";
import { vec3 } from "./vec3";

describe('exp', () => {
  it('it should return the natural exponentiation of the parameter', () => {
    expect(exp(1)).toBeCloseTo(2.718);
  });

  it('it should return the natural exponentiation of the parameter component-wise', () => {
    expect(exp(vec3(1, 2, 3))).toEqual(vec3(expect.closeTo(2.718), expect.closeTo(7.389), expect.closeTo(20.086)));
  });
});