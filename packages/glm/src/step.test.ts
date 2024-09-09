import { describe, expect, it } from "vitest";
import { step } from "./step";
import { vec3 } from "./vec3";

describe('step', () => {
  it('should generate a step function by comparing two values', () => {
    expect(step(0.5, 0.2)).toBe(0);
    expect(step(0.5, 0.5)).toBe(1);
    expect(step(0.5, 0.8)).toBe(1);
  });

  it('should generate a step function by comparing two values component-wise', () => {
    expect(step(vec3(0.5, 0.5, 0.5), vec3(0.2, 0.5, 0.8))).toEqual(vec3(0, 1, 1));
  });
});