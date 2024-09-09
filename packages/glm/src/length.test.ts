import { describe, expect, it } from "vitest";
import { vec3 } from "./vec3";
import { length } from "./length";

describe('length', () => {
  it('should calculate the length of a vector', () => {
    expect(length(vec3(1, 1, 1))).toBeCloseTo(Math.sqrt(3));
  });
});