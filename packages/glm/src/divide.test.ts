import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { mat4 } from './mat4';
import { vec4 } from './vec4';
import { divide } from './divide';

describe('divide', () => {
  it('should divide scalar and scalar', () => {
    const a = 6;
    const b = 3;

    const c = divide(a, b);

    expect(c).toBe(2);
  });

  it('should divide scalar and vector', () => {
    const a = 12;
    const b = vec3(2, 3, 4);

    const c = divide(a, b);

    expect(c).toEqual(vec3(6, 4, 3));
  });

  it('should divide scalar and matrix', () => {
    const a = 720720;
    const b = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );

    const c = divide(a, b);

    expect(c).toEqual(
      mat4(
        vec4(720720, 360360, 240240, 180180),
        vec4(144144, 120120, 102960, 90090),
        vec4(80080, 72072, 65520, 60060),
        vec4(55440, 51480, 48048, 45045)
      )
    );
  });

  it('should divide vector and scalar', () => {
    const a = vec3(2, 4, 6);
    const b = 2;

    const c = divide(a, b);

    expect(c).toEqual(vec3(1, 2, 3));
  });

  it('should divide vector and vector', () => {
    const a = vec3(4, 10, 18);
    const b = vec3(4, 5, 6);

    const c = divide(a, b);

    expect(c).toEqual(vec3(1, 2, 3));
  });

  it('should divide matrix and scalar', () => {
    const a = mat4(
      vec4(2, 4, 6, 8),
      vec4(10, 12, 14, 16),
      vec4(18, 20, 22, 24),
      vec4(26, 28, 30, 32)
    );
    const b = 2;

    const c = divide(a, b);

    expect(c).toEqual(
      mat4(
        vec4(1, 2, 3, 4),
        vec4(5, 6, 7, 8),
        vec4(9, 10, 11, 12),
        vec4(13, 14, 15, 16)
      )
    );
  });

  it('should divide matrix and matrix', () => {
    const a = mat4(
      vec4(2, 4, 6, 8),
      vec4(10, 12, 14, 16),
      vec4(18, 20, 22, 24),
      vec4(26, 28, 30, 32)
    );
    const b = mat4(
      vec4(1, 2, 3, 4),
      vec4(5, 6, 7, 8),
      vec4(9, 10, 11, 12),
      vec4(13, 14, 15, 16)
    );

    const c = divide(a, b);

    expect(c).toEqual(
      mat4(
        vec4(2, 2, 2, 2),
        vec4(2, 2, 2, 2),
        vec4(2, 2, 2, 2),
        vec4(2, 2, 2, 2)
      )
    );
  });
});
