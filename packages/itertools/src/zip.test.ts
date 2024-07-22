import { describe, expect, it } from 'vitest';
import { zip } from './zip';

describe('zip', () => {
  it('should zip', () => {
    const x = [1, 2, 3];
    const y = [4, 5, 6];

    const zipped = zip(x, y);

    expect([...zipped]).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
