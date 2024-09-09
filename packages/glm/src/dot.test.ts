import { describe, expect, it } from "vitest";
import { vec3 } from "./vec3";
import { dot } from "./dot";

describe('dot', () => {
  it('should calculate the dot product of two vectors', () => {
    const a = vec3(1, 3, -5);
    const b = vec3(4, -2, -1);

    const c = dot(a, b);

    expect(c).toBe(3);
  });
});