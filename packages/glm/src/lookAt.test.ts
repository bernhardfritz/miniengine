import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { lookAt } from './lookAt';

describe('lookAt', () => {
  it('should return a lookAt matrix', () => {
    const eye = vec3(0, 0, 0);
    const center = vec3(0, 0, -1);
    const up = vec3(0, 1, 0);

    const m = lookAt(eye, center, up);

    expect(m[0][0]).toBeCloseTo(1);
    expect(m[0][1]).toBeCloseTo(0);
    expect(m[0][2]).toBeCloseTo(0);
    expect(m[0][3]).toBeCloseTo(0);
    expect(m[1][0]).toBeCloseTo(0);
    expect(m[1][1]).toBeCloseTo(1);
    expect(m[1][2]).toBeCloseTo(0);
    expect(m[1][3]).toBeCloseTo(0);
    expect(m[2][0]).toBeCloseTo(0);
    expect(m[2][1]).toBeCloseTo(0);
    expect(m[2][2]).toBeCloseTo(1);
    expect(m[2][3]).toBeCloseTo(0);
    expect(m[3][0]).toBeCloseTo(0);
    expect(m[3][1]).toBeCloseTo(0);
    expect(m[3][2]).toBeCloseTo(0);
    expect(m[3][3]).toBeCloseTo(1);
  });
});
