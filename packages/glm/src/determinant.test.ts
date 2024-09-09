import { describe, expect, it } from "vitest";
import { mat2 } from "./mat2";
import { vec2 } from "./vec2";
import { determinant } from "./determinant";
import { vec3 } from "./vec3";
import { mat3 } from "./mat3";
import { mat4 } from "./mat4";
import { vec4 } from "./vec4";

describe('determinant', () => {
  it('should calculate the determinant of a two-dimensional matrix', () => {
    const m = mat2(vec2(3, 1), vec2(7, -4));

    const d = determinant(m);

    expect(d).toBe(-19);
  });

  it('should calculate the determinant of a three-dimensional matrix', () => {
    const m = mat3(vec3(-2, 2, -3), vec3(-1, 1, 3), vec3(2, 4, -1));

    const d = determinant(m);

    expect(d).toBe(54);
  });

  it('should calculate the determinant of a four-dimensional matrix', () => {
    const m = mat4(vec4(4, 8, 4, 4), vec4(3, 7, 3, 3), vec4(4, 5, 8, 4), vec4(2, 3, 5, 3));

    const d = determinant(m);

    expect(d).toBe(16);
  });
});