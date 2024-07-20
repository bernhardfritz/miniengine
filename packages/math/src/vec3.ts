import { permutations, product } from '@miniengine/itertools';
import { SwizzleComponent } from './swizzle-component';
import { vec2 } from './vec2';
import { vec4 } from './vec4';

export type vec3 = [number, number, number] & {
  x: number;
  y: number;
  z: number;
  r: number;
  g: number;
  b: number;
  s: number;
  t: number;
  p: number;
  xx: vec2;
  xy: vec2;
  xz: vec2;
  yx: vec2;
  yy: vec2;
  yz: vec2;
  zx: vec2;
  zy: vec2;
  zz: vec2;
  rr: vec2;
  rg: vec2;
  rb: vec2;
  gr: vec2;
  gg: vec2;
  gb: vec2;
  br: vec2;
  bg: vec2;
  bb: vec2;
  ss: vec2;
  st: vec2;
  sp: vec2;
  ts: vec2;
  tt: vec2;
  tp: vec2;
  ps: vec2;
  pt: vec2;
  pp: vec2;
  xxx: vec3;
  xxy: vec3;
  xxz: vec3;
  xyx: vec3;
  xyy: vec3;
  xyz: vec3;
  xzx: vec3;
  xzy: vec3;
  xzz: vec3;
  yxx: vec3;
  yxy: vec3;
  yxz: vec3;
  yyx: vec3;
  yyy: vec3;
  yyz: vec3;
  yzx: vec3;
  yzy: vec3;
  yzz: vec3;
  zxx: vec3;
  zxy: vec3;
  zxz: vec3;
  zyx: vec3;
  zyy: vec3;
  zyz: vec3;
  zzx: vec3;
  zzy: vec3;
  zzz: vec3;
  rrr: vec3;
  rrg: vec3;
  rrb: vec3;
  rgr: vec3;
  rgg: vec3;
  rgb: vec3;
  rbr: vec3;
  rbg: vec3;
  rbb: vec3;
  grr: vec3;
  grg: vec3;
  grb: vec3;
  ggr: vec3;
  ggg: vec3;
  ggb: vec3;
  gbr: vec3;
  gbg: vec3;
  gbb: vec3;
  brr: vec3;
  brg: vec3;
  brb: vec3;
  bgr: vec3;
  bgg: vec3;
  bgb: vec3;
  bbr: vec3;
  bbg: vec3;
  bbb: vec3;
  sss: vec3;
  sst: vec3;
  ssp: vec3;
  sts: vec3;
  stt: vec3;
  stp: vec3;
  sps: vec3;
  spt: vec3;
  spp: vec3;
  tss: vec3;
  tst: vec3;
  tsp: vec3;
  tts: vec3;
  ttt: vec3;
  ttp: vec3;
  tps: vec3;
  tpt: vec3;
  tpp: vec3;
  pss: vec3;
  pst: vec3;
  psp: vec3;
  pts: vec3;
  ptt: vec3;
  ptp: vec3;
  pps: vec3;
  ppt: vec3;
  ppp: vec3;
  xxxx: vec4;
  xxxy: vec4;
  xxxz: vec4;
  xxyx: vec4;
  xxyy: vec4;
  xxyz: vec4;
  xxzx: vec4;
  xxzy: vec4;
  xxzz: vec4;
  xyxx: vec4;
  xyxy: vec4;
  xyxz: vec4;
  xyyx: vec4;
  xyyy: vec4;
  xyyz: vec4;
  xyzx: vec4;
  xyzy: vec4;
  xyzz: vec4;
  xzxx: vec4;
  xzxy: vec4;
  xzxz: vec4;
  xzyx: vec4;
  xzyy: vec4;
  xzyz: vec4;
  xzzx: vec4;
  xzzy: vec4;
  xzzz: vec4;
  yxxx: vec4;
  yxxy: vec4;
  yxxz: vec4;
  yxyx: vec4;
  yxyy: vec4;
  yxyz: vec4;
  yxzx: vec4;
  yxzy: vec4;
  yxzz: vec4;
  yyxx: vec4;
  yyxy: vec4;
  yyxz: vec4;
  yyyx: vec4;
  yyyy: vec4;
  yyyz: vec4;
  yyzx: vec4;
  yyzy: vec4;
  yyzz: vec4;
  yzxx: vec4;
  yzxy: vec4;
  yzxz: vec4;
  yzyx: vec4;
  yzyy: vec4;
  yzyz: vec4;
  yzzx: vec4;
  yzzy: vec4;
  yzzz: vec4;
  zxxx: vec4;
  zxxy: vec4;
  zxxz: vec4;
  zxyx: vec4;
  zxyy: vec4;
  zxyz: vec4;
  zxzx: vec4;
  zxzy: vec4;
  zxzz: vec4;
  zyxx: vec4;
  zyxy: vec4;
  zyxz: vec4;
  zyyx: vec4;
  zyyy: vec4;
  zyyz: vec4;
  zyzx: vec4;
  zyzy: vec4;
  zyzz: vec4;
  zzxx: vec4;
  zzxy: vec4;
  zzxz: vec4;
  zzyx: vec4;
  zzyy: vec4;
  zzyz: vec4;
  zzzx: vec4;
  zzzy: vec4;
  zzzz: vec4;
  rrrr: vec4;
  rrrg: vec4;
  rrrb: vec4;
  rrgr: vec4;
  rrgg: vec4;
  rrgb: vec4;
  rrbr: vec4;
  rrbg: vec4;
  rrbb: vec4;
  rgrr: vec4;
  rgrg: vec4;
  rgrb: vec4;
  rggr: vec4;
  rggg: vec4;
  rggb: vec4;
  rgbr: vec4;
  rgbg: vec4;
  rgbb: vec4;
  rbrr: vec4;
  rbrg: vec4;
  rbrb: vec4;
  rbgr: vec4;
  rbgg: vec4;
  rbgb: vec4;
  rbbr: vec4;
  rbbg: vec4;
  rbbb: vec4;
  grrr: vec4;
  grrg: vec4;
  grrb: vec4;
  grgr: vec4;
  grgg: vec4;
  grgb: vec4;
  grbr: vec4;
  grbg: vec4;
  grbb: vec4;
  ggrr: vec4;
  ggrg: vec4;
  ggrb: vec4;
  gggr: vec4;
  gggg: vec4;
  gggb: vec4;
  ggbr: vec4;
  ggbg: vec4;
  ggbb: vec4;
  gbrr: vec4;
  gbrg: vec4;
  gbrb: vec4;
  gbgr: vec4;
  gbgg: vec4;
  gbgb: vec4;
  gbbr: vec4;
  gbbg: vec4;
  gbbb: vec4;
  brrr: vec4;
  brrg: vec4;
  brrb: vec4;
  brgr: vec4;
  brgg: vec4;
  brgb: vec4;
  brbr: vec4;
  brbg: vec4;
  brbb: vec4;
  bgrr: vec4;
  bgrg: vec4;
  bgrb: vec4;
  bggr: vec4;
  bggg: vec4;
  bggb: vec4;
  bgbr: vec4;
  bgbg: vec4;
  bgbb: vec4;
  bbrr: vec4;
  bbrg: vec4;
  bbrb: vec4;
  bbgr: vec4;
  bbgg: vec4;
  bbgb: vec4;
  bbbr: vec4;
  bbbg: vec4;
  bbbb: vec4;
  ssss: vec4;
  ssst: vec4;
  sssp: vec4;
  ssts: vec4;
  sstt: vec4;
  sstp: vec4;
  ssps: vec4;
  sspt: vec4;
  sspp: vec4;
  stss: vec4;
  stst: vec4;
  stsp: vec4;
  stts: vec4;
  sttt: vec4;
  sttp: vec4;
  stps: vec4;
  stpt: vec4;
  stpp: vec4;
  spss: vec4;
  spst: vec4;
  spsp: vec4;
  spts: vec4;
  sptt: vec4;
  sptp: vec4;
  spps: vec4;
  sppt: vec4;
  sppp: vec4;
  tsss: vec4;
  tsst: vec4;
  tssp: vec4;
  tsts: vec4;
  tstt: vec4;
  tstp: vec4;
  tsps: vec4;
  tspt: vec4;
  tspp: vec4;
  ttss: vec4;
  ttst: vec4;
  ttsp: vec4;
  ttts: vec4;
  tttt: vec4;
  tttp: vec4;
  ttps: vec4;
  ttpt: vec4;
  ttpp: vec4;
  tpss: vec4;
  tpst: vec4;
  tpsp: vec4;
  tpts: vec4;
  tptt: vec4;
  tptp: vec4;
  tpps: vec4;
  tppt: vec4;
  tppp: vec4;
  psss: vec4;
  psst: vec4;
  pssp: vec4;
  psts: vec4;
  pstt: vec4;
  pstp: vec4;
  psps: vec4;
  pspt: vec4;
  pspp: vec4;
  ptss: vec4;
  ptst: vec4;
  ptsp: vec4;
  ptts: vec4;
  pttt: vec4;
  pttp: vec4;
  ptps: vec4;
  ptpt: vec4;
  ptpp: vec4;
  ppss: vec4;
  ppst: vec4;
  ppsp: vec4;
  ppts: vec4;
  pptt: vec4;
  pptp: vec4;
  ppps: vec4;
  pppt: vec4;
  pppp: vec4;
};

// Additionally, there are 3 sets of swizzle masks. You can use xyzw, rgba (for colors), or stpq (for texture coordinates). These three sets have no actual difference; they're just syntactic sugar. You cannot combine names from different sets in a single swizzle operation. So ".xrs" is not a valid swizzle mask.
const readSwizzleMasks = [
  [
    ...product(['x', 'y', 'z'], 1),
    ...product(['r', 'g', 'b'], 1),
    ...product(['s', 't', 'p'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z'], 2),
    ...product(['r', 'g', 'b'], 2),
    ...product(['s', 't', 'p'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z'], 3),
    ...product(['r', 'g', 'b'], 3),
    ...product(['s', 't', 'p'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z'], 4),
    ...product(['r', 'g', 'b'], 4),
    ...product(['s', 't', 'p'], 4),
  ].map((tuple) => tuple.join('')),
];

// However, when you use a swizzle as a way of setting component values, you cannot use the same swizzle component twice. So someVec.xx = vec2(4.0, 4.0); is not allowed.
const writeSwizzleMasks = [
  [
    ...permutations(['x', 'y', 'z'], 1),
    ...permutations(['r', 'g', 'b'], 1),
    ...permutations(['s', 't', 'p'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z'], 2),
    ...permutations(['r', 'g', 'b'], 2),
    ...permutations(['s', 't', 'p'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z'], 3),
    ...permutations(['r', 'g', 'b'], 3),
    ...permutations(['s', 't', 'p'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z'], 4),
    ...permutations(['r', 'g', 'b'], 4),
    ...permutations(['s', 't', 'p'], 4),
  ].map((tuple) => tuple.join('')),
];

export /* for testing */ type Vec3SwizzleComponentKeys =
  | 'x'
  | 'y'
  | 'z'
  | 'r'
  | 'g'
  | 'b'
  | 's'
  | 't'
  | 'p';

const handler: ProxyHandler<vec3> = {
  get(target, prop, receiver) {
    if (typeof prop === 'string') {
      if (prop.length === 1 && readSwizzleMasks[0].includes(prop)) {
        return target[SwizzleComponent[prop as Vec3SwizzleComponentKeys]];
      }
      if (
        (prop.length === 2 && readSwizzleMasks[1].includes(prop)) ||
        (prop.length === 3 && readSwizzleMasks[2].includes(prop)) ||
        (prop.length === 4 && readSwizzleMasks[3].includes(prop))
      ) {
        const a = new Array<number>(prop.length);
        const keys = prop.split('') as Vec3SwizzleComponentKeys[];
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
        target[SwizzleComponent[p as Vec3SwizzleComponentKeys]] = newValue;
        return true;
      }
      if (
        (p.length === 2 && writeSwizzleMasks[1].includes(p)) ||
        (p.length === 3 && writeSwizzleMasks[2].includes(p)) ||
        (p.length === 4 && writeSwizzleMasks[3].includes(p))
      ) {
        const keys = p.split('') as Vec3SwizzleComponentKeys[];
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
export function vec3(...args: (number | number[])[]): vec3 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    flattened.length = 3;
    flattened.fill(flattened[0]);
  }
  if (flattened.length < 3) {
    throw new Error('Not enough components');
  }

  return new Proxy(
    flattened.slice(undefined, 3) as [number, number, number],
    handler
  ) as vec3;
}
