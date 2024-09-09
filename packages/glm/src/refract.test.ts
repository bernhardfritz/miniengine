import { describe, expect, it } from "vitest";
import { vec2 } from "./vec2";
import { refract } from "./refract";

describe('refract', () => {
  it('should calculate the refraction direction for an incident vector', () => {
    const I = vec2(0.707107, -0.707107);
    const N = vec2(0, 1);
    const eta = 0.9;

    const R = refract(I, N, eta);

    expect(R.x).toBeCloseTo(0.636396);
    expect(R.y).toBeCloseTo(-0.771362);
  });
});