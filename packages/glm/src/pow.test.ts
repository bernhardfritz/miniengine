import { describe, expect, it } from "vitest";
import { pow } from "./pow";
import { vec3 } from "./vec3";

describe('pow', () => {
  it('should return the value of the first parameter raised to the power of the second', () => {
    expect(pow(2, 3)).toBe(8);
  });

  it('should return the value of the first parameter raised to the power of the second component-wise', () => {
    expect(pow(vec3(2, 2, 2), vec3(1, 2, 3))).toEqual(vec3(2, 4, 8));
  });
});