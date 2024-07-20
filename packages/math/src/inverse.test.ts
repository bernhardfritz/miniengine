import { describe, expect, it } from 'vitest';
import { mat4 } from './mat4';
import { vec4 } from './vec4';
import { inverse } from './inverse';
import { multiply } from './multiply';

describe('inverse', () => {
  it('should calculate the inverse of a matrix', () => {
    const m = mat4(
      vec4(2, 1, 3, 0),
      vec4(1, 2, 1, 0),
      vec4(3, 1, 2, 0),
      vec4(4, 5, 6, 1)
    );

    const inv = inverse(m);

    expect(multiply(m, inv)).toEqual(mat4(1));
  });
});
