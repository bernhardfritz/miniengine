import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { mat4 } from './mat4';
import { vec4 } from './vec4';
import { subtract } from './subtract';

describe('subtract', () => {
  it('should subtract scalar and scalar', () => {
    const a = 3;
    const b = 2;

    const c = subtract(a, b);

    expect(c).toBe(1);
  });

  it('should subtract scalar and vector', () => {
    const a = 4;
    const b = vec3(1, 2, 3);

    const c = subtract(a, b);

    expect(c).toEqual(vec3(3, 2, 1));
  });

  it('should subtract scalar and matrix', () => {
    const a = 17;
    const b = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );

    const c = subtract(a, b);

    expect(c).toEqual(
      mat4(
        vec4(16, 15, 14, 13),
        vec4(12, 11, 10, 9),
        vec4(8, 7, 6, 5),
        vec4(4, 3, 2, 1)
      )
    );
  });

  it('should subtract vector and scalar', () => {
    const a = vec3(2, 3, 4);
    const b = 1;

    const c = subtract(a, b);

    expect(c).toEqual(vec3(1, 2, 3));
  });

  it('should subtract vector and vector', () => {
    const a = vec3(5, 7, 9);
    const b = vec3(4, 5, 6);

    const c = subtract(a, b);

    expect(c).toEqual(vec3(1, 2, 3));
  });

  it('should subtract matrix and scalar', () => {
    const a = mat4(
      vec4(2, 3, 4, 5),
      vec4(6, 7, 8, 9),
      vec4(10, 11, 12, 13),
      vec4(14, 15, 16, 17)
    );
    const b = 1;

    const c = subtract(a, b);

    expect(c).toEqual(
      mat4(
        vec4(1, 2, 3, 4),
        vec4(5, 6, 7, 8),
        vec4(9, 10, 11, 12),
        vec4(13, 14, 15, 16)
      )
    );
  });

  it('should subtract matrix and matrix', () => {
    const a = mat4(
      vec4(18, 20, 22, 24),
      vec4(26, 28, 30, 32),
      vec4(34, 36, 38, 40),
      vec4(42, 44, 46, 48)
    );
    const b = mat4(
      vec4(17, 18, 19, 20),
      vec4(21, 22, 23, 24),
      vec4(25, 26, 27, 28),
      vec4(29, 30, 31, 32)
    );

    const c = subtract(a, b);

    expect(c).toEqual(
      mat4(
        vec4(1, 2, 3, 4),
        vec4(5, 6, 7, 8),
        vec4(9, 10, 11, 12),
        vec4(13, 14, 15, 16)
      )
    );
  });
});
