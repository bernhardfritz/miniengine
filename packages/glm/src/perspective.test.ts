import { describe, expect, it } from "vitest";
import { perspective } from "./perspective";

describe('perspective', () => {
  it('should return a perspective matrix', () => {
    const fovy = 2;
    const aspect = 4;
    const zNear = 10;
    const zFar = 30;

    const m = perspective(fovy, aspect, zNear, zFar);

    expect(m[0][0]).toBeCloseTo(0.16052315398358266);
    expect(m[0][1]).toBeCloseTo(0);
    expect(m[0][2]).toBeCloseTo(0);
    expect(m[0][3]).toBeCloseTo(0);
    expect(m[1][0]).toBeCloseTo(0);
    expect(m[1][1]).toBeCloseTo(0.6420926159343306);
    expect(m[1][2]).toBeCloseTo(0);
    expect(m[1][3]).toBeCloseTo(0);
    expect(m[2][0]).toBeCloseTo(0);
    expect(m[2][1]).toBeCloseTo(0);
    expect(m[2][2]).toBeCloseTo(-2);
    expect(m[2][3]).toBeCloseTo(-1);
    expect(m[3][0]).toBeCloseTo(0);
    expect(m[3][1]).toBeCloseTo(0);
    expect(m[3][2]).toBeCloseTo(-30);
    expect(m[3][3]).toBeCloseTo(0);
  });
})