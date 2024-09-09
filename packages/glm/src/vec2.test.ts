import { describe, expect, it } from 'vitest';
import { vec2 } from './vec2';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

describe('vec2', () => {
  it('should behave like an array', () => {
    const v = vec2(1, 2);

    expect(v).toEqual([1, 2]);
    expect(v[0]).toBe(1);
    expect(v[1]).toBe(2);
  });

  it('should support read swizzling', () => {
    const v = vec2(1, 2);

    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.r).toBe(1);
    expect(v.g).toBe(2);
    expect(v.s).toBe(1);
    expect(v.t).toBe(2);
    expect(v.xx).toEqual(vec2(1, 1));
    expect(v.xy).toEqual(vec2(1, 2));
    expect(v.yx).toEqual(vec2(2, 1));
    expect(v.yy).toEqual(vec2(2, 2));
    expect(v.rr).toEqual(vec2(1, 1));
    expect(v.rg).toEqual(vec2(1, 2));
    expect(v.gr).toEqual(vec2(2, 1));
    expect(v.gg).toEqual(vec2(2, 2));
    expect(v.ss).toEqual(vec2(1, 1));
    expect(v.st).toEqual(vec2(1, 2));
    expect(v.ts).toEqual(vec2(2, 1));
    expect(v.tt).toEqual(vec2(2, 2));
    expect(v.xxx).toEqual(vec3(1, 1, 1));
    expect(v.xxy).toEqual(vec3(1, 1, 2));
    expect(v.xyx).toEqual(vec3(1, 2, 1));
    expect(v.xyy).toEqual(vec3(1, 2, 2));
    expect(v.yxx).toEqual(vec3(2, 1, 1));
    expect(v.yxy).toEqual(vec3(2, 1, 2));
    expect(v.yyx).toEqual(vec3(2, 2, 1));
    expect(v.yyy).toEqual(vec3(2, 2, 2));
    expect(v.rrr).toEqual(vec3(1, 1, 1));
    expect(v.rrg).toEqual(vec3(1, 1, 2));
    expect(v.rgr).toEqual(vec3(1, 2, 1));
    expect(v.rgg).toEqual(vec3(1, 2, 2));
    expect(v.grr).toEqual(vec3(2, 1, 1));
    expect(v.grg).toEqual(vec3(2, 1, 2));
    expect(v.ggr).toEqual(vec3(2, 2, 1));
    expect(v.ggg).toEqual(vec3(2, 2, 2));
    expect(v.sss).toEqual(vec3(1, 1, 1));
    expect(v.sst).toEqual(vec3(1, 1, 2));
    expect(v.sts).toEqual(vec3(1, 2, 1));
    expect(v.stt).toEqual(vec3(1, 2, 2));
    expect(v.tss).toEqual(vec3(2, 1, 1));
    expect(v.tst).toEqual(vec3(2, 1, 2));
    expect(v.tts).toEqual(vec3(2, 2, 1));
    expect(v.ttt).toEqual(vec3(2, 2, 2));
    expect(v.xxxx).toEqual(vec4(1, 1, 1, 1));
    expect(v.xxxy).toEqual(vec4(1, 1, 1, 2));
    expect(v.xxyx).toEqual(vec4(1, 1, 2, 1));
    expect(v.xxyy).toEqual(vec4(1, 1, 2, 2));
    expect(v.xyxx).toEqual(vec4(1, 2, 1, 1));
    expect(v.xyxy).toEqual(vec4(1, 2, 1, 2));
    expect(v.xyyx).toEqual(vec4(1, 2, 2, 1));
    expect(v.xyyy).toEqual(vec4(1, 2, 2, 2));
    expect(v.yxxx).toEqual(vec4(2, 1, 1, 1));
    expect(v.yxxy).toEqual(vec4(2, 1, 1, 2));
    expect(v.yxyx).toEqual(vec4(2, 1, 2, 1));
    expect(v.yxyy).toEqual(vec4(2, 1, 2, 2));
    expect(v.yyxx).toEqual(vec4(2, 2, 1, 1));
    expect(v.yyxy).toEqual(vec4(2, 2, 1, 2));
    expect(v.yyyx).toEqual(vec4(2, 2, 2, 1));
    expect(v.yyyy).toEqual(vec4(2, 2, 2, 2));
    expect(v.rrrr).toEqual(vec4(1, 1, 1, 1));
    expect(v.rrrg).toEqual(vec4(1, 1, 1, 2));
    expect(v.rrgr).toEqual(vec4(1, 1, 2, 1));
    expect(v.rrgg).toEqual(vec4(1, 1, 2, 2));
    expect(v.rgrr).toEqual(vec4(1, 2, 1, 1));
    expect(v.rgrg).toEqual(vec4(1, 2, 1, 2));
    expect(v.rggr).toEqual(vec4(1, 2, 2, 1));
    expect(v.rggg).toEqual(vec4(1, 2, 2, 2));
    expect(v.grrr).toEqual(vec4(2, 1, 1, 1));
    expect(v.grrg).toEqual(vec4(2, 1, 1, 2));
    expect(v.grgr).toEqual(vec4(2, 1, 2, 1));
    expect(v.grgg).toEqual(vec4(2, 1, 2, 2));
    expect(v.ggrr).toEqual(vec4(2, 2, 1, 1));
    expect(v.ggrg).toEqual(vec4(2, 2, 1, 2));
    expect(v.gggr).toEqual(vec4(2, 2, 2, 1));
    expect(v.gggg).toEqual(vec4(2, 2, 2, 2));
    expect(v.ssss).toEqual(vec4(1, 1, 1, 1));
    expect(v.ssst).toEqual(vec4(1, 1, 1, 2));
    expect(v.ssts).toEqual(vec4(1, 1, 2, 1));
    expect(v.sstt).toEqual(vec4(1, 1, 2, 2));
    expect(v.stss).toEqual(vec4(1, 2, 1, 1));
    expect(v.stst).toEqual(vec4(1, 2, 1, 2));
    expect(v.stts).toEqual(vec4(1, 2, 2, 1));
    expect(v.sttt).toEqual(vec4(1, 2, 2, 2));
    expect(v.tsss).toEqual(vec4(2, 1, 1, 1));
    expect(v.tsst).toEqual(vec4(2, 1, 1, 2));
    expect(v.tsts).toEqual(vec4(2, 1, 2, 1));
    expect(v.tstt).toEqual(vec4(2, 1, 2, 2));
    expect(v.ttss).toEqual(vec4(2, 2, 1, 1));
    expect(v.ttst).toEqual(vec4(2, 2, 1, 2));
    expect(v.ttts).toEqual(vec4(2, 2, 2, 1));
    expect(v.tttt).toEqual(vec4(2, 2, 2, 2));
  });

  it.each<{
    swizzleMask: 'x' | 'y' | 'r' | 'g' | 's' | 't';
    expected: vec2;
  }>([
    { swizzleMask: 'x', expected: vec2(1, 0) },
    { swizzleMask: 'y', expected: vec2(0, 1) },
    { swizzleMask: 'r', expected: vec2(1, 0) },
    { swizzleMask: 'g', expected: vec2(0, 1) },
    { swizzleMask: 's', expected: vec2(1, 0) },
    { swizzleMask: 't', expected: vec2(0, 1) },
  ])('should support write swizzling with one component', ({ swizzleMask, expected }) => {
    const v = vec2(0);

    v[swizzleMask] = 1;

    expect(v).toEqual(expected);
  });

  it.each<{
    swizzleMask: 'xy' | 'yx' | 'rg' | 'gr' | 'st' | 'ts';
    expected: vec2;
  }>([
    { swizzleMask: 'xy', expected: vec2(1, 2) },
    { swizzleMask: 'yx', expected: vec2(2, 1) },
    { swizzleMask: 'rg', expected: vec2(1, 2) },
    { swizzleMask: 'gr', expected: vec2(2, 1) },
    { swizzleMask: 'st', expected: vec2(1, 2) },
    { swizzleMask: 'ts', expected: vec2(2, 1) },
  ])('should support write swizzling with two components', ({ swizzleMask, expected }) => {
    const v = vec2(0);

    v[swizzleMask] = vec2(1, 2);

    expect(v).toEqual(expected);
  });
});
