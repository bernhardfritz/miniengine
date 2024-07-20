import { describe, expect, it } from 'vitest';
import { enumerate } from './enumerate';

describe('enumerate', () => {
  it('should enumerate', () => {
    const enumerated = enumerate('Hello, World!');

    expect([...enumerated]).toEqual([
      [0, 'H'],
      [1, 'e'],
      [2, 'l'],
      [3, 'l'],
      [4, 'o'],
      [5, ','],
      [6, ' '],
      [7, 'W'],
      [8, 'o'],
      [9, 'r'],
      [10, 'l'],
      [11, 'd'],
      [12, '!'],
    ]);
  });
});
