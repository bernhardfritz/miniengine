import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { vec2 } from './vec2';
import { vec4 } from './vec4';

describe('vec3', () => {
  it('should behave like an array', () => {
    const v = vec3(1, 2, 3);

    expect(v).toEqual([1, 2, 3]);
    expect(v[0]).toBe(1);
    expect(v[1]).toBe(2);
    expect(v[2]).toBe(3);
  });

  it('should support read swizzling', () => {
    const v = vec3(1, 2, 3);

    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.z).toBe(3);
    expect(v.r).toBe(1);
    expect(v.g).toBe(2);
    expect(v.b).toBe(3);
    expect(v.s).toBe(1);
    expect(v.t).toBe(2);
    expect(v.p).toBe(3);
    expect(v.xx).toEqual(vec2(1, 1));
    expect(v.xy).toEqual(vec2(1, 2));
    expect(v.xz).toEqual(vec2(1, 3));
    expect(v.yx).toEqual(vec2(2, 1));
    expect(v.yy).toEqual(vec2(2, 2));
    expect(v.yz).toEqual(vec2(2, 3));
    expect(v.zx).toEqual(vec2(3, 1));
    expect(v.zy).toEqual(vec2(3, 2));
    expect(v.zz).toEqual(vec2(3, 3));
    expect(v.rr).toEqual(vec2(1, 1));
    expect(v.rg).toEqual(vec2(1, 2));
    expect(v.rb).toEqual(vec2(1, 3));
    expect(v.gr).toEqual(vec2(2, 1));
    expect(v.gg).toEqual(vec2(2, 2));
    expect(v.gb).toEqual(vec2(2, 3));
    expect(v.br).toEqual(vec2(3, 1));
    expect(v.bg).toEqual(vec2(3, 2));
    expect(v.bb).toEqual(vec2(3, 3));
    expect(v.ss).toEqual(vec2(1, 1));
    expect(v.st).toEqual(vec2(1, 2));
    expect(v.sp).toEqual(vec2(1, 3));
    expect(v.ts).toEqual(vec2(2, 1));
    expect(v.tt).toEqual(vec2(2, 2));
    expect(v.tp).toEqual(vec2(2, 3));
    expect(v.ps).toEqual(vec2(3, 1));
    expect(v.pt).toEqual(vec2(3, 2));
    expect(v.pp).toEqual(vec2(3, 3));
    expect(v.xxx).toEqual(vec3(1, 1, 1));
    expect(v.xxy).toEqual(vec3(1, 1, 2));
    expect(v.xxz).toEqual(vec3(1, 1, 3));
    expect(v.xyx).toEqual(vec3(1, 2, 1));
    expect(v.xyy).toEqual(vec3(1, 2, 2));
    expect(v.xyz).toEqual(vec3(1, 2, 3));
    expect(v.xzx).toEqual(vec3(1, 3, 1));
    expect(v.xzy).toEqual(vec3(1, 3, 2));
    expect(v.xzz).toEqual(vec3(1, 3, 3));
    expect(v.yxx).toEqual(vec3(2, 1, 1));
    expect(v.yxy).toEqual(vec3(2, 1, 2));
    expect(v.yxz).toEqual(vec3(2, 1, 3));
    expect(v.yyx).toEqual(vec3(2, 2, 1));
    expect(v.yyy).toEqual(vec3(2, 2, 2));
    expect(v.yyz).toEqual(vec3(2, 2, 3));
    expect(v.yzx).toEqual(vec3(2, 3, 1));
    expect(v.yzy).toEqual(vec3(2, 3, 2));
    expect(v.yzz).toEqual(vec3(2, 3, 3));
    expect(v.zxx).toEqual(vec3(3, 1, 1));
    expect(v.zxy).toEqual(vec3(3, 1, 2));
    expect(v.zxz).toEqual(vec3(3, 1, 3));
    expect(v.zyx).toEqual(vec3(3, 2, 1));
    expect(v.zyy).toEqual(vec3(3, 2, 2));
    expect(v.zyz).toEqual(vec3(3, 2, 3));
    expect(v.zzx).toEqual(vec3(3, 3, 1));
    expect(v.zzy).toEqual(vec3(3, 3, 2));
    expect(v.zzz).toEqual(vec3(3, 3, 3));
    expect(v.rrr).toEqual(vec3(1, 1, 1));
    expect(v.rrg).toEqual(vec3(1, 1, 2));
    expect(v.rrb).toEqual(vec3(1, 1, 3));
    expect(v.rgr).toEqual(vec3(1, 2, 1));
    expect(v.rgg).toEqual(vec3(1, 2, 2));
    expect(v.rgb).toEqual(vec3(1, 2, 3));
    expect(v.rbr).toEqual(vec3(1, 3, 1));
    expect(v.rbg).toEqual(vec3(1, 3, 2));
    expect(v.rbb).toEqual(vec3(1, 3, 3));
    expect(v.grr).toEqual(vec3(2, 1, 1));
    expect(v.grg).toEqual(vec3(2, 1, 2));
    expect(v.grb).toEqual(vec3(2, 1, 3));
    expect(v.ggr).toEqual(vec3(2, 2, 1));
    expect(v.ggg).toEqual(vec3(2, 2, 2));
    expect(v.ggb).toEqual(vec3(2, 2, 3));
    expect(v.gbr).toEqual(vec3(2, 3, 1));
    expect(v.gbg).toEqual(vec3(2, 3, 2));
    expect(v.gbb).toEqual(vec3(2, 3, 3));
    expect(v.brr).toEqual(vec3(3, 1, 1));
    expect(v.brg).toEqual(vec3(3, 1, 2));
    expect(v.brb).toEqual(vec3(3, 1, 3));
    expect(v.bgr).toEqual(vec3(3, 2, 1));
    expect(v.bgg).toEqual(vec3(3, 2, 2));
    expect(v.bgb).toEqual(vec3(3, 2, 3));
    expect(v.bbr).toEqual(vec3(3, 3, 1));
    expect(v.bbg).toEqual(vec3(3, 3, 2));
    expect(v.bbb).toEqual(vec3(3, 3, 3));
    expect(v.sss).toEqual(vec3(1, 1, 1));
    expect(v.sst).toEqual(vec3(1, 1, 2));
    expect(v.ssp).toEqual(vec3(1, 1, 3));
    expect(v.sts).toEqual(vec3(1, 2, 1));
    expect(v.stt).toEqual(vec3(1, 2, 2));
    expect(v.stp).toEqual(vec3(1, 2, 3));
    expect(v.sps).toEqual(vec3(1, 3, 1));
    expect(v.spt).toEqual(vec3(1, 3, 2));
    expect(v.spp).toEqual(vec3(1, 3, 3));
    expect(v.tss).toEqual(vec3(2, 1, 1));
    expect(v.tst).toEqual(vec3(2, 1, 2));
    expect(v.tsp).toEqual(vec3(2, 1, 3));
    expect(v.tts).toEqual(vec3(2, 2, 1));
    expect(v.ttt).toEqual(vec3(2, 2, 2));
    expect(v.ttp).toEqual(vec3(2, 2, 3));
    expect(v.tps).toEqual(vec3(2, 3, 1));
    expect(v.tpt).toEqual(vec3(2, 3, 2));
    expect(v.tpp).toEqual(vec3(2, 3, 3));
    expect(v.pss).toEqual(vec3(3, 1, 1));
    expect(v.pst).toEqual(vec3(3, 1, 2));
    expect(v.psp).toEqual(vec3(3, 1, 3));
    expect(v.pts).toEqual(vec3(3, 2, 1));
    expect(v.ptt).toEqual(vec3(3, 2, 2));
    expect(v.ptp).toEqual(vec3(3, 2, 3));
    expect(v.pps).toEqual(vec3(3, 3, 1));
    expect(v.ppt).toEqual(vec3(3, 3, 2));
    expect(v.ppp).toEqual(vec3(3, 3, 3));
    expect(v.xxxx).toEqual(vec4(1, 1, 1, 1));
    expect(v.xxxy).toEqual(vec4(1, 1, 1, 2));
    expect(v.xxxz).toEqual(vec4(1, 1, 1, 3));
    expect(v.xxyx).toEqual(vec4(1, 1, 2, 1));
    expect(v.xxyy).toEqual(vec4(1, 1, 2, 2));
    expect(v.xxyz).toEqual(vec4(1, 1, 2, 3));
    expect(v.xxzx).toEqual(vec4(1, 1, 3, 1));
    expect(v.xxzy).toEqual(vec4(1, 1, 3, 2));
    expect(v.xxzz).toEqual(vec4(1, 1, 3, 3));
    expect(v.xyxx).toEqual(vec4(1, 2, 1, 1));
    expect(v.xyxy).toEqual(vec4(1, 2, 1, 2));
    expect(v.xyxz).toEqual(vec4(1, 2, 1, 3));
    expect(v.xyyx).toEqual(vec4(1, 2, 2, 1));
    expect(v.xyyy).toEqual(vec4(1, 2, 2, 2));
    expect(v.xyyz).toEqual(vec4(1, 2, 2, 3));
    expect(v.xyzx).toEqual(vec4(1, 2, 3, 1));
    expect(v.xyzy).toEqual(vec4(1, 2, 3, 2));
    expect(v.xyzz).toEqual(vec4(1, 2, 3, 3));
    expect(v.xzxx).toEqual(vec4(1, 3, 1, 1));
    expect(v.xzxy).toEqual(vec4(1, 3, 1, 2));
    expect(v.xzxz).toEqual(vec4(1, 3, 1, 3));
    expect(v.xzyx).toEqual(vec4(1, 3, 2, 1));
    expect(v.xzyy).toEqual(vec4(1, 3, 2, 2));
    expect(v.xzyz).toEqual(vec4(1, 3, 2, 3));
    expect(v.xzzx).toEqual(vec4(1, 3, 3, 1));
    expect(v.xzzy).toEqual(vec4(1, 3, 3, 2));
    expect(v.xzzz).toEqual(vec4(1, 3, 3, 3));
    expect(v.yxxx).toEqual(vec4(2, 1, 1, 1));
    expect(v.yxxy).toEqual(vec4(2, 1, 1, 2));
    expect(v.yxxz).toEqual(vec4(2, 1, 1, 3));
    expect(v.yxyx).toEqual(vec4(2, 1, 2, 1));
    expect(v.yxyy).toEqual(vec4(2, 1, 2, 2));
    expect(v.yxyz).toEqual(vec4(2, 1, 2, 3));
    expect(v.yxzx).toEqual(vec4(2, 1, 3, 1));
    expect(v.yxzy).toEqual(vec4(2, 1, 3, 2));
    expect(v.yxzz).toEqual(vec4(2, 1, 3, 3));
    expect(v.yyxx).toEqual(vec4(2, 2, 1, 1));
    expect(v.yyxy).toEqual(vec4(2, 2, 1, 2));
    expect(v.yyxz).toEqual(vec4(2, 2, 1, 3));
    expect(v.yyyx).toEqual(vec4(2, 2, 2, 1));
    expect(v.yyyy).toEqual(vec4(2, 2, 2, 2));
    expect(v.yyyz).toEqual(vec4(2, 2, 2, 3));
    expect(v.yyzx).toEqual(vec4(2, 2, 3, 1));
    expect(v.yyzy).toEqual(vec4(2, 2, 3, 2));
    expect(v.yyzz).toEqual(vec4(2, 2, 3, 3));
    expect(v.yzxx).toEqual(vec4(2, 3, 1, 1));
    expect(v.yzxy).toEqual(vec4(2, 3, 1, 2));
    expect(v.yzxz).toEqual(vec4(2, 3, 1, 3));
    expect(v.yzyx).toEqual(vec4(2, 3, 2, 1));
    expect(v.yzyy).toEqual(vec4(2, 3, 2, 2));
    expect(v.yzyz).toEqual(vec4(2, 3, 2, 3));
    expect(v.yzzx).toEqual(vec4(2, 3, 3, 1));
    expect(v.yzzy).toEqual(vec4(2, 3, 3, 2));
    expect(v.yzzz).toEqual(vec4(2, 3, 3, 3));
    expect(v.zxxx).toEqual(vec4(3, 1, 1, 1));
    expect(v.zxxy).toEqual(vec4(3, 1, 1, 2));
    expect(v.zxxz).toEqual(vec4(3, 1, 1, 3));
    expect(v.zxyx).toEqual(vec4(3, 1, 2, 1));
    expect(v.zxyy).toEqual(vec4(3, 1, 2, 2));
    expect(v.zxyz).toEqual(vec4(3, 1, 2, 3));
    expect(v.zxzx).toEqual(vec4(3, 1, 3, 1));
    expect(v.zxzy).toEqual(vec4(3, 1, 3, 2));
    expect(v.zxzz).toEqual(vec4(3, 1, 3, 3));
    expect(v.zyxx).toEqual(vec4(3, 2, 1, 1));
    expect(v.zyxy).toEqual(vec4(3, 2, 1, 2));
    expect(v.zyxz).toEqual(vec4(3, 2, 1, 3));
    expect(v.zyyx).toEqual(vec4(3, 2, 2, 1));
    expect(v.zyyy).toEqual(vec4(3, 2, 2, 2));
    expect(v.zyyz).toEqual(vec4(3, 2, 2, 3));
    expect(v.zyzx).toEqual(vec4(3, 2, 3, 1));
    expect(v.zyzy).toEqual(vec4(3, 2, 3, 2));
    expect(v.zyzz).toEqual(vec4(3, 2, 3, 3));
    expect(v.zzxx).toEqual(vec4(3, 3, 1, 1));
    expect(v.zzxy).toEqual(vec4(3, 3, 1, 2));
    expect(v.zzxz).toEqual(vec4(3, 3, 1, 3));
    expect(v.zzyx).toEqual(vec4(3, 3, 2, 1));
    expect(v.zzyy).toEqual(vec4(3, 3, 2, 2));
    expect(v.zzyz).toEqual(vec4(3, 3, 2, 3));
    expect(v.zzzx).toEqual(vec4(3, 3, 3, 1));
    expect(v.zzzy).toEqual(vec4(3, 3, 3, 2));
    expect(v.zzzz).toEqual(vec4(3, 3, 3, 3));
    expect(v.rrrr).toEqual(vec4(1, 1, 1, 1));
    expect(v.rrrg).toEqual(vec4(1, 1, 1, 2));
    expect(v.rrrb).toEqual(vec4(1, 1, 1, 3));
    expect(v.rrgr).toEqual(vec4(1, 1, 2, 1));
    expect(v.rrgg).toEqual(vec4(1, 1, 2, 2));
    expect(v.rrgb).toEqual(vec4(1, 1, 2, 3));
    expect(v.rrbr).toEqual(vec4(1, 1, 3, 1));
    expect(v.rrbg).toEqual(vec4(1, 1, 3, 2));
    expect(v.rrbb).toEqual(vec4(1, 1, 3, 3));
    expect(v.rgrr).toEqual(vec4(1, 2, 1, 1));
    expect(v.rgrg).toEqual(vec4(1, 2, 1, 2));
    expect(v.rgrb).toEqual(vec4(1, 2, 1, 3));
    expect(v.rggr).toEqual(vec4(1, 2, 2, 1));
    expect(v.rggg).toEqual(vec4(1, 2, 2, 2));
    expect(v.rggb).toEqual(vec4(1, 2, 2, 3));
    expect(v.rgbr).toEqual(vec4(1, 2, 3, 1));
    expect(v.rgbg).toEqual(vec4(1, 2, 3, 2));
    expect(v.rgbb).toEqual(vec4(1, 2, 3, 3));
    expect(v.rbrr).toEqual(vec4(1, 3, 1, 1));
    expect(v.rbrg).toEqual(vec4(1, 3, 1, 2));
    expect(v.rbrb).toEqual(vec4(1, 3, 1, 3));
    expect(v.rbgr).toEqual(vec4(1, 3, 2, 1));
    expect(v.rbgg).toEqual(vec4(1, 3, 2, 2));
    expect(v.rbgb).toEqual(vec4(1, 3, 2, 3));
    expect(v.rbbr).toEqual(vec4(1, 3, 3, 1));
    expect(v.rbbg).toEqual(vec4(1, 3, 3, 2));
    expect(v.rbbb).toEqual(vec4(1, 3, 3, 3));
    expect(v.grrr).toEqual(vec4(2, 1, 1, 1));
    expect(v.grrg).toEqual(vec4(2, 1, 1, 2));
    expect(v.grrb).toEqual(vec4(2, 1, 1, 3));
    expect(v.grgr).toEqual(vec4(2, 1, 2, 1));
    expect(v.grgg).toEqual(vec4(2, 1, 2, 2));
    expect(v.grgb).toEqual(vec4(2, 1, 2, 3));
    expect(v.grbr).toEqual(vec4(2, 1, 3, 1));
    expect(v.grbg).toEqual(vec4(2, 1, 3, 2));
    expect(v.grbb).toEqual(vec4(2, 1, 3, 3));
    expect(v.ggrr).toEqual(vec4(2, 2, 1, 1));
    expect(v.ggrg).toEqual(vec4(2, 2, 1, 2));
    expect(v.ggrb).toEqual(vec4(2, 2, 1, 3));
    expect(v.gggr).toEqual(vec4(2, 2, 2, 1));
    expect(v.gggg).toEqual(vec4(2, 2, 2, 2));
    expect(v.gggb).toEqual(vec4(2, 2, 2, 3));
    expect(v.ggbr).toEqual(vec4(2, 2, 3, 1));
    expect(v.ggbg).toEqual(vec4(2, 2, 3, 2));
    expect(v.ggbb).toEqual(vec4(2, 2, 3, 3));
    expect(v.gbrr).toEqual(vec4(2, 3, 1, 1));
    expect(v.gbrg).toEqual(vec4(2, 3, 1, 2));
    expect(v.gbrb).toEqual(vec4(2, 3, 1, 3));
    expect(v.gbgr).toEqual(vec4(2, 3, 2, 1));
    expect(v.gbgg).toEqual(vec4(2, 3, 2, 2));
    expect(v.gbgb).toEqual(vec4(2, 3, 2, 3));
    expect(v.gbbr).toEqual(vec4(2, 3, 3, 1));
    expect(v.gbbg).toEqual(vec4(2, 3, 3, 2));
    expect(v.gbbb).toEqual(vec4(2, 3, 3, 3));
    expect(v.brrr).toEqual(vec4(3, 1, 1, 1));
    expect(v.brrg).toEqual(vec4(3, 1, 1, 2));
    expect(v.brrb).toEqual(vec4(3, 1, 1, 3));
    expect(v.brgr).toEqual(vec4(3, 1, 2, 1));
    expect(v.brgg).toEqual(vec4(3, 1, 2, 2));
    expect(v.brgb).toEqual(vec4(3, 1, 2, 3));
    expect(v.brbr).toEqual(vec4(3, 1, 3, 1));
    expect(v.brbg).toEqual(vec4(3, 1, 3, 2));
    expect(v.brbb).toEqual(vec4(3, 1, 3, 3));
    expect(v.bgrr).toEqual(vec4(3, 2, 1, 1));
    expect(v.bgrg).toEqual(vec4(3, 2, 1, 2));
    expect(v.bgrb).toEqual(vec4(3, 2, 1, 3));
    expect(v.bggr).toEqual(vec4(3, 2, 2, 1));
    expect(v.bggg).toEqual(vec4(3, 2, 2, 2));
    expect(v.bggb).toEqual(vec4(3, 2, 2, 3));
    expect(v.bgbr).toEqual(vec4(3, 2, 3, 1));
    expect(v.bgbg).toEqual(vec4(3, 2, 3, 2));
    expect(v.bgbb).toEqual(vec4(3, 2, 3, 3));
    expect(v.bbrr).toEqual(vec4(3, 3, 1, 1));
    expect(v.bbrg).toEqual(vec4(3, 3, 1, 2));
    expect(v.bbrb).toEqual(vec4(3, 3, 1, 3));
    expect(v.bbgr).toEqual(vec4(3, 3, 2, 1));
    expect(v.bbgg).toEqual(vec4(3, 3, 2, 2));
    expect(v.bbgb).toEqual(vec4(3, 3, 2, 3));
    expect(v.bbbr).toEqual(vec4(3, 3, 3, 1));
    expect(v.bbbg).toEqual(vec4(3, 3, 3, 2));
    expect(v.bbbb).toEqual(vec4(3, 3, 3, 3));
    expect(v.ssss).toEqual(vec4(1, 1, 1, 1));
    expect(v.ssst).toEqual(vec4(1, 1, 1, 2));
    expect(v.sssp).toEqual(vec4(1, 1, 1, 3));
    expect(v.ssts).toEqual(vec4(1, 1, 2, 1));
    expect(v.sstt).toEqual(vec4(1, 1, 2, 2));
    expect(v.sstp).toEqual(vec4(1, 1, 2, 3));
    expect(v.ssps).toEqual(vec4(1, 1, 3, 1));
    expect(v.sspt).toEqual(vec4(1, 1, 3, 2));
    expect(v.sspp).toEqual(vec4(1, 1, 3, 3));
    expect(v.stss).toEqual(vec4(1, 2, 1, 1));
    expect(v.stst).toEqual(vec4(1, 2, 1, 2));
    expect(v.stsp).toEqual(vec4(1, 2, 1, 3));
    expect(v.stts).toEqual(vec4(1, 2, 2, 1));
    expect(v.sttt).toEqual(vec4(1, 2, 2, 2));
    expect(v.sttp).toEqual(vec4(1, 2, 2, 3));
    expect(v.stps).toEqual(vec4(1, 2, 3, 1));
    expect(v.stpt).toEqual(vec4(1, 2, 3, 2));
    expect(v.stpp).toEqual(vec4(1, 2, 3, 3));
    expect(v.spss).toEqual(vec4(1, 3, 1, 1));
    expect(v.spst).toEqual(vec4(1, 3, 1, 2));
    expect(v.spsp).toEqual(vec4(1, 3, 1, 3));
    expect(v.spts).toEqual(vec4(1, 3, 2, 1));
    expect(v.sptt).toEqual(vec4(1, 3, 2, 2));
    expect(v.sptp).toEqual(vec4(1, 3, 2, 3));
    expect(v.spps).toEqual(vec4(1, 3, 3, 1));
    expect(v.sppt).toEqual(vec4(1, 3, 3, 2));
    expect(v.sppp).toEqual(vec4(1, 3, 3, 3));
    expect(v.tsss).toEqual(vec4(2, 1, 1, 1));
    expect(v.tsst).toEqual(vec4(2, 1, 1, 2));
    expect(v.tssp).toEqual(vec4(2, 1, 1, 3));
    expect(v.tsts).toEqual(vec4(2, 1, 2, 1));
    expect(v.tstt).toEqual(vec4(2, 1, 2, 2));
    expect(v.tstp).toEqual(vec4(2, 1, 2, 3));
    expect(v.tsps).toEqual(vec4(2, 1, 3, 1));
    expect(v.tspt).toEqual(vec4(2, 1, 3, 2));
    expect(v.tspp).toEqual(vec4(2, 1, 3, 3));
    expect(v.ttss).toEqual(vec4(2, 2, 1, 1));
    expect(v.ttst).toEqual(vec4(2, 2, 1, 2));
    expect(v.ttsp).toEqual(vec4(2, 2, 1, 3));
    expect(v.ttts).toEqual(vec4(2, 2, 2, 1));
    expect(v.tttt).toEqual(vec4(2, 2, 2, 2));
    expect(v.tttp).toEqual(vec4(2, 2, 2, 3));
    expect(v.ttps).toEqual(vec4(2, 2, 3, 1));
    expect(v.ttpt).toEqual(vec4(2, 2, 3, 2));
    expect(v.ttpp).toEqual(vec4(2, 2, 3, 3));
    expect(v.tpss).toEqual(vec4(2, 3, 1, 1));
    expect(v.tpst).toEqual(vec4(2, 3, 1, 2));
    expect(v.tpsp).toEqual(vec4(2, 3, 1, 3));
    expect(v.tpts).toEqual(vec4(2, 3, 2, 1));
    expect(v.tptt).toEqual(vec4(2, 3, 2, 2));
    expect(v.tptp).toEqual(vec4(2, 3, 2, 3));
    expect(v.tpps).toEqual(vec4(2, 3, 3, 1));
    expect(v.tppt).toEqual(vec4(2, 3, 3, 2));
    expect(v.tppp).toEqual(vec4(2, 3, 3, 3));
    expect(v.psss).toEqual(vec4(3, 1, 1, 1));
    expect(v.psst).toEqual(vec4(3, 1, 1, 2));
    expect(v.pssp).toEqual(vec4(3, 1, 1, 3));
    expect(v.psts).toEqual(vec4(3, 1, 2, 1));
    expect(v.pstt).toEqual(vec4(3, 1, 2, 2));
    expect(v.pstp).toEqual(vec4(3, 1, 2, 3));
    expect(v.psps).toEqual(vec4(3, 1, 3, 1));
    expect(v.pspt).toEqual(vec4(3, 1, 3, 2));
    expect(v.pspp).toEqual(vec4(3, 1, 3, 3));
    expect(v.ptss).toEqual(vec4(3, 2, 1, 1));
    expect(v.ptst).toEqual(vec4(3, 2, 1, 2));
    expect(v.ptsp).toEqual(vec4(3, 2, 1, 3));
    expect(v.ptts).toEqual(vec4(3, 2, 2, 1));
    expect(v.pttt).toEqual(vec4(3, 2, 2, 2));
    expect(v.pttp).toEqual(vec4(3, 2, 2, 3));
    expect(v.ptps).toEqual(vec4(3, 2, 3, 1));
    expect(v.ptpt).toEqual(vec4(3, 2, 3, 2));
    expect(v.ptpp).toEqual(vec4(3, 2, 3, 3));
    expect(v.ppss).toEqual(vec4(3, 3, 1, 1));
    expect(v.ppst).toEqual(vec4(3, 3, 1, 2));
    expect(v.ppsp).toEqual(vec4(3, 3, 1, 3));
    expect(v.ppts).toEqual(vec4(3, 3, 2, 1));
    expect(v.pptt).toEqual(vec4(3, 3, 2, 2));
    expect(v.pptp).toEqual(vec4(3, 3, 2, 3));
    expect(v.ppps).toEqual(vec4(3, 3, 3, 1));
    expect(v.pppt).toEqual(vec4(3, 3, 3, 2));
    expect(v.pppp).toEqual(vec4(3, 3, 3, 3));
  });

  it.each<{
    swizzleMask: 'x' | 'y' | 'z' | 'r' | 'g' | 'b' | 's' | 't' | 'p';
    expected: vec3;
  }>([
    { swizzleMask: 'x', expected: vec3(1, 0, 0) },
    { swizzleMask: 'y', expected: vec3(0, 1, 0) },
    { swizzleMask: 'z', expected: vec3(0, 0, 1) },
    { swizzleMask: 'r', expected: vec3(1, 0, 0) },
    { swizzleMask: 'g', expected: vec3(0, 1, 0) },
    { swizzleMask: 'b', expected: vec3(0, 0, 1) },
    { swizzleMask: 's', expected: vec3(1, 0, 0) },
    { swizzleMask: 't', expected: vec3(0, 1, 0) },
    { swizzleMask: 'p', expected: vec3(0, 0, 1) },
  ])(
    'should support write swizzling with one component',
    ({ swizzleMask, expected }) => {
      const v = vec3(0);

      v[swizzleMask] = 1;

      expect(v).toEqual(expected);
    }
  );

  it.each<{
    swizzleMask:
      | 'xy'
      | 'xz'
      | 'yx'
      | 'yz'
      | 'zx'
      | 'zy'
      | 'rg'
      | 'rb'
      | 'gr'
      | 'gb'
      | 'br'
      | 'bg'
      | 'st'
      | 'sp'
      | 'ts'
      | 'tp'
      | 'ps'
      | 'pt';
    expected: vec3;
  }>([
    { swizzleMask: 'xy', expected: vec3(1, 2, 0) },
    { swizzleMask: 'xz', expected: vec3(1, 0, 2) },
    { swizzleMask: 'yx', expected: vec3(2, 1, 0) },
    { swizzleMask: 'yz', expected: vec3(0, 1, 2) },
    { swizzleMask: 'zx', expected: vec3(2, 0, 1) },
    { swizzleMask: 'zy', expected: vec3(0, 2, 1) },
    { swizzleMask: 'rg', expected: vec3(1, 2, 0) },
    { swizzleMask: 'rb', expected: vec3(1, 0, 2) },
    { swizzleMask: 'gr', expected: vec3(2, 1, 0) },
    { swizzleMask: 'gb', expected: vec3(0, 1, 2) },
    { swizzleMask: 'br', expected: vec3(2, 0, 1) },
    { swizzleMask: 'bg', expected: vec3(0, 2, 1) },
    { swizzleMask: 'st', expected: vec3(1, 2, 0) },
    { swizzleMask: 'sp', expected: vec3(1, 0, 2) },
    { swizzleMask: 'ts', expected: vec3(2, 1, 0) },
    { swizzleMask: 'tp', expected: vec3(0, 1, 2) },
    { swizzleMask: 'ps', expected: vec3(2, 0, 1) },
    { swizzleMask: 'pt', expected: vec3(0, 2, 1) },
  ])(
    'should support write swizzling with two components',
    ({ swizzleMask, expected }) => {
      const v = vec3(0);

      v[swizzleMask] = vec2(1, 2);

      expect(v).toEqual(expected);
    }
  );

  it.each<{
    swizzleMask:
      | 'xyz'
      | 'xzy'
      | 'yxz'
      | 'yzx'
      | 'zxy'
      | 'zyx'
      | 'rgb'
      | 'rbg'
      | 'grb'
      | 'gbr'
      | 'brg'
      | 'bgr'
      | 'stp'
      | 'spt'
      | 'tsp'
      | 'tps'
      | 'pst'
      | 'pts';
    expected: vec3;
  }>([
    { swizzleMask: 'xyz', expected: vec3(1, 2, 3) },
    { swizzleMask: 'xzy', expected: vec3(1, 3, 2) },
    { swizzleMask: 'yxz', expected: vec3(2, 1, 3) },
    { swizzleMask: 'yzx', expected: vec3(3, 1, 2) },
    { swizzleMask: 'zxy', expected: vec3(2, 3, 1) },
    { swizzleMask: 'zyx', expected: vec3(3, 2, 1) },
    { swizzleMask: 'rgb', expected: vec3(1, 2, 3) },
    { swizzleMask: 'rbg', expected: vec3(1, 3, 2) },
    { swizzleMask: 'grb', expected: vec3(2, 1, 3) },
    { swizzleMask: 'gbr', expected: vec3(3, 1, 2) },
    { swizzleMask: 'brg', expected: vec3(2, 3, 1) },
    { swizzleMask: 'bgr', expected: vec3(3, 2, 1) },
    { swizzleMask: 'stp', expected: vec3(1, 2, 3) },
    { swizzleMask: 'spt', expected: vec3(1, 3, 2) },
    { swizzleMask: 'tsp', expected: vec3(2, 1, 3) },
    { swizzleMask: 'tps', expected: vec3(3, 1, 2) },
    { swizzleMask: 'pst', expected: vec3(2, 3, 1) },
    { swizzleMask: 'pts', expected: vec3(3, 2, 1) },
  ])(
    'should support write swizzling with three components',
    ({ swizzleMask, expected }) => {
      const v = vec3(0);

      v[swizzleMask] = vec3(1, 2, 3);

      expect(v).toEqual(expected);
    }
  );
});
