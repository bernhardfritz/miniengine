import { describe, expect, it } from "vitest";
import { normalize } from "./normalize";
import { vec3 } from "./vec3";

describe('normalize', () => {
  it('should calculate the unit vector in the same direction as the original vector', () => {
    expect(normalize(vec3(1, 1, 1))).toEqual(vec3(1 / Math.sqrt(3), 1 / Math.sqrt(3), 1 / Math.sqrt(3)));
  });
});