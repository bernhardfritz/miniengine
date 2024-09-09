import { describe, expect, it } from "vitest";
import { smoothstep } from "./smoothstep";
import { vec3 } from "./vec3";

describe('smoothstep', () => {
  it('should perform Hermite interpolation between two values', () => {
    expect(smoothstep(0, 1, 0.2)).toBeCloseTo(0.1);
    expect(smoothstep(0, 1, 0.5)).toBe(0.5);
    expect(smoothstep(0, 1, 0.8)).toBeCloseTo(0.9);
  });

  it('should perform Hermite interpolation between two values component-wise', () => {
    const v = smoothstep(vec3(0, 0, 0), vec3(1, 1, 1), vec3(0.2, 0.5, 0.8));
    
    expect(v.x).toBeCloseTo(0.1)
    expect(v.y).toBe(0.5);
    expect(v.z).toBeCloseTo(0.9);
  });
});