import { describe, expect, it } from "vitest";
import { mat2 } from "./mat2";
import { transpose } from "./transpose";
import { vec2 } from "./vec2";
import { mat3 } from "./mat3";
import { vec3 } from "./vec3";
import { mat4 } from "./mat4";
import { vec4 } from "./vec4";

describe('transpose', () => {
  it('should transpose mat2 matrices', () => {
    const m = mat2(vec2(1, 2), vec2(3, 4));

    const t = transpose(m);

    expect(t).toEqual(mat2(vec2(1, 3), vec2(2, 4)));
  });

  it('should transpose mat3 matrices', () => {
    const m = mat3(vec3(1, 2, 3), vec3(4, 5, 6), vec3(7, 8, 9));

    const t = transpose(m);

    expect(t).toEqual(mat3(vec3(1, 4, 7), vec3(2, 5, 8), vec3(3, 6, 9)));
  });

  it('should transpose mat4 matrices', () => {
    const m = mat4(vec4(1, 2, 3, 4), vec4(5, 6, 7, 8), vec4(9, 10, 11, 12), vec4(13, 14, 15, 16));

    const t = transpose(m);

    expect(t).toEqual(mat4(vec4(1, 5, 9, 13), vec4(2, 6, 10, 14), vec4(3, 7, 11, 15), vec4(4, 8, 12, 16)));
  });
});