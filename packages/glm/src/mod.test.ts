import { describe, expect, it } from "vitest";
import { mod } from "./mod";
import { vec3 } from "./vec3";

describe('mod', () => {
  it('should compute value of one parameter modulo another', () => {
    expect(mod(1, 2)).toBe(1);
  });

  it('should compute value of one parameter modulo another component-wise', () => {
    expect(mod(vec3(1, 2, 3), vec3(2, 2, 2))).toEqual(vec3(1, 0, 1));
  });
});