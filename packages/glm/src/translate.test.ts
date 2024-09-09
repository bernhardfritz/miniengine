import { describe, expect, it } from 'vitest';
import { mat4 } from './mat4';
import { translate } from './translate';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

describe('translate', () => {
  it('should translate', () => {
    const m = mat4(1);

    const t = translate(m, vec3(1, 2, 3));

    expect(t).toEqual(
      mat4(
        vec4(1, 0, 0, 0),
        vec4(0, 1, 0, 0),
        vec4(0, 0, 1, 0),
        vec4(1, 2, 3, 1)
      )
    );
  });
});
