import { describe, expect, it } from "vitest";
import { vec3 } from "./vec3";
import { cross } from "./cross";

describe('cross', () => {
  it('should calculate the cross product of two vectors', () => {
    const a = vec3(1, 0, 0);
    const b = vec3(0, 1, 0);

    const c = cross(a, b);
    
    expect(c).toEqual(vec3(0, 0, 1));
  });
});