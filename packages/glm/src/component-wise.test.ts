import { describe, expect, it } from "vitest";
import { componentWise } from "./component-wise";
import { vec3 } from "./vec3";

describe('componentWise', () => {
  it('should apply the function component-wise', () => {
    const sum = (x: number, y: number) => x + y;

    expect(componentWise(sum, vec3(1, 2, 3), vec3(4, 5, 6))).toEqual(vec3(5, 7, 9));
  });
});