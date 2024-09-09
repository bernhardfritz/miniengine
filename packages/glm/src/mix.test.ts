import { describe, expect, it } from "vitest";
import { mix } from "./mix";
import { vec3 } from "./vec3";

describe('mix', () => {
  it('should linearly interpolate between two values', () => {
    expect(mix(0, 100, 0.42)).toBe(42);
  });

  it('should linearly interpolate between two values', () => {
    expect(mix(vec3(0, 0, 0), vec3(1, 10, 100), 0.42)).toEqual(vec3(0.42, 4.2, 42));
  });
});