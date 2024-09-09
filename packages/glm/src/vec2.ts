import { permutations, product } from '@miniengine/itertools';
import { SwizzleComponent } from './swizzle-component';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

export type vec2 = [number, number] & {
  x: number;
  y: number;
  r: number;
  g: number;
  s: number;
  t: number;
  xx: vec2;
  xy: vec2;
  yx: vec2;
  yy: vec2;
  rr: vec2;
  rg: vec2;
  gr: vec2;
  gg: vec2;
  ss: vec2;
  st: vec2;
  ts: vec2;
  tt: vec2;
  xxx: vec3;
  xxy: vec3;
  xyx: vec3;
  xyy: vec3;
  yxx: vec3;
  yxy: vec3;
  yyx: vec3;
  yyy: vec3;
  rrr: vec3;
  rrg: vec3;
  rgr: vec3;
  rgg: vec3;
  grr: vec3;
  grg: vec3;
  ggr: vec3;
  ggg: vec3;
  sss: vec3;
  sst: vec3;
  sts: vec3;
  stt: vec3;
  tss: vec3;
  tst: vec3;
  tts: vec3;
  ttt: vec3;
  xxxx: vec4;
  xxxy: vec4;
  xxyx: vec4;
  xxyy: vec4;
  xyxx: vec4;
  xyxy: vec4;
  xyyx: vec4;
  xyyy: vec4;
  yxxx: vec4;
  yxxy: vec4;
  yxyx: vec4;
  yxyy: vec4;
  yyxx: vec4;
  yyxy: vec4;
  yyyx: vec4;
  yyyy: vec4;
  rrrr: vec4;
  rrrg: vec4;
  rrgr: vec4;
  rrgg: vec4;
  rgrr: vec4;
  rgrg: vec4;
  rggr: vec4;
  rggg: vec4;
  grrr: vec4;
  grrg: vec4;
  grgr: vec4;
  grgg: vec4;
  ggrr: vec4;
  ggrg: vec4;
  gggr: vec4;
  gggg: vec4;
  ssss: vec4;
  ssst: vec4;
  ssts: vec4;
  sstt: vec4;
  stss: vec4;
  stst: vec4;
  stts: vec4;
  sttt: vec4;
  tsss: vec4;
  tsst: vec4;
  tsts: vec4;
  tstt: vec4;
  ttss: vec4;
  ttst: vec4;
  ttts: vec4;
  tttt: vec4;
};

// Additionally, there are 3 sets of swizzle masks. You can use xyzw, rgba (for colors), or stpq (for texture coordinates). These three sets have no actual difference; they're just syntactic sugar. You cannot combine names from different sets in a single swizzle operation. So ".xrs" is not a valid swizzle mask.
const readSwizzleMasks = [
  [
    ...product(['x', 'y'], 1),
    ...product(['r', 'g'], 1),
    ...product(['s', 't'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y'], 2),
    ...product(['r', 'g'], 2),
    ...product(['s', 't'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y'], 3),
    ...product(['r', 'g'], 3),
    ...product(['s', 't'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y'], 4),
    ...product(['r', 'g'], 4),
    ...product(['s', 't'], 4),
  ].map((tuple) => tuple.join('')),
];

// However, when you use a swizzle as a way of setting component values, you cannot use the same swizzle component twice. So someVec.xx = vec2(4.0, 4.0); is not allowed.
const writeSwizzleMasks = [
  [
    ...permutations(['x', 'y'], 1),
    ...permutations(['r', 'g'], 1),
    ...permutations(['s', 't'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y'], 2),
    ...permutations(['r', 'g'], 2),
    ...permutations(['s', 't'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y'], 3),
    ...permutations(['r', 'g'], 3),
    ...permutations(['s', 't'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y'], 4),
    ...permutations(['r', 'g'], 4),
    ...permutations(['s', 't'], 4),
  ].map((tuple) => tuple.join('')),
];

type Vec2SwizzleComponentKeys =
  | 'x'
  | 'y'
  | 'r'
  | 'g'
  | 's'
  | 't';

const handler: ProxyHandler<vec2> = {
  get(target, prop, receiver) {
    if (typeof prop === 'string') {
      if (prop.length === 1 && readSwizzleMasks[0].includes(prop)) {
        return target[SwizzleComponent[prop as Vec2SwizzleComponentKeys]];
      }
      if (
        (prop.length === 2 && readSwizzleMasks[1].includes(prop)) ||
        (prop.length === 3 && readSwizzleMasks[2].includes(prop)) ||
        (prop.length === 4 && readSwizzleMasks[3].includes(prop))
      ) {
        const a = new Array<number>(prop.length);
        const keys = prop.split('') as Vec2SwizzleComponentKeys[];
        for (const [i, key] of keys.entries()) {
          a[i] = target[SwizzleComponent[key]];
        }
        return a;
      }
    }

    return Reflect.get(target, prop, receiver);
  },
  set(target, p, newValue, receiver) {
    if (typeof p === 'string') {
      if (p.length === 1 && writeSwizzleMasks[0].includes(p)) {
        target[SwizzleComponent[p as Vec2SwizzleComponentKeys]] = newValue;
        return true;
      }
      if (
        (p.length === 2 && writeSwizzleMasks[1].includes(p)) ||
        (p.length === 3 && writeSwizzleMasks[2].includes(p)) ||
        (p.length === 4 && writeSwizzleMasks[3].includes(p))
      ) {
        const keys = p.split('') as Vec2SwizzleComponentKeys[];
        for (const [i, key] of keys.entries()) {
          target[SwizzleComponent[key]] = newValue[i];
        }
        return true;
      }
    }

    return Reflect.set(target, p, newValue, receiver);
  },
};

/**
 * Vector constructors take the number of values that they store. So a vec3 takes 3 values. However, all vectors can be constructed from a single value; this results in a vector where all of the values are the value given to the constructor. So:
 * @example
 * ```
 * vec3(1.0) == vec3(1.0, 1.0, 1.0);
 * ```
 * Vectors can also be constructed from other vectors, or a combination of vectors and scalars. The values in the output vector are filled in, right to left, by the values in the input scalars and vectors. There must be enough values, counting scalars and vectors, to fill in all of the elements of the output vector. Here are some examples:
 * @example
 * ```
 * vec4(vec2(10.0, 11.0), 1.0, 3.5) == vec4(10.0, vec2(11.0, 1.0), 3.5);
 * vec3(vec4(1.0, 2.0, 3.0, 4.0)) == vec3(1.0, 2.0, 3.0);
 * vec4(vec3(1.0, 2.0, 3.0)); // error. Not enough components.
 * vec2(vec3(1.0, 2.0, 3.0)); // OK
 * ```
 */
export function vec2(...args: (number | number[])[]): vec2 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    flattened.length = 2;
    flattened.fill(flattened[0]);
  }
  if (flattened.length < 2) {
    throw new Error('Not enough components');
  }

  return new Proxy(
    flattened.slice(undefined, 2) as [number, number],
    handler
  ) as vec2;
}
