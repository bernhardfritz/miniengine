import { describe, expect, it } from 'vitest';
import { mat4 } from './mat4';
import { scale } from './scale';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

describe('scale', () => {
  it('should scale', () => {
    const m = mat4(1);

    const s = scale(m, vec3(2, 3, 4));

    expect(s).toEqual(
      mat4(
        vec4(2, 0, 0, 0),
        vec4(0, 3, 0, 0),
        vec4(0, 0, 4, 0),
        vec4(0, 0, 0, 1)
      )
    );
  });
});
