import { describe, expect, it } from 'vitest';
import { vec4 } from './vec4';
import { mat4 } from './mat4';
import { multiply } from './multiply';
import { vec3 } from './vec3';

describe('multiply', () => {
  it('should multiply scalar and scalar', () => {
    const a = 2;
    const b = 3;

    const c = multiply(a, b);

    expect(c).toBe(6);
  });

  it('should multiply scalar and vector', () => {
    const a = 2;
    const b = vec3(1, 2, 3);

    const c = multiply(a, b);

    expect(c).toEqual(vec3(2, 4, 6));
  });

  it('should multiply scalar and matrix', () => {
    const a = 2;
    const b = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );

    const c = multiply(a, b);

    expect(c).toEqual(
      mat4(
        vec4(2, 4, 6, 8),
        vec4(10, 12, 14, 16),
        vec4(18, 20, 22, 24),
        vec4(26, 28, 30, 32)
      )
    );
  });

  it('should multiply vector and scalar', () => {
    const a = vec3(1, 2, 3);
    const b = 2;

    const c = multiply(a, b);

    expect(c).toEqual(vec3(2, 4, 6));
  });

  it('should multiply vector and vector', () => {
    const a = vec3(1, 2, 3);
    const b = vec3(4, 5, 6);

    const c = multiply(a, b);

    expect(c).toEqual(vec3(4, 10, 18));
  });

  it('should multiply vector and matrix', () => {
    const a = vec4(1, 2, 3, 4);
    const b = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );

    const c = multiply(a, b);

    expect(c).toEqual(vec4(30, 70, 110, 150));
  });

  it('should multiply matrix and scalar', () => {
    const a = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );
    const b = 2;

    const c = multiply(a, b);

    expect(c).toEqual(
      mat4(
        vec4(2, 4, 6, 8),
        vec4(10, 12, 14, 16),
        vec4(18, 20, 22, 24),
        vec4(26, 28, 30, 32)
      )
    );
  });

  it('should multiply matrix and vector', () => {
    const a = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );
    const b = vec4(1, 2, 3, 4);

    const c = multiply(a, b);

    expect(c).toEqual(vec4(90, 100, 110, 120));
  });

  it('should multiply matrix and matrix', () => {
    const a = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );
    const b = mat4(
      vec4(17, 18, 19, 20),
      vec4(21, 22, 23, 24),
      vec4(25, 26, 27, 28),
      vec4(29, 30, 31, 32)
    );

    const c = multiply(a, b);

    expect(c).toEqual(
      mat4(
        vec4(538, 612, 686, 760),
        vec4(650, 740, 830, 920),
        vec4(762, 868, 974, 1080),
        vec4(874, 996, 1118, 1240)
      )
    );
  });
});
