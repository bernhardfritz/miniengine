import { describe, expect, it } from "vitest";
import { reflect } from "./reflect";
import { vec3 } from "./vec3";

describe('reflect', () => {
  it('should calculate the reflection direction for an incident vector', () => {
    const I = vec3(1, 0, -1);
    const N = vec3(0, 0, 1);

    const R = reflect(I, N);

    expect(R).toEqual(vec3(1, 0, 1));
  });
});