import { describe, expect, it } from 'vitest';
import { vec2 } from './vec2';
import { distance } from './distance';
import { sqrt } from './sqrt';
import { vec3 } from './vec3';

describe('distance', () => {
  it.each([
    { a: vec2(1, 1), b: vec2(2, 2), expected: sqrt(2) },
    { a: vec3(1, 1, 1), b: vec3(2, 2, 2), expected: sqrt(3) },
  ])(
    'should calculate the distance between two points',
    ({ a, b, expected }) => {
      const c = distance(a, b);

      expect(c).toBe(expected);
    }
  );
});
