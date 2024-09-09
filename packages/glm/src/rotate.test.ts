import { describe, expect, it } from "vitest"
import { mat4 } from "./mat4";
import { rotate } from "./rotate";
import { vec3 } from "./vec3";

describe('rotate', () => {
  it('should rotate around x', () => {
    const m = mat4(1);

    const r = rotate(m, Math.PI / 2, vec3(1, 0, 0));

    expect(r[0][0]).toBeCloseTo(1);
    expect(r[0][1]).toBeCloseTo(0);
    expect(r[0][2]).toBeCloseTo(0);
    expect(r[0][3]).toBeCloseTo(0);
    expect(r[1][0]).toBeCloseTo(0);
    expect(r[1][1]).toBeCloseTo(0);
    expect(r[1][2]).toBeCloseTo(1);
    expect(r[1][3]).toBeCloseTo(0);
    expect(r[2][0]).toBeCloseTo(0);
    expect(r[2][1]).toBeCloseTo(-1);
    expect(r[2][2]).toBeCloseTo(0);
    expect(r[2][3]).toBeCloseTo(0);
    expect(r[3][0]).toBeCloseTo(0);
    expect(r[3][1]).toBeCloseTo(0);
    expect(r[3][2]).toBeCloseTo(0);
    expect(r[3][3]).toBeCloseTo(1);
  });

  it('should rotate around y', () => {
    const m = mat4(1);

    const r = rotate(m, Math.PI / 2, vec3(0, 1, 0));

    expect(r[0][0]).toBeCloseTo(0);
    expect(r[0][1]).toBeCloseTo(0);
    expect(r[0][2]).toBeCloseTo(-1);
    expect(r[0][3]).toBeCloseTo(0);
    expect(r[1][0]).toBeCloseTo(0);
    expect(r[1][1]).toBeCloseTo(1);
    expect(r[1][2]).toBeCloseTo(0);
    expect(r[1][3]).toBeCloseTo(0);
    expect(r[2][0]).toBeCloseTo(1);
    expect(r[2][1]).toBeCloseTo(0);
    expect(r[2][2]).toBeCloseTo(0);
    expect(r[2][3]).toBeCloseTo(0);
    expect(r[3][0]).toBeCloseTo(0);
    expect(r[3][1]).toBeCloseTo(0);
    expect(r[3][2]).toBeCloseTo(0);
    expect(r[3][3]).toBeCloseTo(1);
  });

  it('should rotate around z', () => {
    const m = mat4(1);

    const r = rotate(m, Math.PI / 2, vec3(0, 0, 1));

    expect(r[0][0]).toBeCloseTo(0);
    expect(r[0][1]).toBeCloseTo(1);
    expect(r[0][2]).toBeCloseTo(0);
    expect(r[0][3]).toBeCloseTo(0);
    expect(r[1][0]).toBeCloseTo(-1);
    expect(r[1][1]).toBeCloseTo(0);
    expect(r[1][2]).toBeCloseTo(0);
    expect(r[1][3]).toBeCloseTo(0);
    expect(r[2][0]).toBeCloseTo(0);
    expect(r[2][1]).toBeCloseTo(0);
    expect(r[2][2]).toBeCloseTo(1);
    expect(r[2][3]).toBeCloseTo(0);
    expect(r[3][0]).toBeCloseTo(0);
    expect(r[3][1]).toBeCloseTo(0);
    expect(r[3][2]).toBeCloseTo(0);
    expect(r[3][3]).toBeCloseTo(1);
  });
})