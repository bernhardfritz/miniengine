import { describe, expect, it } from "vitest";
import { isNumber } from "./isNumber";

describe('isNumber', () => {
  it('should return true if it is a number', () => {
    expect(isNumber(42)).toBe(true);
  });

  it('should return false if it is not a number', () => {
    expect(isNumber('foo')).toBe(false);
  })
});