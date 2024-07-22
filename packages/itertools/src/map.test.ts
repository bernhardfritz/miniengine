import { describe, expect, it } from "vitest";
import { map } from "./map"
import { range } from "./range";

describe('map', () => {
  it('should map', () => {
    const mapped = map((x) => x * x, range(10));

    expect([...mapped]).toEqual([0, 1, 4, 9, 16, 25, 36, 49, 64, 81]);
  });
});