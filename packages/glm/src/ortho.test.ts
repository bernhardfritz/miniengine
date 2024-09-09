import { describe, expect, it } from 'vitest';
import { ortho } from './ortho';
import { mat4 } from './mat4';
import { vec4 } from './vec4';

describe('ortho', () => {
  it('should return a ortho matrix', () => {
    const left = 2;
    const right = 4;
    const bottom = 30;
    const top = 10;
    const zNear = 15;
    const zFar = 25;

    const m = ortho(left, right, bottom, top, zNear, zFar);

    expect(m).toEqual(
      mat4(
        vec4(1, 0, 0, 0),
        vec4(0, -0.1, 0, 0),
        vec4(0, 0, -0.2, 0),
        vec4(-3, 2, -4, 1)
      )
    );
  });
});
