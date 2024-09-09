import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { faceforward } from './faceforward';
import { negate } from './negate';

describe('faceforward', () => {
  it('should return a vector pointing in the same direction as another', () => {
    const N = vec3(1, 0, 0);
    const I = vec3(-1, 0, 0);
    const Nref = vec3(1, -1, 0);

    const F = faceforward(N, I, Nref);

    expect(F).toEqual(N);
  });

  it('should return a vector pointing in the same direction as another', () => {
    const N = vec3(1, 0, 0);
    const I = vec3(1, 0, 0);
    const Nref = vec3(1, -1, 0);

    const F = faceforward(N, I, Nref);

    expect(F).toEqual(negate(N));
  });
});
