import { describe, expect, it } from 'vitest';
import { exp2 } from './exp2';
import { vec3 } from './vec3';

describe('exp2', () => {
  it('should return 2 raised to the power of the parameter', () => {
    expect(exp2(2)).toBe(4);
  });

  it('should return 2 raised to the power of the parameter component-wise', () => {
    expect(exp2(vec3(1, 2, 3))).toEqual(vec3(2, 4, 8));
  });
});
