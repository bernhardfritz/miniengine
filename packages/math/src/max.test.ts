import { describe, expect, it } from 'vitest';
import { max } from './max';
import { vec3 } from './vec3';

describe('max', () => {
  it('should return the larger number', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the larger number component-wise', () => {
    expect(max(vec3(1, 2, 3), vec3(3, 2, 1))).toEqual(vec3(3, 2, 3));
  });
});
