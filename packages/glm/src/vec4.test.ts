import { describe, expect, it } from 'vitest';
import { vec3 } from './vec3';
import { vec2 } from './vec2';
import { vec4 } from './vec4';

describe('vec4', () => {
  it('should behave like an array', () => {
    const v = vec4(1, 2, 3, 4);

    expect(v).toEqual([1, 2, 3, 4]);
    expect(v[0]).toBe(1);
    expect(v[1]).toBe(2);
    expect(v[2]).toBe(3);
    expect(v[3]).toBe(4);
  });

  it('should support read swizzling', () => {
    const v = vec4(1, 2, 3, 4);

    expect(v.x).toBe(1);
    expect(v.y).toBe(2);
    expect(v.z).toBe(3);
    expect(v.w).toBe(4);
    expect(v.r).toBe(1);
    expect(v.g).toBe(2);
    expect(v.b).toBe(3);
    expect(v.a).toBe(4);
    expect(v.s).toBe(1);
    expect(v.t).toBe(2);
    expect(v.p).toBe(3);
    expect(v.q).toBe(4);
    expect(v.xx).toEqual(vec2(1, 1));
    expect(v.xy).toEqual(vec2(1, 2));
    expect(v.xz).toEqual(vec2(1, 3));
    expect(v.xw).toEqual(vec2(1, 4));
    expect(v.yx).toEqual(vec2(2, 1));
    expect(v.yy).toEqual(vec2(2, 2));
    expect(v.yz).toEqual(vec2(2, 3));
    expect(v.yw).toEqual(vec2(2, 4));
    expect(v.zx).toEqual(vec2(3, 1));
    expect(v.zy).toEqual(vec2(3, 2));
    expect(v.zz).toEqual(vec2(3, 3));
    expect(v.zw).toEqual(vec2(3, 4));
    expect(v.wx).toEqual(vec2(4, 1));
    expect(v.wy).toEqual(vec2(4, 2));
    expect(v.wz).toEqual(vec2(4, 3));
    expect(v.ww).toEqual(vec2(4, 4));
    expect(v.rr).toEqual(vec2(1, 1));
    expect(v.rg).toEqual(vec2(1, 2));
    expect(v.rb).toEqual(vec2(1, 3));
    expect(v.ra).toEqual(vec2(1, 4));
    expect(v.gr).toEqual(vec2(2, 1));
    expect(v.gg).toEqual(vec2(2, 2));
    expect(v.gb).toEqual(vec2(2, 3));
    expect(v.ga).toEqual(vec2(2, 4));
    expect(v.br).toEqual(vec2(3, 1));
    expect(v.bg).toEqual(vec2(3, 2));
    expect(v.bb).toEqual(vec2(3, 3));
    expect(v.ba).toEqual(vec2(3, 4));
    expect(v.ar).toEqual(vec2(4, 1));
    expect(v.ag).toEqual(vec2(4, 2));
    expect(v.ab).toEqual(vec2(4, 3));
    expect(v.aa).toEqual(vec2(4, 4));
    expect(v.ss).toEqual(vec2(1, 1));
    expect(v.st).toEqual(vec2(1, 2));
    expect(v.sp).toEqual(vec2(1, 3));
    expect(v.sq).toEqual(vec2(1, 4));
    expect(v.ts).toEqual(vec2(2, 1));
    expect(v.tt).toEqual(vec2(2, 2));
    expect(v.tp).toEqual(vec2(2, 3));
    expect(v.tq).toEqual(vec2(2, 4));
    expect(v.ps).toEqual(vec2(3, 1));
    expect(v.pt).toEqual(vec2(3, 2));
    expect(v.pp).toEqual(vec2(3, 3));
    expect(v.pq).toEqual(vec2(3, 4));
    expect(v.qs).toEqual(vec2(4, 1));
    expect(v.qt).toEqual(vec2(4, 2));
    expect(v.qp).toEqual(vec2(4, 3));
    expect(v.qq).toEqual(vec2(4, 4));
    expect(v.xxx).toEqual(vec3(1, 1, 1));
    expect(v.xxy).toEqual(vec3(1, 1, 2));
    expect(v.xxz).toEqual(vec3(1, 1, 3));
    expect(v.xxw).toEqual(vec3(1, 1, 4));
    expect(v.xyx).toEqual(vec3(1, 2, 1));
    expect(v.xyy).toEqual(vec3(1, 2, 2));
    expect(v.xyz).toEqual(vec3(1, 2, 3));
    expect(v.xyw).toEqual(vec3(1, 2, 4));
    expect(v.xzx).toEqual(vec3(1, 3, 1));
    expect(v.xzy).toEqual(vec3(1, 3, 2));
    expect(v.xzz).toEqual(vec3(1, 3, 3));
    expect(v.xzw).toEqual(vec3(1, 3, 4));
    expect(v.xwx).toEqual(vec3(1, 4, 1));
    expect(v.xwy).toEqual(vec3(1, 4, 2));
    expect(v.xwz).toEqual(vec3(1, 4, 3));
    expect(v.xww).toEqual(vec3(1, 4, 4));
    expect(v.yxx).toEqual(vec3(2, 1, 1));
    expect(v.yxy).toEqual(vec3(2, 1, 2));
    expect(v.yxz).toEqual(vec3(2, 1, 3));
    expect(v.yxw).toEqual(vec3(2, 1, 4));
    expect(v.yyx).toEqual(vec3(2, 2, 1));
    expect(v.yyy).toEqual(vec3(2, 2, 2));
    expect(v.yyz).toEqual(vec3(2, 2, 3));
    expect(v.yyw).toEqual(vec3(2, 2, 4));
    expect(v.yzx).toEqual(vec3(2, 3, 1));
    expect(v.yzy).toEqual(vec3(2, 3, 2));
    expect(v.yzz).toEqual(vec3(2, 3, 3));
    expect(v.yzw).toEqual(vec3(2, 3, 4));
    expect(v.ywx).toEqual(vec3(2, 4, 1));
    expect(v.ywy).toEqual(vec3(2, 4, 2));
    expect(v.ywz).toEqual(vec3(2, 4, 3));
    expect(v.yww).toEqual(vec3(2, 4, 4));
    expect(v.zxx).toEqual(vec3(3, 1, 1));
    expect(v.zxy).toEqual(vec3(3, 1, 2));
    expect(v.zxz).toEqual(vec3(3, 1, 3));
    expect(v.zxw).toEqual(vec3(3, 1, 4));
    expect(v.zyx).toEqual(vec3(3, 2, 1));
    expect(v.zyy).toEqual(vec3(3, 2, 2));
    expect(v.zyz).toEqual(vec3(3, 2, 3));
    expect(v.zyw).toEqual(vec3(3, 2, 4));
    expect(v.zzx).toEqual(vec3(3, 3, 1));
    expect(v.zzy).toEqual(vec3(3, 3, 2));
    expect(v.zzz).toEqual(vec3(3, 3, 3));
    expect(v.zzw).toEqual(vec3(3, 3, 4));
    expect(v.zwx).toEqual(vec3(3, 4, 1));
    expect(v.zwy).toEqual(vec3(3, 4, 2));
    expect(v.zwz).toEqual(vec3(3, 4, 3));
    expect(v.zww).toEqual(vec3(3, 4, 4));
    expect(v.wxx).toEqual(vec3(4, 1, 1));
    expect(v.wxy).toEqual(vec3(4, 1, 2));
    expect(v.wxz).toEqual(vec3(4, 1, 3));
    expect(v.wxw).toEqual(vec3(4, 1, 4));
    expect(v.wyx).toEqual(vec3(4, 2, 1));
    expect(v.wyy).toEqual(vec3(4, 2, 2));
    expect(v.wyz).toEqual(vec3(4, 2, 3));
    expect(v.wyw).toEqual(vec3(4, 2, 4));
    expect(v.wzx).toEqual(vec3(4, 3, 1));
    expect(v.wzy).toEqual(vec3(4, 3, 2));
    expect(v.wzz).toEqual(vec3(4, 3, 3));
    expect(v.wzw).toEqual(vec3(4, 3, 4));
    expect(v.wwx).toEqual(vec3(4, 4, 1));
    expect(v.wwy).toEqual(vec3(4, 4, 2));
    expect(v.wwz).toEqual(vec3(4, 4, 3));
    expect(v.www).toEqual(vec3(4, 4, 4));
    expect(v.rrr).toEqual(vec3(1, 1, 1));
    expect(v.rrg).toEqual(vec3(1, 1, 2));
    expect(v.rrb).toEqual(vec3(1, 1, 3));
    expect(v.rra).toEqual(vec3(1, 1, 4));
    expect(v.rgr).toEqual(vec3(1, 2, 1));
    expect(v.rgg).toEqual(vec3(1, 2, 2));
    expect(v.rgb).toEqual(vec3(1, 2, 3));
    expect(v.rga).toEqual(vec3(1, 2, 4));
    expect(v.rbr).toEqual(vec3(1, 3, 1));
    expect(v.rbg).toEqual(vec3(1, 3, 2));
    expect(v.rbb).toEqual(vec3(1, 3, 3));
    expect(v.rba).toEqual(vec3(1, 3, 4));
    expect(v.rar).toEqual(vec3(1, 4, 1));
    expect(v.rag).toEqual(vec3(1, 4, 2));
    expect(v.rab).toEqual(vec3(1, 4, 3));
    expect(v.raa).toEqual(vec3(1, 4, 4));
    expect(v.grr).toEqual(vec3(2, 1, 1));
    expect(v.grg).toEqual(vec3(2, 1, 2));
    expect(v.grb).toEqual(vec3(2, 1, 3));
    expect(v.gra).toEqual(vec3(2, 1, 4));
    expect(v.ggr).toEqual(vec3(2, 2, 1));
    expect(v.ggg).toEqual(vec3(2, 2, 2));
    expect(v.ggb).toEqual(vec3(2, 2, 3));
    expect(v.gga).toEqual(vec3(2, 2, 4));
    expect(v.gbr).toEqual(vec3(2, 3, 1));
    expect(v.gbg).toEqual(vec3(2, 3, 2));
    expect(v.gbb).toEqual(vec3(2, 3, 3));
    expect(v.gba).toEqual(vec3(2, 3, 4));
    expect(v.gar).toEqual(vec3(2, 4, 1));
    expect(v.gag).toEqual(vec3(2, 4, 2));
    expect(v.gab).toEqual(vec3(2, 4, 3));
    expect(v.gaa).toEqual(vec3(2, 4, 4));
    expect(v.brr).toEqual(vec3(3, 1, 1));
    expect(v.brg).toEqual(vec3(3, 1, 2));
    expect(v.brb).toEqual(vec3(3, 1, 3));
    expect(v.bra).toEqual(vec3(3, 1, 4));
    expect(v.bgr).toEqual(vec3(3, 2, 1));
    expect(v.bgg).toEqual(vec3(3, 2, 2));
    expect(v.bgb).toEqual(vec3(3, 2, 3));
    expect(v.bga).toEqual(vec3(3, 2, 4));
    expect(v.bbr).toEqual(vec3(3, 3, 1));
    expect(v.bbg).toEqual(vec3(3, 3, 2));
    expect(v.bbb).toEqual(vec3(3, 3, 3));
    expect(v.bba).toEqual(vec3(3, 3, 4));
    expect(v.bar).toEqual(vec3(3, 4, 1));
    expect(v.bag).toEqual(vec3(3, 4, 2));
    expect(v.bab).toEqual(vec3(3, 4, 3));
    expect(v.baa).toEqual(vec3(3, 4, 4));
    expect(v.arr).toEqual(vec3(4, 1, 1));
    expect(v.arg).toEqual(vec3(4, 1, 2));
    expect(v.arb).toEqual(vec3(4, 1, 3));
    expect(v.ara).toEqual(vec3(4, 1, 4));
    expect(v.agr).toEqual(vec3(4, 2, 1));
    expect(v.agg).toEqual(vec3(4, 2, 2));
    expect(v.agb).toEqual(vec3(4, 2, 3));
    expect(v.aga).toEqual(vec3(4, 2, 4));
    expect(v.abr).toEqual(vec3(4, 3, 1));
    expect(v.abg).toEqual(vec3(4, 3, 2));
    expect(v.abb).toEqual(vec3(4, 3, 3));
    expect(v.aba).toEqual(vec3(4, 3, 4));
    expect(v.aar).toEqual(vec3(4, 4, 1));
    expect(v.aag).toEqual(vec3(4, 4, 2));
    expect(v.aab).toEqual(vec3(4, 4, 3));
    expect(v.aaa).toEqual(vec3(4, 4, 4));
    expect(v.sss).toEqual(vec3(1, 1, 1));
    expect(v.sst).toEqual(vec3(1, 1, 2));
    expect(v.ssp).toEqual(vec3(1, 1, 3));
    expect(v.ssq).toEqual(vec3(1, 1, 4));
    expect(v.sts).toEqual(vec3(1, 2, 1));
    expect(v.stt).toEqual(vec3(1, 2, 2));
    expect(v.stp).toEqual(vec3(1, 2, 3));
    expect(v.stq).toEqual(vec3(1, 2, 4));
    expect(v.sps).toEqual(vec3(1, 3, 1));
    expect(v.spt).toEqual(vec3(1, 3, 2));
    expect(v.spp).toEqual(vec3(1, 3, 3));
    expect(v.spq).toEqual(vec3(1, 3, 4));
    expect(v.sqs).toEqual(vec3(1, 4, 1));
    expect(v.sqt).toEqual(vec3(1, 4, 2));
    expect(v.sqp).toEqual(vec3(1, 4, 3));
    expect(v.sqq).toEqual(vec3(1, 4, 4));
    expect(v.tss).toEqual(vec3(2, 1, 1));
    expect(v.tst).toEqual(vec3(2, 1, 2));
    expect(v.tsp).toEqual(vec3(2, 1, 3));
    expect(v.tsq).toEqual(vec3(2, 1, 4));
    expect(v.tts).toEqual(vec3(2, 2, 1));
    expect(v.ttt).toEqual(vec3(2, 2, 2));
    expect(v.ttp).toEqual(vec3(2, 2, 3));
    expect(v.ttq).toEqual(vec3(2, 2, 4));
    expect(v.tps).toEqual(vec3(2, 3, 1));
    expect(v.tpt).toEqual(vec3(2, 3, 2));
    expect(v.tpp).toEqual(vec3(2, 3, 3));
    expect(v.tpq).toEqual(vec3(2, 3, 4));
    expect(v.tqs).toEqual(vec3(2, 4, 1));
    expect(v.tqt).toEqual(vec3(2, 4, 2));
    expect(v.tqp).toEqual(vec3(2, 4, 3));
    expect(v.tqq).toEqual(vec3(2, 4, 4));
    expect(v.pss).toEqual(vec3(3, 1, 1));
    expect(v.pst).toEqual(vec3(3, 1, 2));
    expect(v.psp).toEqual(vec3(3, 1, 3));
    expect(v.psq).toEqual(vec3(3, 1, 4));
    expect(v.pts).toEqual(vec3(3, 2, 1));
    expect(v.ptt).toEqual(vec3(3, 2, 2));
    expect(v.ptp).toEqual(vec3(3, 2, 3));
    expect(v.ptq).toEqual(vec3(3, 2, 4));
    expect(v.pps).toEqual(vec3(3, 3, 1));
    expect(v.ppt).toEqual(vec3(3, 3, 2));
    expect(v.ppp).toEqual(vec3(3, 3, 3));
    expect(v.ppq).toEqual(vec3(3, 3, 4));
    expect(v.pqs).toEqual(vec3(3, 4, 1));
    expect(v.pqt).toEqual(vec3(3, 4, 2));
    expect(v.pqp).toEqual(vec3(3, 4, 3));
    expect(v.pqq).toEqual(vec3(3, 4, 4));
    expect(v.qss).toEqual(vec3(4, 1, 1));
    expect(v.qst).toEqual(vec3(4, 1, 2));
    expect(v.qsp).toEqual(vec3(4, 1, 3));
    expect(v.qsq).toEqual(vec3(4, 1, 4));
    expect(v.qts).toEqual(vec3(4, 2, 1));
    expect(v.qtt).toEqual(vec3(4, 2, 2));
    expect(v.qtp).toEqual(vec3(4, 2, 3));
    expect(v.qtq).toEqual(vec3(4, 2, 4));
    expect(v.qps).toEqual(vec3(4, 3, 1));
    expect(v.qpt).toEqual(vec3(4, 3, 2));
    expect(v.qpp).toEqual(vec3(4, 3, 3));
    expect(v.qpq).toEqual(vec3(4, 3, 4));
    expect(v.qqs).toEqual(vec3(4, 4, 1));
    expect(v.qqt).toEqual(vec3(4, 4, 2));
    expect(v.qqp).toEqual(vec3(4, 4, 3));
    expect(v.qqq).toEqual(vec3(4, 4, 4));
    expect(v.xxxx).toEqual(vec4(1, 1, 1, 1));
    expect(v.xxxy).toEqual(vec4(1, 1, 1, 2));
    expect(v.xxxz).toEqual(vec4(1, 1, 1, 3));
    expect(v.xxxw).toEqual(vec4(1, 1, 1, 4));
    expect(v.xxyx).toEqual(vec4(1, 1, 2, 1));
    expect(v.xxyy).toEqual(vec4(1, 1, 2, 2));
    expect(v.xxyz).toEqual(vec4(1, 1, 2, 3));
    expect(v.xxyw).toEqual(vec4(1, 1, 2, 4));
    expect(v.xxzx).toEqual(vec4(1, 1, 3, 1));
    expect(v.xxzy).toEqual(vec4(1, 1, 3, 2));
    expect(v.xxzz).toEqual(vec4(1, 1, 3, 3));
    expect(v.xxzw).toEqual(vec4(1, 1, 3, 4));
    expect(v.xxwx).toEqual(vec4(1, 1, 4, 1));
    expect(v.xxwy).toEqual(vec4(1, 1, 4, 2));
    expect(v.xxwz).toEqual(vec4(1, 1, 4, 3));
    expect(v.xxww).toEqual(vec4(1, 1, 4, 4));
    expect(v.xyxx).toEqual(vec4(1, 2, 1, 1));
    expect(v.xyxy).toEqual(vec4(1, 2, 1, 2));
    expect(v.xyxz).toEqual(vec4(1, 2, 1, 3));
    expect(v.xyxw).toEqual(vec4(1, 2, 1, 4));
    expect(v.xyyx).toEqual(vec4(1, 2, 2, 1));
    expect(v.xyyy).toEqual(vec4(1, 2, 2, 2));
    expect(v.xyyz).toEqual(vec4(1, 2, 2, 3));
    expect(v.xyyw).toEqual(vec4(1, 2, 2, 4));
    expect(v.xyzx).toEqual(vec4(1, 2, 3, 1));
    expect(v.xyzy).toEqual(vec4(1, 2, 3, 2));
    expect(v.xyzz).toEqual(vec4(1, 2, 3, 3));
    expect(v.xyzw).toEqual(vec4(1, 2, 3, 4));
    expect(v.xywx).toEqual(vec4(1, 2, 4, 1));
    expect(v.xywy).toEqual(vec4(1, 2, 4, 2));
    expect(v.xywz).toEqual(vec4(1, 2, 4, 3));
    expect(v.xyww).toEqual(vec4(1, 2, 4, 4));
    expect(v.xzxx).toEqual(vec4(1, 3, 1, 1));
    expect(v.xzxy).toEqual(vec4(1, 3, 1, 2));
    expect(v.xzxz).toEqual(vec4(1, 3, 1, 3));
    expect(v.xzxw).toEqual(vec4(1, 3, 1, 4));
    expect(v.xzyx).toEqual(vec4(1, 3, 2, 1));
    expect(v.xzyy).toEqual(vec4(1, 3, 2, 2));
    expect(v.xzyz).toEqual(vec4(1, 3, 2, 3));
    expect(v.xzyw).toEqual(vec4(1, 3, 2, 4));
    expect(v.xzzx).toEqual(vec4(1, 3, 3, 1));
    expect(v.xzzy).toEqual(vec4(1, 3, 3, 2));
    expect(v.xzzz).toEqual(vec4(1, 3, 3, 3));
    expect(v.xzzw).toEqual(vec4(1, 3, 3, 4));
    expect(v.xzwx).toEqual(vec4(1, 3, 4, 1));
    expect(v.xzwy).toEqual(vec4(1, 3, 4, 2));
    expect(v.xzwz).toEqual(vec4(1, 3, 4, 3));
    expect(v.xzww).toEqual(vec4(1, 3, 4, 4));
    expect(v.xwxx).toEqual(vec4(1, 4, 1, 1));
    expect(v.xwxy).toEqual(vec4(1, 4, 1, 2));
    expect(v.xwxz).toEqual(vec4(1, 4, 1, 3));
    expect(v.xwxw).toEqual(vec4(1, 4, 1, 4));
    expect(v.xwyx).toEqual(vec4(1, 4, 2, 1));
    expect(v.xwyy).toEqual(vec4(1, 4, 2, 2));
    expect(v.xwyz).toEqual(vec4(1, 4, 2, 3));
    expect(v.xwyw).toEqual(vec4(1, 4, 2, 4));
    expect(v.xwzx).toEqual(vec4(1, 4, 3, 1));
    expect(v.xwzy).toEqual(vec4(1, 4, 3, 2));
    expect(v.xwzz).toEqual(vec4(1, 4, 3, 3));
    expect(v.xwzw).toEqual(vec4(1, 4, 3, 4));
    expect(v.xwwx).toEqual(vec4(1, 4, 4, 1));
    expect(v.xwwy).toEqual(vec4(1, 4, 4, 2));
    expect(v.xwwz).toEqual(vec4(1, 4, 4, 3));
    expect(v.xwww).toEqual(vec4(1, 4, 4, 4));
    expect(v.yxxx).toEqual(vec4(2, 1, 1, 1));
    expect(v.yxxy).toEqual(vec4(2, 1, 1, 2));
    expect(v.yxxz).toEqual(vec4(2, 1, 1, 3));
    expect(v.yxxw).toEqual(vec4(2, 1, 1, 4));
    expect(v.yxyx).toEqual(vec4(2, 1, 2, 1));
    expect(v.yxyy).toEqual(vec4(2, 1, 2, 2));
    expect(v.yxyz).toEqual(vec4(2, 1, 2, 3));
    expect(v.yxyw).toEqual(vec4(2, 1, 2, 4));
    expect(v.yxzx).toEqual(vec4(2, 1, 3, 1));
    expect(v.yxzy).toEqual(vec4(2, 1, 3, 2));
    expect(v.yxzz).toEqual(vec4(2, 1, 3, 3));
    expect(v.yxzw).toEqual(vec4(2, 1, 3, 4));
    expect(v.yxwx).toEqual(vec4(2, 1, 4, 1));
    expect(v.yxwy).toEqual(vec4(2, 1, 4, 2));
    expect(v.yxwz).toEqual(vec4(2, 1, 4, 3));
    expect(v.yxww).toEqual(vec4(2, 1, 4, 4));
    expect(v.yyxx).toEqual(vec4(2, 2, 1, 1));
    expect(v.yyxy).toEqual(vec4(2, 2, 1, 2));
    expect(v.yyxz).toEqual(vec4(2, 2, 1, 3));
    expect(v.yyxw).toEqual(vec4(2, 2, 1, 4));
    expect(v.yyyx).toEqual(vec4(2, 2, 2, 1));
    expect(v.yyyy).toEqual(vec4(2, 2, 2, 2));
    expect(v.yyyz).toEqual(vec4(2, 2, 2, 3));
    expect(v.yyyw).toEqual(vec4(2, 2, 2, 4));
    expect(v.yyzx).toEqual(vec4(2, 2, 3, 1));
    expect(v.yyzy).toEqual(vec4(2, 2, 3, 2));
    expect(v.yyzz).toEqual(vec4(2, 2, 3, 3));
    expect(v.yyzw).toEqual(vec4(2, 2, 3, 4));
    expect(v.yywx).toEqual(vec4(2, 2, 4, 1));
    expect(v.yywy).toEqual(vec4(2, 2, 4, 2));
    expect(v.yywz).toEqual(vec4(2, 2, 4, 3));
    expect(v.yyww).toEqual(vec4(2, 2, 4, 4));
    expect(v.yzxx).toEqual(vec4(2, 3, 1, 1));
    expect(v.yzxy).toEqual(vec4(2, 3, 1, 2));
    expect(v.yzxz).toEqual(vec4(2, 3, 1, 3));
    expect(v.yzxw).toEqual(vec4(2, 3, 1, 4));
    expect(v.yzyx).toEqual(vec4(2, 3, 2, 1));
    expect(v.yzyy).toEqual(vec4(2, 3, 2, 2));
    expect(v.yzyz).toEqual(vec4(2, 3, 2, 3));
    expect(v.yzyw).toEqual(vec4(2, 3, 2, 4));
    expect(v.yzzx).toEqual(vec4(2, 3, 3, 1));
    expect(v.yzzy).toEqual(vec4(2, 3, 3, 2));
    expect(v.yzzz).toEqual(vec4(2, 3, 3, 3));
    expect(v.yzzw).toEqual(vec4(2, 3, 3, 4));
    expect(v.yzwx).toEqual(vec4(2, 3, 4, 1));
    expect(v.yzwy).toEqual(vec4(2, 3, 4, 2));
    expect(v.yzwz).toEqual(vec4(2, 3, 4, 3));
    expect(v.yzww).toEqual(vec4(2, 3, 4, 4));
    expect(v.ywxx).toEqual(vec4(2, 4, 1, 1));
    expect(v.ywxy).toEqual(vec4(2, 4, 1, 2));
    expect(v.ywxz).toEqual(vec4(2, 4, 1, 3));
    expect(v.ywxw).toEqual(vec4(2, 4, 1, 4));
    expect(v.ywyx).toEqual(vec4(2, 4, 2, 1));
    expect(v.ywyy).toEqual(vec4(2, 4, 2, 2));
    expect(v.ywyz).toEqual(vec4(2, 4, 2, 3));
    expect(v.ywyw).toEqual(vec4(2, 4, 2, 4));
    expect(v.ywzx).toEqual(vec4(2, 4, 3, 1));
    expect(v.ywzy).toEqual(vec4(2, 4, 3, 2));
    expect(v.ywzz).toEqual(vec4(2, 4, 3, 3));
    expect(v.ywzw).toEqual(vec4(2, 4, 3, 4));
    expect(v.ywwx).toEqual(vec4(2, 4, 4, 1));
    expect(v.ywwy).toEqual(vec4(2, 4, 4, 2));
    expect(v.ywwz).toEqual(vec4(2, 4, 4, 3));
    expect(v.ywww).toEqual(vec4(2, 4, 4, 4));
    expect(v.zxxx).toEqual(vec4(3, 1, 1, 1));
    expect(v.zxxy).toEqual(vec4(3, 1, 1, 2));
    expect(v.zxxz).toEqual(vec4(3, 1, 1, 3));
    expect(v.zxxw).toEqual(vec4(3, 1, 1, 4));
    expect(v.zxyx).toEqual(vec4(3, 1, 2, 1));
    expect(v.zxyy).toEqual(vec4(3, 1, 2, 2));
    expect(v.zxyz).toEqual(vec4(3, 1, 2, 3));
    expect(v.zxyw).toEqual(vec4(3, 1, 2, 4));
    expect(v.zxzx).toEqual(vec4(3, 1, 3, 1));
    expect(v.zxzy).toEqual(vec4(3, 1, 3, 2));
    expect(v.zxzz).toEqual(vec4(3, 1, 3, 3));
    expect(v.zxzw).toEqual(vec4(3, 1, 3, 4));
    expect(v.zxwx).toEqual(vec4(3, 1, 4, 1));
    expect(v.zxwy).toEqual(vec4(3, 1, 4, 2));
    expect(v.zxwz).toEqual(vec4(3, 1, 4, 3));
    expect(v.zxww).toEqual(vec4(3, 1, 4, 4));
    expect(v.zyxx).toEqual(vec4(3, 2, 1, 1));
    expect(v.zyxy).toEqual(vec4(3, 2, 1, 2));
    expect(v.zyxz).toEqual(vec4(3, 2, 1, 3));
    expect(v.zyxw).toEqual(vec4(3, 2, 1, 4));
    expect(v.zyyx).toEqual(vec4(3, 2, 2, 1));
    expect(v.zyyy).toEqual(vec4(3, 2, 2, 2));
    expect(v.zyyz).toEqual(vec4(3, 2, 2, 3));
    expect(v.zyyw).toEqual(vec4(3, 2, 2, 4));
    expect(v.zyzx).toEqual(vec4(3, 2, 3, 1));
    expect(v.zyzy).toEqual(vec4(3, 2, 3, 2));
    expect(v.zyzz).toEqual(vec4(3, 2, 3, 3));
    expect(v.zyzw).toEqual(vec4(3, 2, 3, 4));
    expect(v.zywx).toEqual(vec4(3, 2, 4, 1));
    expect(v.zywy).toEqual(vec4(3, 2, 4, 2));
    expect(v.zywz).toEqual(vec4(3, 2, 4, 3));
    expect(v.zyww).toEqual(vec4(3, 2, 4, 4));
    expect(v.zzxx).toEqual(vec4(3, 3, 1, 1));
    expect(v.zzxy).toEqual(vec4(3, 3, 1, 2));
    expect(v.zzxz).toEqual(vec4(3, 3, 1, 3));
    expect(v.zzxw).toEqual(vec4(3, 3, 1, 4));
    expect(v.zzyx).toEqual(vec4(3, 3, 2, 1));
    expect(v.zzyy).toEqual(vec4(3, 3, 2, 2));
    expect(v.zzyz).toEqual(vec4(3, 3, 2, 3));
    expect(v.zzyw).toEqual(vec4(3, 3, 2, 4));
    expect(v.zzzx).toEqual(vec4(3, 3, 3, 1));
    expect(v.zzzy).toEqual(vec4(3, 3, 3, 2));
    expect(v.zzzz).toEqual(vec4(3, 3, 3, 3));
    expect(v.zzzw).toEqual(vec4(3, 3, 3, 4));
    expect(v.zzwx).toEqual(vec4(3, 3, 4, 1));
    expect(v.zzwy).toEqual(vec4(3, 3, 4, 2));
    expect(v.zzwz).toEqual(vec4(3, 3, 4, 3));
    expect(v.zzww).toEqual(vec4(3, 3, 4, 4));
    expect(v.zwxx).toEqual(vec4(3, 4, 1, 1));
    expect(v.zwxy).toEqual(vec4(3, 4, 1, 2));
    expect(v.zwxz).toEqual(vec4(3, 4, 1, 3));
    expect(v.zwxw).toEqual(vec4(3, 4, 1, 4));
    expect(v.zwyx).toEqual(vec4(3, 4, 2, 1));
    expect(v.zwyy).toEqual(vec4(3, 4, 2, 2));
    expect(v.zwyz).toEqual(vec4(3, 4, 2, 3));
    expect(v.zwyw).toEqual(vec4(3, 4, 2, 4));
    expect(v.zwzx).toEqual(vec4(3, 4, 3, 1));
    expect(v.zwzy).toEqual(vec4(3, 4, 3, 2));
    expect(v.zwzz).toEqual(vec4(3, 4, 3, 3));
    expect(v.zwzw).toEqual(vec4(3, 4, 3, 4));
    expect(v.zwwx).toEqual(vec4(3, 4, 4, 1));
    expect(v.zwwy).toEqual(vec4(3, 4, 4, 2));
    expect(v.zwwz).toEqual(vec4(3, 4, 4, 3));
    expect(v.zwww).toEqual(vec4(3, 4, 4, 4));
    expect(v.wxxx).toEqual(vec4(4, 1, 1, 1));
    expect(v.wxxy).toEqual(vec4(4, 1, 1, 2));
    expect(v.wxxz).toEqual(vec4(4, 1, 1, 3));
    expect(v.wxxw).toEqual(vec4(4, 1, 1, 4));
    expect(v.wxyx).toEqual(vec4(4, 1, 2, 1));
    expect(v.wxyy).toEqual(vec4(4, 1, 2, 2));
    expect(v.wxyz).toEqual(vec4(4, 1, 2, 3));
    expect(v.wxyw).toEqual(vec4(4, 1, 2, 4));
    expect(v.wxzx).toEqual(vec4(4, 1, 3, 1));
    expect(v.wxzy).toEqual(vec4(4, 1, 3, 2));
    expect(v.wxzz).toEqual(vec4(4, 1, 3, 3));
    expect(v.wxzw).toEqual(vec4(4, 1, 3, 4));
    expect(v.wxwx).toEqual(vec4(4, 1, 4, 1));
    expect(v.wxwy).toEqual(vec4(4, 1, 4, 2));
    expect(v.wxwz).toEqual(vec4(4, 1, 4, 3));
    expect(v.wxww).toEqual(vec4(4, 1, 4, 4));
    expect(v.wyxx).toEqual(vec4(4, 2, 1, 1));
    expect(v.wyxy).toEqual(vec4(4, 2, 1, 2));
    expect(v.wyxz).toEqual(vec4(4, 2, 1, 3));
    expect(v.wyxw).toEqual(vec4(4, 2, 1, 4));
    expect(v.wyyx).toEqual(vec4(4, 2, 2, 1));
    expect(v.wyyy).toEqual(vec4(4, 2, 2, 2));
    expect(v.wyyz).toEqual(vec4(4, 2, 2, 3));
    expect(v.wyyw).toEqual(vec4(4, 2, 2, 4));
    expect(v.wyzx).toEqual(vec4(4, 2, 3, 1));
    expect(v.wyzy).toEqual(vec4(4, 2, 3, 2));
    expect(v.wyzz).toEqual(vec4(4, 2, 3, 3));
    expect(v.wyzw).toEqual(vec4(4, 2, 3, 4));
    expect(v.wywx).toEqual(vec4(4, 2, 4, 1));
    expect(v.wywy).toEqual(vec4(4, 2, 4, 2));
    expect(v.wywz).toEqual(vec4(4, 2, 4, 3));
    expect(v.wyww).toEqual(vec4(4, 2, 4, 4));
    expect(v.wzxx).toEqual(vec4(4, 3, 1, 1));
    expect(v.wzxy).toEqual(vec4(4, 3, 1, 2));
    expect(v.wzxz).toEqual(vec4(4, 3, 1, 3));
    expect(v.wzxw).toEqual(vec4(4, 3, 1, 4));
    expect(v.wzyx).toEqual(vec4(4, 3, 2, 1));
    expect(v.wzyy).toEqual(vec4(4, 3, 2, 2));
    expect(v.wzyz).toEqual(vec4(4, 3, 2, 3));
    expect(v.wzyw).toEqual(vec4(4, 3, 2, 4));
    expect(v.wzzx).toEqual(vec4(4, 3, 3, 1));
    expect(v.wzzy).toEqual(vec4(4, 3, 3, 2));
    expect(v.wzzz).toEqual(vec4(4, 3, 3, 3));
    expect(v.wzzw).toEqual(vec4(4, 3, 3, 4));
    expect(v.wzwx).toEqual(vec4(4, 3, 4, 1));
    expect(v.wzwy).toEqual(vec4(4, 3, 4, 2));
    expect(v.wzwz).toEqual(vec4(4, 3, 4, 3));
    expect(v.wzww).toEqual(vec4(4, 3, 4, 4));
    expect(v.wwxx).toEqual(vec4(4, 4, 1, 1));
    expect(v.wwxy).toEqual(vec4(4, 4, 1, 2));
    expect(v.wwxz).toEqual(vec4(4, 4, 1, 3));
    expect(v.wwxw).toEqual(vec4(4, 4, 1, 4));
    expect(v.wwyx).toEqual(vec4(4, 4, 2, 1));
    expect(v.wwyy).toEqual(vec4(4, 4, 2, 2));
    expect(v.wwyz).toEqual(vec4(4, 4, 2, 3));
    expect(v.wwyw).toEqual(vec4(4, 4, 2, 4));
    expect(v.wwzx).toEqual(vec4(4, 4, 3, 1));
    expect(v.wwzy).toEqual(vec4(4, 4, 3, 2));
    expect(v.wwzz).toEqual(vec4(4, 4, 3, 3));
    expect(v.wwzw).toEqual(vec4(4, 4, 3, 4));
    expect(v.wwwx).toEqual(vec4(4, 4, 4, 1));
    expect(v.wwwy).toEqual(vec4(4, 4, 4, 2));
    expect(v.wwwz).toEqual(vec4(4, 4, 4, 3));
    expect(v.wwww).toEqual(vec4(4, 4, 4, 4));
    expect(v.rrrr).toEqual(vec4(1, 1, 1, 1));
    expect(v.rrrg).toEqual(vec4(1, 1, 1, 2));
    expect(v.rrrb).toEqual(vec4(1, 1, 1, 3));
    expect(v.rrra).toEqual(vec4(1, 1, 1, 4));
    expect(v.rrgr).toEqual(vec4(1, 1, 2, 1));
    expect(v.rrgg).toEqual(vec4(1, 1, 2, 2));
    expect(v.rrgb).toEqual(vec4(1, 1, 2, 3));
    expect(v.rrga).toEqual(vec4(1, 1, 2, 4));
    expect(v.rrbr).toEqual(vec4(1, 1, 3, 1));
    expect(v.rrbg).toEqual(vec4(1, 1, 3, 2));
    expect(v.rrbb).toEqual(vec4(1, 1, 3, 3));
    expect(v.rrba).toEqual(vec4(1, 1, 3, 4));
    expect(v.rrar).toEqual(vec4(1, 1, 4, 1));
    expect(v.rrag).toEqual(vec4(1, 1, 4, 2));
    expect(v.rrab).toEqual(vec4(1, 1, 4, 3));
    expect(v.rraa).toEqual(vec4(1, 1, 4, 4));
    expect(v.rgrr).toEqual(vec4(1, 2, 1, 1));
    expect(v.rgrg).toEqual(vec4(1, 2, 1, 2));
    expect(v.rgrb).toEqual(vec4(1, 2, 1, 3));
    expect(v.rgra).toEqual(vec4(1, 2, 1, 4));
    expect(v.rggr).toEqual(vec4(1, 2, 2, 1));
    expect(v.rggg).toEqual(vec4(1, 2, 2, 2));
    expect(v.rggb).toEqual(vec4(1, 2, 2, 3));
    expect(v.rgga).toEqual(vec4(1, 2, 2, 4));
    expect(v.rgbr).toEqual(vec4(1, 2, 3, 1));
    expect(v.rgbg).toEqual(vec4(1, 2, 3, 2));
    expect(v.rgbb).toEqual(vec4(1, 2, 3, 3));
    expect(v.rgba).toEqual(vec4(1, 2, 3, 4));
    expect(v.rgar).toEqual(vec4(1, 2, 4, 1));
    expect(v.rgag).toEqual(vec4(1, 2, 4, 2));
    expect(v.rgab).toEqual(vec4(1, 2, 4, 3));
    expect(v.rgaa).toEqual(vec4(1, 2, 4, 4));
    expect(v.rbrr).toEqual(vec4(1, 3, 1, 1));
    expect(v.rbrg).toEqual(vec4(1, 3, 1, 2));
    expect(v.rbrb).toEqual(vec4(1, 3, 1, 3));
    expect(v.rbra).toEqual(vec4(1, 3, 1, 4));
    expect(v.rbgr).toEqual(vec4(1, 3, 2, 1));
    expect(v.rbgg).toEqual(vec4(1, 3, 2, 2));
    expect(v.rbgb).toEqual(vec4(1, 3, 2, 3));
    expect(v.rbga).toEqual(vec4(1, 3, 2, 4));
    expect(v.rbbr).toEqual(vec4(1, 3, 3, 1));
    expect(v.rbbg).toEqual(vec4(1, 3, 3, 2));
    expect(v.rbbb).toEqual(vec4(1, 3, 3, 3));
    expect(v.rbba).toEqual(vec4(1, 3, 3, 4));
    expect(v.rbar).toEqual(vec4(1, 3, 4, 1));
    expect(v.rbag).toEqual(vec4(1, 3, 4, 2));
    expect(v.rbab).toEqual(vec4(1, 3, 4, 3));
    expect(v.rbaa).toEqual(vec4(1, 3, 4, 4));
    expect(v.rarr).toEqual(vec4(1, 4, 1, 1));
    expect(v.rarg).toEqual(vec4(1, 4, 1, 2));
    expect(v.rarb).toEqual(vec4(1, 4, 1, 3));
    expect(v.rara).toEqual(vec4(1, 4, 1, 4));
    expect(v.ragr).toEqual(vec4(1, 4, 2, 1));
    expect(v.ragg).toEqual(vec4(1, 4, 2, 2));
    expect(v.ragb).toEqual(vec4(1, 4, 2, 3));
    expect(v.raga).toEqual(vec4(1, 4, 2, 4));
    expect(v.rabr).toEqual(vec4(1, 4, 3, 1));
    expect(v.rabg).toEqual(vec4(1, 4, 3, 2));
    expect(v.rabb).toEqual(vec4(1, 4, 3, 3));
    expect(v.raba).toEqual(vec4(1, 4, 3, 4));
    expect(v.raar).toEqual(vec4(1, 4, 4, 1));
    expect(v.raag).toEqual(vec4(1, 4, 4, 2));
    expect(v.raab).toEqual(vec4(1, 4, 4, 3));
    expect(v.raaa).toEqual(vec4(1, 4, 4, 4));
    expect(v.grrr).toEqual(vec4(2, 1, 1, 1));
    expect(v.grrg).toEqual(vec4(2, 1, 1, 2));
    expect(v.grrb).toEqual(vec4(2, 1, 1, 3));
    expect(v.grra).toEqual(vec4(2, 1, 1, 4));
    expect(v.grgr).toEqual(vec4(2, 1, 2, 1));
    expect(v.grgg).toEqual(vec4(2, 1, 2, 2));
    expect(v.grgb).toEqual(vec4(2, 1, 2, 3));
    expect(v.grga).toEqual(vec4(2, 1, 2, 4));
    expect(v.grbr).toEqual(vec4(2, 1, 3, 1));
    expect(v.grbg).toEqual(vec4(2, 1, 3, 2));
    expect(v.grbb).toEqual(vec4(2, 1, 3, 3));
    expect(v.grba).toEqual(vec4(2, 1, 3, 4));
    expect(v.grar).toEqual(vec4(2, 1, 4, 1));
    expect(v.grag).toEqual(vec4(2, 1, 4, 2));
    expect(v.grab).toEqual(vec4(2, 1, 4, 3));
    expect(v.graa).toEqual(vec4(2, 1, 4, 4));
    expect(v.ggrr).toEqual(vec4(2, 2, 1, 1));
    expect(v.ggrg).toEqual(vec4(2, 2, 1, 2));
    expect(v.ggrb).toEqual(vec4(2, 2, 1, 3));
    expect(v.ggra).toEqual(vec4(2, 2, 1, 4));
    expect(v.gggr).toEqual(vec4(2, 2, 2, 1));
    expect(v.gggg).toEqual(vec4(2, 2, 2, 2));
    expect(v.gggb).toEqual(vec4(2, 2, 2, 3));
    expect(v.ggga).toEqual(vec4(2, 2, 2, 4));
    expect(v.ggbr).toEqual(vec4(2, 2, 3, 1));
    expect(v.ggbg).toEqual(vec4(2, 2, 3, 2));
    expect(v.ggbb).toEqual(vec4(2, 2, 3, 3));
    expect(v.ggba).toEqual(vec4(2, 2, 3, 4));
    expect(v.ggar).toEqual(vec4(2, 2, 4, 1));
    expect(v.ggag).toEqual(vec4(2, 2, 4, 2));
    expect(v.ggab).toEqual(vec4(2, 2, 4, 3));
    expect(v.ggaa).toEqual(vec4(2, 2, 4, 4));
    expect(v.gbrr).toEqual(vec4(2, 3, 1, 1));
    expect(v.gbrg).toEqual(vec4(2, 3, 1, 2));
    expect(v.gbrb).toEqual(vec4(2, 3, 1, 3));
    expect(v.gbra).toEqual(vec4(2, 3, 1, 4));
    expect(v.gbgr).toEqual(vec4(2, 3, 2, 1));
    expect(v.gbgg).toEqual(vec4(2, 3, 2, 2));
    expect(v.gbgb).toEqual(vec4(2, 3, 2, 3));
    expect(v.gbga).toEqual(vec4(2, 3, 2, 4));
    expect(v.gbbr).toEqual(vec4(2, 3, 3, 1));
    expect(v.gbbg).toEqual(vec4(2, 3, 3, 2));
    expect(v.gbbb).toEqual(vec4(2, 3, 3, 3));
    expect(v.gbba).toEqual(vec4(2, 3, 3, 4));
    expect(v.gbar).toEqual(vec4(2, 3, 4, 1));
    expect(v.gbag).toEqual(vec4(2, 3, 4, 2));
    expect(v.gbab).toEqual(vec4(2, 3, 4, 3));
    expect(v.gbaa).toEqual(vec4(2, 3, 4, 4));
    expect(v.garr).toEqual(vec4(2, 4, 1, 1));
    expect(v.garg).toEqual(vec4(2, 4, 1, 2));
    expect(v.garb).toEqual(vec4(2, 4, 1, 3));
    expect(v.gara).toEqual(vec4(2, 4, 1, 4));
    expect(v.gagr).toEqual(vec4(2, 4, 2, 1));
    expect(v.gagg).toEqual(vec4(2, 4, 2, 2));
    expect(v.gagb).toEqual(vec4(2, 4, 2, 3));
    expect(v.gaga).toEqual(vec4(2, 4, 2, 4));
    expect(v.gabr).toEqual(vec4(2, 4, 3, 1));
    expect(v.gabg).toEqual(vec4(2, 4, 3, 2));
    expect(v.gabb).toEqual(vec4(2, 4, 3, 3));
    expect(v.gaba).toEqual(vec4(2, 4, 3, 4));
    expect(v.gaar).toEqual(vec4(2, 4, 4, 1));
    expect(v.gaag).toEqual(vec4(2, 4, 4, 2));
    expect(v.gaab).toEqual(vec4(2, 4, 4, 3));
    expect(v.gaaa).toEqual(vec4(2, 4, 4, 4));
    expect(v.brrr).toEqual(vec4(3, 1, 1, 1));
    expect(v.brrg).toEqual(vec4(3, 1, 1, 2));
    expect(v.brrb).toEqual(vec4(3, 1, 1, 3));
    expect(v.brra).toEqual(vec4(3, 1, 1, 4));
    expect(v.brgr).toEqual(vec4(3, 1, 2, 1));
    expect(v.brgg).toEqual(vec4(3, 1, 2, 2));
    expect(v.brgb).toEqual(vec4(3, 1, 2, 3));
    expect(v.brga).toEqual(vec4(3, 1, 2, 4));
    expect(v.brbr).toEqual(vec4(3, 1, 3, 1));
    expect(v.brbg).toEqual(vec4(3, 1, 3, 2));
    expect(v.brbb).toEqual(vec4(3, 1, 3, 3));
    expect(v.brba).toEqual(vec4(3, 1, 3, 4));
    expect(v.brar).toEqual(vec4(3, 1, 4, 1));
    expect(v.brag).toEqual(vec4(3, 1, 4, 2));
    expect(v.brab).toEqual(vec4(3, 1, 4, 3));
    expect(v.braa).toEqual(vec4(3, 1, 4, 4));
    expect(v.bgrr).toEqual(vec4(3, 2, 1, 1));
    expect(v.bgrg).toEqual(vec4(3, 2, 1, 2));
    expect(v.bgrb).toEqual(vec4(3, 2, 1, 3));
    expect(v.bgra).toEqual(vec4(3, 2, 1, 4));
    expect(v.bggr).toEqual(vec4(3, 2, 2, 1));
    expect(v.bggg).toEqual(vec4(3, 2, 2, 2));
    expect(v.bggb).toEqual(vec4(3, 2, 2, 3));
    expect(v.bgga).toEqual(vec4(3, 2, 2, 4));
    expect(v.bgbr).toEqual(vec4(3, 2, 3, 1));
    expect(v.bgbg).toEqual(vec4(3, 2, 3, 2));
    expect(v.bgbb).toEqual(vec4(3, 2, 3, 3));
    expect(v.bgba).toEqual(vec4(3, 2, 3, 4));
    expect(v.bgar).toEqual(vec4(3, 2, 4, 1));
    expect(v.bgag).toEqual(vec4(3, 2, 4, 2));
    expect(v.bgab).toEqual(vec4(3, 2, 4, 3));
    expect(v.bgaa).toEqual(vec4(3, 2, 4, 4));
    expect(v.bbrr).toEqual(vec4(3, 3, 1, 1));
    expect(v.bbrg).toEqual(vec4(3, 3, 1, 2));
    expect(v.bbrb).toEqual(vec4(3, 3, 1, 3));
    expect(v.bbra).toEqual(vec4(3, 3, 1, 4));
    expect(v.bbgr).toEqual(vec4(3, 3, 2, 1));
    expect(v.bbgg).toEqual(vec4(3, 3, 2, 2));
    expect(v.bbgb).toEqual(vec4(3, 3, 2, 3));
    expect(v.bbga).toEqual(vec4(3, 3, 2, 4));
    expect(v.bbbr).toEqual(vec4(3, 3, 3, 1));
    expect(v.bbbg).toEqual(vec4(3, 3, 3, 2));
    expect(v.bbbb).toEqual(vec4(3, 3, 3, 3));
    expect(v.bbba).toEqual(vec4(3, 3, 3, 4));
    expect(v.bbar).toEqual(vec4(3, 3, 4, 1));
    expect(v.bbag).toEqual(vec4(3, 3, 4, 2));
    expect(v.bbab).toEqual(vec4(3, 3, 4, 3));
    expect(v.bbaa).toEqual(vec4(3, 3, 4, 4));
    expect(v.barr).toEqual(vec4(3, 4, 1, 1));
    expect(v.barg).toEqual(vec4(3, 4, 1, 2));
    expect(v.barb).toEqual(vec4(3, 4, 1, 3));
    expect(v.bara).toEqual(vec4(3, 4, 1, 4));
    expect(v.bagr).toEqual(vec4(3, 4, 2, 1));
    expect(v.bagg).toEqual(vec4(3, 4, 2, 2));
    expect(v.bagb).toEqual(vec4(3, 4, 2, 3));
    expect(v.baga).toEqual(vec4(3, 4, 2, 4));
    expect(v.babr).toEqual(vec4(3, 4, 3, 1));
    expect(v.babg).toEqual(vec4(3, 4, 3, 2));
    expect(v.babb).toEqual(vec4(3, 4, 3, 3));
    expect(v.baba).toEqual(vec4(3, 4, 3, 4));
    expect(v.baar).toEqual(vec4(3, 4, 4, 1));
    expect(v.baag).toEqual(vec4(3, 4, 4, 2));
    expect(v.baab).toEqual(vec4(3, 4, 4, 3));
    expect(v.baaa).toEqual(vec4(3, 4, 4, 4));
    expect(v.arrr).toEqual(vec4(4, 1, 1, 1));
    expect(v.arrg).toEqual(vec4(4, 1, 1, 2));
    expect(v.arrb).toEqual(vec4(4, 1, 1, 3));
    expect(v.arra).toEqual(vec4(4, 1, 1, 4));
    expect(v.argr).toEqual(vec4(4, 1, 2, 1));
    expect(v.argg).toEqual(vec4(4, 1, 2, 2));
    expect(v.argb).toEqual(vec4(4, 1, 2, 3));
    expect(v.arga).toEqual(vec4(4, 1, 2, 4));
    expect(v.arbr).toEqual(vec4(4, 1, 3, 1));
    expect(v.arbg).toEqual(vec4(4, 1, 3, 2));
    expect(v.arbb).toEqual(vec4(4, 1, 3, 3));
    expect(v.arba).toEqual(vec4(4, 1, 3, 4));
    expect(v.arar).toEqual(vec4(4, 1, 4, 1));
    expect(v.arag).toEqual(vec4(4, 1, 4, 2));
    expect(v.arab).toEqual(vec4(4, 1, 4, 3));
    expect(v.araa).toEqual(vec4(4, 1, 4, 4));
    expect(v.agrr).toEqual(vec4(4, 2, 1, 1));
    expect(v.agrg).toEqual(vec4(4, 2, 1, 2));
    expect(v.agrb).toEqual(vec4(4, 2, 1, 3));
    expect(v.agra).toEqual(vec4(4, 2, 1, 4));
    expect(v.aggr).toEqual(vec4(4, 2, 2, 1));
    expect(v.aggg).toEqual(vec4(4, 2, 2, 2));
    expect(v.aggb).toEqual(vec4(4, 2, 2, 3));
    expect(v.agga).toEqual(vec4(4, 2, 2, 4));
    expect(v.agbr).toEqual(vec4(4, 2, 3, 1));
    expect(v.agbg).toEqual(vec4(4, 2, 3, 2));
    expect(v.agbb).toEqual(vec4(4, 2, 3, 3));
    expect(v.agba).toEqual(vec4(4, 2, 3, 4));
    expect(v.agar).toEqual(vec4(4, 2, 4, 1));
    expect(v.agag).toEqual(vec4(4, 2, 4, 2));
    expect(v.agab).toEqual(vec4(4, 2, 4, 3));
    expect(v.agaa).toEqual(vec4(4, 2, 4, 4));
    expect(v.abrr).toEqual(vec4(4, 3, 1, 1));
    expect(v.abrg).toEqual(vec4(4, 3, 1, 2));
    expect(v.abrb).toEqual(vec4(4, 3, 1, 3));
    expect(v.abra).toEqual(vec4(4, 3, 1, 4));
    expect(v.abgr).toEqual(vec4(4, 3, 2, 1));
    expect(v.abgg).toEqual(vec4(4, 3, 2, 2));
    expect(v.abgb).toEqual(vec4(4, 3, 2, 3));
    expect(v.abga).toEqual(vec4(4, 3, 2, 4));
    expect(v.abbr).toEqual(vec4(4, 3, 3, 1));
    expect(v.abbg).toEqual(vec4(4, 3, 3, 2));
    expect(v.abbb).toEqual(vec4(4, 3, 3, 3));
    expect(v.abba).toEqual(vec4(4, 3, 3, 4));
    expect(v.abar).toEqual(vec4(4, 3, 4, 1));
    expect(v.abag).toEqual(vec4(4, 3, 4, 2));
    expect(v.abab).toEqual(vec4(4, 3, 4, 3));
    expect(v.abaa).toEqual(vec4(4, 3, 4, 4));
    expect(v.aarr).toEqual(vec4(4, 4, 1, 1));
    expect(v.aarg).toEqual(vec4(4, 4, 1, 2));
    expect(v.aarb).toEqual(vec4(4, 4, 1, 3));
    expect(v.aara).toEqual(vec4(4, 4, 1, 4));
    expect(v.aagr).toEqual(vec4(4, 4, 2, 1));
    expect(v.aagg).toEqual(vec4(4, 4, 2, 2));
    expect(v.aagb).toEqual(vec4(4, 4, 2, 3));
    expect(v.aaga).toEqual(vec4(4, 4, 2, 4));
    expect(v.aabr).toEqual(vec4(4, 4, 3, 1));
    expect(v.aabg).toEqual(vec4(4, 4, 3, 2));
    expect(v.aabb).toEqual(vec4(4, 4, 3, 3));
    expect(v.aaba).toEqual(vec4(4, 4, 3, 4));
    expect(v.aaar).toEqual(vec4(4, 4, 4, 1));
    expect(v.aaag).toEqual(vec4(4, 4, 4, 2));
    expect(v.aaab).toEqual(vec4(4, 4, 4, 3));
    expect(v.aaaa).toEqual(vec4(4, 4, 4, 4));
    expect(v.ssss).toEqual(vec4(1, 1, 1, 1));
    expect(v.ssst).toEqual(vec4(1, 1, 1, 2));
    expect(v.sssp).toEqual(vec4(1, 1, 1, 3));
    expect(v.sssq).toEqual(vec4(1, 1, 1, 4));
    expect(v.ssts).toEqual(vec4(1, 1, 2, 1));
    expect(v.sstt).toEqual(vec4(1, 1, 2, 2));
    expect(v.sstp).toEqual(vec4(1, 1, 2, 3));
    expect(v.sstq).toEqual(vec4(1, 1, 2, 4));
    expect(v.ssps).toEqual(vec4(1, 1, 3, 1));
    expect(v.sspt).toEqual(vec4(1, 1, 3, 2));
    expect(v.sspp).toEqual(vec4(1, 1, 3, 3));
    expect(v.sspq).toEqual(vec4(1, 1, 3, 4));
    expect(v.ssqs).toEqual(vec4(1, 1, 4, 1));
    expect(v.ssqt).toEqual(vec4(1, 1, 4, 2));
    expect(v.ssqp).toEqual(vec4(1, 1, 4, 3));
    expect(v.ssqq).toEqual(vec4(1, 1, 4, 4));
    expect(v.stss).toEqual(vec4(1, 2, 1, 1));
    expect(v.stst).toEqual(vec4(1, 2, 1, 2));
    expect(v.stsp).toEqual(vec4(1, 2, 1, 3));
    expect(v.stsq).toEqual(vec4(1, 2, 1, 4));
    expect(v.stts).toEqual(vec4(1, 2, 2, 1));
    expect(v.sttt).toEqual(vec4(1, 2, 2, 2));
    expect(v.sttp).toEqual(vec4(1, 2, 2, 3));
    expect(v.sttq).toEqual(vec4(1, 2, 2, 4));
    expect(v.stps).toEqual(vec4(1, 2, 3, 1));
    expect(v.stpt).toEqual(vec4(1, 2, 3, 2));
    expect(v.stpp).toEqual(vec4(1, 2, 3, 3));
    expect(v.stpq).toEqual(vec4(1, 2, 3, 4));
    expect(v.stqs).toEqual(vec4(1, 2, 4, 1));
    expect(v.stqt).toEqual(vec4(1, 2, 4, 2));
    expect(v.stqp).toEqual(vec4(1, 2, 4, 3));
    expect(v.stqq).toEqual(vec4(1, 2, 4, 4));
    expect(v.spss).toEqual(vec4(1, 3, 1, 1));
    expect(v.spst).toEqual(vec4(1, 3, 1, 2));
    expect(v.spsp).toEqual(vec4(1, 3, 1, 3));
    expect(v.spsq).toEqual(vec4(1, 3, 1, 4));
    expect(v.spts).toEqual(vec4(1, 3, 2, 1));
    expect(v.sptt).toEqual(vec4(1, 3, 2, 2));
    expect(v.sptp).toEqual(vec4(1, 3, 2, 3));
    expect(v.sptq).toEqual(vec4(1, 3, 2, 4));
    expect(v.spps).toEqual(vec4(1, 3, 3, 1));
    expect(v.sppt).toEqual(vec4(1, 3, 3, 2));
    expect(v.sppp).toEqual(vec4(1, 3, 3, 3));
    expect(v.sppq).toEqual(vec4(1, 3, 3, 4));
    expect(v.spqs).toEqual(vec4(1, 3, 4, 1));
    expect(v.spqt).toEqual(vec4(1, 3, 4, 2));
    expect(v.spqp).toEqual(vec4(1, 3, 4, 3));
    expect(v.spqq).toEqual(vec4(1, 3, 4, 4));
    expect(v.sqss).toEqual(vec4(1, 4, 1, 1));
    expect(v.sqst).toEqual(vec4(1, 4, 1, 2));
    expect(v.sqsp).toEqual(vec4(1, 4, 1, 3));
    expect(v.sqsq).toEqual(vec4(1, 4, 1, 4));
    expect(v.sqts).toEqual(vec4(1, 4, 2, 1));
    expect(v.sqtt).toEqual(vec4(1, 4, 2, 2));
    expect(v.sqtp).toEqual(vec4(1, 4, 2, 3));
    expect(v.sqtq).toEqual(vec4(1, 4, 2, 4));
    expect(v.sqps).toEqual(vec4(1, 4, 3, 1));
    expect(v.sqpt).toEqual(vec4(1, 4, 3, 2));
    expect(v.sqpp).toEqual(vec4(1, 4, 3, 3));
    expect(v.sqpq).toEqual(vec4(1, 4, 3, 4));
    expect(v.sqqs).toEqual(vec4(1, 4, 4, 1));
    expect(v.sqqt).toEqual(vec4(1, 4, 4, 2));
    expect(v.sqqp).toEqual(vec4(1, 4, 4, 3));
    expect(v.sqqq).toEqual(vec4(1, 4, 4, 4));
    expect(v.tsss).toEqual(vec4(2, 1, 1, 1));
    expect(v.tsst).toEqual(vec4(2, 1, 1, 2));
    expect(v.tssp).toEqual(vec4(2, 1, 1, 3));
    expect(v.tssq).toEqual(vec4(2, 1, 1, 4));
    expect(v.tsts).toEqual(vec4(2, 1, 2, 1));
    expect(v.tstt).toEqual(vec4(2, 1, 2, 2));
    expect(v.tstp).toEqual(vec4(2, 1, 2, 3));
    expect(v.tstq).toEqual(vec4(2, 1, 2, 4));
    expect(v.tsps).toEqual(vec4(2, 1, 3, 1));
    expect(v.tspt).toEqual(vec4(2, 1, 3, 2));
    expect(v.tspp).toEqual(vec4(2, 1, 3, 3));
    expect(v.tspq).toEqual(vec4(2, 1, 3, 4));
    expect(v.tsqs).toEqual(vec4(2, 1, 4, 1));
    expect(v.tsqt).toEqual(vec4(2, 1, 4, 2));
    expect(v.tsqp).toEqual(vec4(2, 1, 4, 3));
    expect(v.tsqq).toEqual(vec4(2, 1, 4, 4));
    expect(v.ttss).toEqual(vec4(2, 2, 1, 1));
    expect(v.ttst).toEqual(vec4(2, 2, 1, 2));
    expect(v.ttsp).toEqual(vec4(2, 2, 1, 3));
    expect(v.ttsq).toEqual(vec4(2, 2, 1, 4));
    expect(v.ttts).toEqual(vec4(2, 2, 2, 1));
    expect(v.tttt).toEqual(vec4(2, 2, 2, 2));
    expect(v.tttp).toEqual(vec4(2, 2, 2, 3));
    expect(v.tttq).toEqual(vec4(2, 2, 2, 4));
    expect(v.ttps).toEqual(vec4(2, 2, 3, 1));
    expect(v.ttpt).toEqual(vec4(2, 2, 3, 2));
    expect(v.ttpp).toEqual(vec4(2, 2, 3, 3));
    expect(v.ttpq).toEqual(vec4(2, 2, 3, 4));
    expect(v.ttqs).toEqual(vec4(2, 2, 4, 1));
    expect(v.ttqt).toEqual(vec4(2, 2, 4, 2));
    expect(v.ttqp).toEqual(vec4(2, 2, 4, 3));
    expect(v.ttqq).toEqual(vec4(2, 2, 4, 4));
    expect(v.tpss).toEqual(vec4(2, 3, 1, 1));
    expect(v.tpst).toEqual(vec4(2, 3, 1, 2));
    expect(v.tpsp).toEqual(vec4(2, 3, 1, 3));
    expect(v.tpsq).toEqual(vec4(2, 3, 1, 4));
    expect(v.tpts).toEqual(vec4(2, 3, 2, 1));
    expect(v.tptt).toEqual(vec4(2, 3, 2, 2));
    expect(v.tptp).toEqual(vec4(2, 3, 2, 3));
    expect(v.tptq).toEqual(vec4(2, 3, 2, 4));
    expect(v.tpps).toEqual(vec4(2, 3, 3, 1));
    expect(v.tppt).toEqual(vec4(2, 3, 3, 2));
    expect(v.tppp).toEqual(vec4(2, 3, 3, 3));
    expect(v.tppq).toEqual(vec4(2, 3, 3, 4));
    expect(v.tpqs).toEqual(vec4(2, 3, 4, 1));
    expect(v.tpqt).toEqual(vec4(2, 3, 4, 2));
    expect(v.tpqp).toEqual(vec4(2, 3, 4, 3));
    expect(v.tpqq).toEqual(vec4(2, 3, 4, 4));
    expect(v.tqss).toEqual(vec4(2, 4, 1, 1));
    expect(v.tqst).toEqual(vec4(2, 4, 1, 2));
    expect(v.tqsp).toEqual(vec4(2, 4, 1, 3));
    expect(v.tqsq).toEqual(vec4(2, 4, 1, 4));
    expect(v.tqts).toEqual(vec4(2, 4, 2, 1));
    expect(v.tqtt).toEqual(vec4(2, 4, 2, 2));
    expect(v.tqtp).toEqual(vec4(2, 4, 2, 3));
    expect(v.tqtq).toEqual(vec4(2, 4, 2, 4));
    expect(v.tqps).toEqual(vec4(2, 4, 3, 1));
    expect(v.tqpt).toEqual(vec4(2, 4, 3, 2));
    expect(v.tqpp).toEqual(vec4(2, 4, 3, 3));
    expect(v.tqpq).toEqual(vec4(2, 4, 3, 4));
    expect(v.tqqs).toEqual(vec4(2, 4, 4, 1));
    expect(v.tqqt).toEqual(vec4(2, 4, 4, 2));
    expect(v.tqqp).toEqual(vec4(2, 4, 4, 3));
    expect(v.tqqq).toEqual(vec4(2, 4, 4, 4));
    expect(v.psss).toEqual(vec4(3, 1, 1, 1));
    expect(v.psst).toEqual(vec4(3, 1, 1, 2));
    expect(v.pssp).toEqual(vec4(3, 1, 1, 3));
    expect(v.pssq).toEqual(vec4(3, 1, 1, 4));
    expect(v.psts).toEqual(vec4(3, 1, 2, 1));
    expect(v.pstt).toEqual(vec4(3, 1, 2, 2));
    expect(v.pstp).toEqual(vec4(3, 1, 2, 3));
    expect(v.pstq).toEqual(vec4(3, 1, 2, 4));
    expect(v.psps).toEqual(vec4(3, 1, 3, 1));
    expect(v.pspt).toEqual(vec4(3, 1, 3, 2));
    expect(v.pspp).toEqual(vec4(3, 1, 3, 3));
    expect(v.pspq).toEqual(vec4(3, 1, 3, 4));
    expect(v.psqs).toEqual(vec4(3, 1, 4, 1));
    expect(v.psqt).toEqual(vec4(3, 1, 4, 2));
    expect(v.psqp).toEqual(vec4(3, 1, 4, 3));
    expect(v.psqq).toEqual(vec4(3, 1, 4, 4));
    expect(v.ptss).toEqual(vec4(3, 2, 1, 1));
    expect(v.ptst).toEqual(vec4(3, 2, 1, 2));
    expect(v.ptsp).toEqual(vec4(3, 2, 1, 3));
    expect(v.ptsq).toEqual(vec4(3, 2, 1, 4));
    expect(v.ptts).toEqual(vec4(3, 2, 2, 1));
    expect(v.pttt).toEqual(vec4(3, 2, 2, 2));
    expect(v.pttp).toEqual(vec4(3, 2, 2, 3));
    expect(v.pttq).toEqual(vec4(3, 2, 2, 4));
    expect(v.ptps).toEqual(vec4(3, 2, 3, 1));
    expect(v.ptpt).toEqual(vec4(3, 2, 3, 2));
    expect(v.ptpp).toEqual(vec4(3, 2, 3, 3));
    expect(v.ptpq).toEqual(vec4(3, 2, 3, 4));
    expect(v.ptqs).toEqual(vec4(3, 2, 4, 1));
    expect(v.ptqt).toEqual(vec4(3, 2, 4, 2));
    expect(v.ptqp).toEqual(vec4(3, 2, 4, 3));
    expect(v.ptqq).toEqual(vec4(3, 2, 4, 4));
    expect(v.ppss).toEqual(vec4(3, 3, 1, 1));
    expect(v.ppst).toEqual(vec4(3, 3, 1, 2));
    expect(v.ppsp).toEqual(vec4(3, 3, 1, 3));
    expect(v.ppsq).toEqual(vec4(3, 3, 1, 4));
    expect(v.ppts).toEqual(vec4(3, 3, 2, 1));
    expect(v.pptt).toEqual(vec4(3, 3, 2, 2));
    expect(v.pptp).toEqual(vec4(3, 3, 2, 3));
    expect(v.pptq).toEqual(vec4(3, 3, 2, 4));
    expect(v.ppps).toEqual(vec4(3, 3, 3, 1));
    expect(v.pppt).toEqual(vec4(3, 3, 3, 2));
    expect(v.pppp).toEqual(vec4(3, 3, 3, 3));
    expect(v.pppq).toEqual(vec4(3, 3, 3, 4));
    expect(v.ppqs).toEqual(vec4(3, 3, 4, 1));
    expect(v.ppqt).toEqual(vec4(3, 3, 4, 2));
    expect(v.ppqp).toEqual(vec4(3, 3, 4, 3));
    expect(v.ppqq).toEqual(vec4(3, 3, 4, 4));
    expect(v.pqss).toEqual(vec4(3, 4, 1, 1));
    expect(v.pqst).toEqual(vec4(3, 4, 1, 2));
    expect(v.pqsp).toEqual(vec4(3, 4, 1, 3));
    expect(v.pqsq).toEqual(vec4(3, 4, 1, 4));
    expect(v.pqts).toEqual(vec4(3, 4, 2, 1));
    expect(v.pqtt).toEqual(vec4(3, 4, 2, 2));
    expect(v.pqtp).toEqual(vec4(3, 4, 2, 3));
    expect(v.pqtq).toEqual(vec4(3, 4, 2, 4));
    expect(v.pqps).toEqual(vec4(3, 4, 3, 1));
    expect(v.pqpt).toEqual(vec4(3, 4, 3, 2));
    expect(v.pqpp).toEqual(vec4(3, 4, 3, 3));
    expect(v.pqpq).toEqual(vec4(3, 4, 3, 4));
    expect(v.pqqs).toEqual(vec4(3, 4, 4, 1));
    expect(v.pqqt).toEqual(vec4(3, 4, 4, 2));
    expect(v.pqqp).toEqual(vec4(3, 4, 4, 3));
    expect(v.pqqq).toEqual(vec4(3, 4, 4, 4));
    expect(v.qsss).toEqual(vec4(4, 1, 1, 1));
    expect(v.qsst).toEqual(vec4(4, 1, 1, 2));
    expect(v.qssp).toEqual(vec4(4, 1, 1, 3));
    expect(v.qssq).toEqual(vec4(4, 1, 1, 4));
    expect(v.qsts).toEqual(vec4(4, 1, 2, 1));
    expect(v.qstt).toEqual(vec4(4, 1, 2, 2));
    expect(v.qstp).toEqual(vec4(4, 1, 2, 3));
    expect(v.qstq).toEqual(vec4(4, 1, 2, 4));
    expect(v.qsps).toEqual(vec4(4, 1, 3, 1));
    expect(v.qspt).toEqual(vec4(4, 1, 3, 2));
    expect(v.qspp).toEqual(vec4(4, 1, 3, 3));
    expect(v.qspq).toEqual(vec4(4, 1, 3, 4));
    expect(v.qsqs).toEqual(vec4(4, 1, 4, 1));
    expect(v.qsqt).toEqual(vec4(4, 1, 4, 2));
    expect(v.qsqp).toEqual(vec4(4, 1, 4, 3));
    expect(v.qsqq).toEqual(vec4(4, 1, 4, 4));
    expect(v.qtss).toEqual(vec4(4, 2, 1, 1));
    expect(v.qtst).toEqual(vec4(4, 2, 1, 2));
    expect(v.qtsp).toEqual(vec4(4, 2, 1, 3));
    expect(v.qtsq).toEqual(vec4(4, 2, 1, 4));
    expect(v.qtts).toEqual(vec4(4, 2, 2, 1));
    expect(v.qttt).toEqual(vec4(4, 2, 2, 2));
    expect(v.qttp).toEqual(vec4(4, 2, 2, 3));
    expect(v.qttq).toEqual(vec4(4, 2, 2, 4));
    expect(v.qtps).toEqual(vec4(4, 2, 3, 1));
    expect(v.qtpt).toEqual(vec4(4, 2, 3, 2));
    expect(v.qtpp).toEqual(vec4(4, 2, 3, 3));
    expect(v.qtpq).toEqual(vec4(4, 2, 3, 4));
    expect(v.qtqs).toEqual(vec4(4, 2, 4, 1));
    expect(v.qtqt).toEqual(vec4(4, 2, 4, 2));
    expect(v.qtqp).toEqual(vec4(4, 2, 4, 3));
    expect(v.qtqq).toEqual(vec4(4, 2, 4, 4));
    expect(v.qpss).toEqual(vec4(4, 3, 1, 1));
    expect(v.qpst).toEqual(vec4(4, 3, 1, 2));
    expect(v.qpsp).toEqual(vec4(4, 3, 1, 3));
    expect(v.qpsq).toEqual(vec4(4, 3, 1, 4));
    expect(v.qpts).toEqual(vec4(4, 3, 2, 1));
    expect(v.qptt).toEqual(vec4(4, 3, 2, 2));
    expect(v.qptp).toEqual(vec4(4, 3, 2, 3));
    expect(v.qptq).toEqual(vec4(4, 3, 2, 4));
    expect(v.qpps).toEqual(vec4(4, 3, 3, 1));
    expect(v.qppt).toEqual(vec4(4, 3, 3, 2));
    expect(v.qppp).toEqual(vec4(4, 3, 3, 3));
    expect(v.qppq).toEqual(vec4(4, 3, 3, 4));
    expect(v.qpqs).toEqual(vec4(4, 3, 4, 1));
    expect(v.qpqt).toEqual(vec4(4, 3, 4, 2));
    expect(v.qpqp).toEqual(vec4(4, 3, 4, 3));
    expect(v.qpqq).toEqual(vec4(4, 3, 4, 4));
    expect(v.qqss).toEqual(vec4(4, 4, 1, 1));
    expect(v.qqst).toEqual(vec4(4, 4, 1, 2));
    expect(v.qqsp).toEqual(vec4(4, 4, 1, 3));
    expect(v.qqsq).toEqual(vec4(4, 4, 1, 4));
    expect(v.qqts).toEqual(vec4(4, 4, 2, 1));
    expect(v.qqtt).toEqual(vec4(4, 4, 2, 2));
    expect(v.qqtp).toEqual(vec4(4, 4, 2, 3));
    expect(v.qqtq).toEqual(vec4(4, 4, 2, 4));
    expect(v.qqps).toEqual(vec4(4, 4, 3, 1));
    expect(v.qqpt).toEqual(vec4(4, 4, 3, 2));
    expect(v.qqpp).toEqual(vec4(4, 4, 3, 3));
    expect(v.qqpq).toEqual(vec4(4, 4, 3, 4));
    expect(v.qqqs).toEqual(vec4(4, 4, 4, 1));
    expect(v.qqqt).toEqual(vec4(4, 4, 4, 2));
    expect(v.qqqp).toEqual(vec4(4, 4, 4, 3));
    expect(v.qqqq).toEqual(vec4(4, 4, 4, 4));
  });

  it.each<{
    swizzleMask:
      | 'x'
      | 'y'
      | 'z'
      | 'w'
      | 'r'
      | 'g'
      | 'b'
      | 'a'
      | 's'
      | 't'
      | 'p'
      | 'q';
    expected: vec4;
  }>([
    { swizzleMask: 'x', expected: vec4(1, 0, 0, 0) },
    { swizzleMask: 'y', expected: vec4(0, 1, 0, 0) },
    { swizzleMask: 'z', expected: vec4(0, 0, 1, 0) },
    { swizzleMask: 'w', expected: vec4(0, 0, 0, 1) },
    { swizzleMask: 'r', expected: vec4(1, 0, 0, 0) },
    { swizzleMask: 'g', expected: vec4(0, 1, 0, 0) },
    { swizzleMask: 'b', expected: vec4(0, 0, 1, 0) },
    { swizzleMask: 'a', expected: vec4(0, 0, 0, 1) },
    { swizzleMask: 's', expected: vec4(1, 0, 0, 0) },
    { swizzleMask: 't', expected: vec4(0, 1, 0, 0) },
    { swizzleMask: 'p', expected: vec4(0, 0, 1, 0) },
    { swizzleMask: 'q', expected: vec4(0, 0, 0, 1) },
  ])(
    'should support write swizzling with one component',
    ({ swizzleMask, expected }) => {
      const v = vec4(0);

      v[swizzleMask] = 1;

      expect(v).toEqual(expected);
    }
  );

  it.each<{
    swizzleMask:
      | 'xy'
      | 'xz'
      | 'xw'
      | 'yx'
      | 'yz'
      | 'yw'
      | 'zx'
      | 'zy'
      | 'zw'
      | 'wx'
      | 'wy'
      | 'wz'
      | 'rg'
      | 'rb'
      | 'ra'
      | 'gr'
      | 'gb'
      | 'ga'
      | 'br'
      | 'bg'
      | 'ba'
      | 'ar'
      | 'ag'
      | 'ab'
      | 'st'
      | 'sp'
      | 'sq'
      | 'ts'
      | 'tp'
      | 'tq'
      | 'ps'
      | 'pt'
      | 'pq'
      | 'qs'
      | 'qt'
      | 'qp';
    expected: vec4;
  }>([
    { swizzleMask: 'xy', expected: vec4(1, 2, 0, 0) },
    { swizzleMask: 'xz', expected: vec4(1, 0, 2, 0) },
    { swizzleMask: 'xw', expected: vec4(1, 0, 0, 2) },
    { swizzleMask: 'yx', expected: vec4(2, 1, 0, 0) },
    { swizzleMask: 'yz', expected: vec4(0, 1, 2, 0) },
    { swizzleMask: 'yw', expected: vec4(0, 1, 0, 2) },
    { swizzleMask: 'zx', expected: vec4(2, 0, 1, 0) },
    { swizzleMask: 'zy', expected: vec4(0, 2, 1, 0) },
    { swizzleMask: 'zw', expected: vec4(0, 0, 1, 2) },
    { swizzleMask: 'wx', expected: vec4(2, 0, 0, 1) },
    { swizzleMask: 'wy', expected: vec4(0, 2, 0, 1) },
    { swizzleMask: 'wz', expected: vec4(0, 0, 2, 1) },
    { swizzleMask: 'rg', expected: vec4(1, 2, 0, 0) },
    { swizzleMask: 'rb', expected: vec4(1, 0, 2, 0) },
    { swizzleMask: 'ra', expected: vec4(1, 0, 0, 2) },
    { swizzleMask: 'gr', expected: vec4(2, 1, 0, 0) },
    { swizzleMask: 'gb', expected: vec4(0, 1, 2, 0) },
    { swizzleMask: 'ga', expected: vec4(0, 1, 0, 2) },
    { swizzleMask: 'br', expected: vec4(2, 0, 1, 0) },
    { swizzleMask: 'bg', expected: vec4(0, 2, 1, 0) },
    { swizzleMask: 'ba', expected: vec4(0, 0, 1, 2) },
    { swizzleMask: 'ar', expected: vec4(2, 0, 0, 1) },
    { swizzleMask: 'ag', expected: vec4(0, 2, 0, 1) },
    { swizzleMask: 'ab', expected: vec4(0, 0, 2, 1) },
    { swizzleMask: 'st', expected: vec4(1, 2, 0, 0) },
    { swizzleMask: 'sp', expected: vec4(1, 0, 2, 0) },
    { swizzleMask: 'sq', expected: vec4(1, 0, 0, 2) },
    { swizzleMask: 'ts', expected: vec4(2, 1, 0, 0) },
    { swizzleMask: 'tp', expected: vec4(0, 1, 2, 0) },
    { swizzleMask: 'tq', expected: vec4(0, 1, 0, 2) },
    { swizzleMask: 'ps', expected: vec4(2, 0, 1, 0) },
    { swizzleMask: 'pt', expected: vec4(0, 2, 1, 0) },
    { swizzleMask: 'pq', expected: vec4(0, 0, 1, 2) },
    { swizzleMask: 'qs', expected: vec4(2, 0, 0, 1) },
    { swizzleMask: 'qt', expected: vec4(0, 2, 0, 1) },
    { swizzleMask: 'qp', expected: vec4(0, 0, 2, 1) },
  ])(
    'should support write swizzling with two components',
    ({ swizzleMask, expected }) => {
      const v = vec4(0);

      v[swizzleMask] = vec2(1, 2);

      expect(v).toEqual(expected);
    }
  );

  it.each<{
    swizzleMask:
      | 'xyz'
      | 'xyw'
      | 'xzy'
      | 'xzw'
      | 'xwy'
      | 'xwz'
      | 'yxz'
      | 'yxw'
      | 'yzx'
      | 'yzw'
      | 'ywx'
      | 'ywz'
      | 'zxy'
      | 'zxw'
      | 'zyx'
      | 'zyw'
      | 'zwx'
      | 'zwy'
      | 'wxy'
      | 'wxz'
      | 'wyx'
      | 'wyz'
      | 'wzx'
      | 'wzy'
      | 'rgb'
      | 'rga'
      | 'rbg'
      | 'rba'
      | 'rag'
      | 'rab'
      | 'grb'
      | 'gra'
      | 'gbr'
      | 'gba'
      | 'gar'
      | 'gab'
      | 'brg'
      | 'bra'
      | 'bgr'
      | 'bga'
      | 'bar'
      | 'bag'
      | 'arg'
      | 'arb'
      | 'agr'
      | 'agb'
      | 'abr'
      | 'abg'
      | 'stp'
      | 'stq'
      | 'spt'
      | 'spq'
      | 'sqt'
      | 'sqp'
      | 'tsp'
      | 'tsq'
      | 'tps'
      | 'tpq'
      | 'tqs'
      | 'tqp'
      | 'pst'
      | 'psq'
      | 'pts'
      | 'ptq'
      | 'pqs'
      | 'pqt'
      | 'qst'
      | 'qsp'
      | 'qts'
      | 'qtp'
      | 'qps'
      | 'qpt';
    expected: vec4;
  }>([
    { swizzleMask: 'xyz', expected: vec4(1, 2, 3, 0) },
    { swizzleMask: 'xyw', expected: vec4(1, 2, 0, 3) },
    { swizzleMask: 'xzy', expected: vec4(1, 3, 2, 0) },
    { swizzleMask: 'xzw', expected: vec4(1, 0, 2, 3) },
    { swizzleMask: 'xwy', expected: vec4(1, 3, 0, 2) },
    { swizzleMask: 'xwz', expected: vec4(1, 0, 3, 2) },
    { swizzleMask: 'yxz', expected: vec4(2, 1, 3, 0) },
    { swizzleMask: 'yxw', expected: vec4(2, 1, 0, 3) },
    { swizzleMask: 'yzx', expected: vec4(3, 1, 2, 0) },
    { swizzleMask: 'yzw', expected: vec4(0, 1, 2, 3) },
    { swizzleMask: 'ywx', expected: vec4(3, 1, 0, 2) },
    { swizzleMask: 'ywz', expected: vec4(0, 1, 3, 2) },
    { swizzleMask: 'zxy', expected: vec4(2, 3, 1, 0) },
    { swizzleMask: 'zxw', expected: vec4(2, 0, 1, 3) },
    { swizzleMask: 'zyx', expected: vec4(3, 2, 1, 0) },
    { swizzleMask: 'zyw', expected: vec4(0, 2, 1, 3) },
    { swizzleMask: 'zwx', expected: vec4(3, 0, 1, 2) },
    { swizzleMask: 'zwy', expected: vec4(0, 3, 1, 2) },
    { swizzleMask: 'wxy', expected: vec4(2, 3, 0, 1) },
    { swizzleMask: 'wxz', expected: vec4(2, 0, 3, 1) },
    { swizzleMask: 'wyx', expected: vec4(3, 2, 0, 1) },
    { swizzleMask: 'wyz', expected: vec4(0, 2, 3, 1) },
    { swizzleMask: 'wzx', expected: vec4(3, 0, 2, 1) },
    { swizzleMask: 'wzy', expected: vec4(0, 3, 2, 1) },
    { swizzleMask: 'rgb', expected: vec4(1, 2, 3, 0) },
    { swizzleMask: 'rga', expected: vec4(1, 2, 0, 3) },
    { swizzleMask: 'rbg', expected: vec4(1, 3, 2, 0) },
    { swizzleMask: 'rba', expected: vec4(1, 0, 2, 3) },
    { swizzleMask: 'rag', expected: vec4(1, 3, 0, 2) },
    { swizzleMask: 'rab', expected: vec4(1, 0, 3, 2) },
    { swizzleMask: 'grb', expected: vec4(2, 1, 3, 0) },
    { swizzleMask: 'gra', expected: vec4(2, 1, 0, 3) },
    { swizzleMask: 'gbr', expected: vec4(3, 1, 2, 0) },
    { swizzleMask: 'gba', expected: vec4(0, 1, 2, 3) },
    { swizzleMask: 'gar', expected: vec4(3, 1, 0, 2) },
    { swizzleMask: 'gab', expected: vec4(0, 1, 3, 2) },
    { swizzleMask: 'brg', expected: vec4(2, 3, 1, 0) },
    { swizzleMask: 'bra', expected: vec4(2, 0, 1, 3) },
    { swizzleMask: 'bgr', expected: vec4(3, 2, 1, 0) },
    { swizzleMask: 'bga', expected: vec4(0, 2, 1, 3) },
    { swizzleMask: 'bar', expected: vec4(3, 0, 1, 2) },
    { swizzleMask: 'bag', expected: vec4(0, 3, 1, 2) },
    { swizzleMask: 'arg', expected: vec4(2, 3, 0, 1) },
    { swizzleMask: 'arb', expected: vec4(2, 0, 3, 1) },
    { swizzleMask: 'agr', expected: vec4(3, 2, 0, 1) },
    { swizzleMask: 'agb', expected: vec4(0, 2, 3, 1) },
    { swizzleMask: 'abr', expected: vec4(3, 0, 2, 1) },
    { swizzleMask: 'abg', expected: vec4(0, 3, 2, 1) },
    { swizzleMask: 'stp', expected: vec4(1, 2, 3, 0) },
    { swizzleMask: 'stq', expected: vec4(1, 2, 0, 3) },
    { swizzleMask: 'spt', expected: vec4(1, 3, 2, 0) },
    { swizzleMask: 'spq', expected: vec4(1, 0, 2, 3) },
    { swizzleMask: 'sqt', expected: vec4(1, 3, 0, 2) },
    { swizzleMask: 'sqp', expected: vec4(1, 0, 3, 2) },
    { swizzleMask: 'tsp', expected: vec4(2, 1, 3, 0) },
    { swizzleMask: 'tsq', expected: vec4(2, 1, 0, 3) },
    { swizzleMask: 'tps', expected: vec4(3, 1, 2, 0) },
    { swizzleMask: 'tpq', expected: vec4(0, 1, 2, 3) },
    { swizzleMask: 'tqs', expected: vec4(3, 1, 0, 2) },
    { swizzleMask: 'tqp', expected: vec4(0, 1, 3, 2) },
    { swizzleMask: 'pst', expected: vec4(2, 3, 1, 0) },
    { swizzleMask: 'psq', expected: vec4(2, 0, 1, 3) },
    { swizzleMask: 'pts', expected: vec4(3, 2, 1, 0) },
    { swizzleMask: 'ptq', expected: vec4(0, 2, 1, 3) },
    { swizzleMask: 'pqs', expected: vec4(3, 0, 1, 2) },
    { swizzleMask: 'pqt', expected: vec4(0, 3, 1, 2) },
    { swizzleMask: 'qst', expected: vec4(2, 3, 0, 1) },
    { swizzleMask: 'qsp', expected: vec4(2, 0, 3, 1) },
    { swizzleMask: 'qts', expected: vec4(3, 2, 0, 1) },
    { swizzleMask: 'qtp', expected: vec4(0, 2, 3, 1) },
    { swizzleMask: 'qps', expected: vec4(3, 0, 2, 1) },
    { swizzleMask: 'qpt', expected: vec4(0, 3, 2, 1) },
  ])(
    'should support write swizzling with three components',
    ({ swizzleMask, expected }) => {
      const v = vec4(0);

      v[swizzleMask] = vec3(1, 2, 3);

      expect(v).toEqual(expected);
    }
  );

  it.each<{
    swizzleMask:
      | 'xyzw'
      | 'xywz'
      | 'xzyw'
      | 'xzwy'
      | 'xwyz'
      | 'xwzy'
      | 'yxzw'
      | 'yxwz'
      | 'yzxw'
      | 'yzwx'
      | 'ywxz'
      | 'ywzx'
      | 'zxyw'
      | 'zxwy'
      | 'zyxw'
      | 'zywx'
      | 'zwxy'
      | 'zwyx'
      | 'wxyz'
      | 'wxzy'
      | 'wyxz'
      | 'wyzx'
      | 'wzxy'
      | 'wzyx'
      | 'rgba'
      | 'rgab'
      | 'rbga'
      | 'rbag'
      | 'ragb'
      | 'rabg'
      | 'grba'
      | 'grab'
      | 'gbra'
      | 'gbar'
      | 'garb'
      | 'gabr'
      | 'brga'
      | 'brag'
      | 'bgra'
      | 'bgar'
      | 'barg'
      | 'bagr'
      | 'argb'
      | 'arbg'
      | 'agrb'
      | 'agbr'
      | 'abrg'
      | 'abgr'
      | 'stpq'
      | 'stqp'
      | 'sptq'
      | 'spqt'
      | 'sqtp'
      | 'sqpt'
      | 'tspq'
      | 'tsqp'
      | 'tpsq'
      | 'tpqs'
      | 'tqsp'
      | 'tqps'
      | 'pstq'
      | 'psqt'
      | 'ptsq'
      | 'ptqs'
      | 'pqst'
      | 'pqts'
      | 'qstp'
      | 'qspt'
      | 'qtsp'
      | 'qtps'
      | 'qpst'
      | 'qpts';
    expected: vec4;
  }>([
    { swizzleMask: 'xyzw', expected: vec4(1, 2, 3, 4) },
    { swizzleMask: 'xywz', expected: vec4(1, 2, 4, 3) },
    { swizzleMask: 'xzyw', expected: vec4(1, 3, 2, 4) },
    { swizzleMask: 'xzwy', expected: vec4(1, 4, 2, 3) },
    { swizzleMask: 'xwyz', expected: vec4(1, 3, 4, 2) },
    { swizzleMask: 'xwzy', expected: vec4(1, 4, 3, 2) },
    { swizzleMask: 'yxzw', expected: vec4(2, 1, 3, 4) },
    { swizzleMask: 'yxwz', expected: vec4(2, 1, 4, 3) },
    { swizzleMask: 'yzxw', expected: vec4(3, 1, 2, 4) },
    { swizzleMask: 'yzwx', expected: vec4(4, 1, 2, 3) },
    { swizzleMask: 'ywxz', expected: vec4(3, 1, 4, 2) },
    { swizzleMask: 'ywzx', expected: vec4(4, 1, 3, 2) },
    { swizzleMask: 'zxyw', expected: vec4(2, 3, 1, 4) },
    { swizzleMask: 'zxwy', expected: vec4(2, 4, 1, 3) },
    { swizzleMask: 'zyxw', expected: vec4(3, 2, 1, 4) },
    { swizzleMask: 'zywx', expected: vec4(4, 2, 1, 3) },
    { swizzleMask: 'zwxy', expected: vec4(3, 4, 1, 2) },
    { swizzleMask: 'zwyx', expected: vec4(4, 3, 1, 2) },
    { swizzleMask: 'wxyz', expected: vec4(2, 3, 4, 1) },
    { swizzleMask: 'wxzy', expected: vec4(2, 4, 3, 1) },
    { swizzleMask: 'wyxz', expected: vec4(3, 2, 4, 1) },
    { swizzleMask: 'wyzx', expected: vec4(4, 2, 3, 1) },
    { swizzleMask: 'wzxy', expected: vec4(3, 4, 2, 1) },
    { swizzleMask: 'wzyx', expected: vec4(4, 3, 2, 1) },
    { swizzleMask: 'rgba', expected: vec4(1, 2, 3, 4) },
    { swizzleMask: 'rgab', expected: vec4(1, 2, 4, 3) },
    { swizzleMask: 'rbga', expected: vec4(1, 3, 2, 4) },
    { swizzleMask: 'rbag', expected: vec4(1, 4, 2, 3) },
    { swizzleMask: 'ragb', expected: vec4(1, 3, 4, 2) },
    { swizzleMask: 'rabg', expected: vec4(1, 4, 3, 2) },
    { swizzleMask: 'grba', expected: vec4(2, 1, 3, 4) },
    { swizzleMask: 'grab', expected: vec4(2, 1, 4, 3) },
    { swizzleMask: 'gbra', expected: vec4(3, 1, 2, 4) },
    { swizzleMask: 'gbar', expected: vec4(4, 1, 2, 3) },
    { swizzleMask: 'garb', expected: vec4(3, 1, 4, 2) },
    { swizzleMask: 'gabr', expected: vec4(4, 1, 3, 2) },
    { swizzleMask: 'brga', expected: vec4(2, 3, 1, 4) },
    { swizzleMask: 'brag', expected: vec4(2, 4, 1, 3) },
    { swizzleMask: 'bgra', expected: vec4(3, 2, 1, 4) },
    { swizzleMask: 'bgar', expected: vec4(4, 2, 1, 3) },
    { swizzleMask: 'barg', expected: vec4(3, 4, 1, 2) },
    { swizzleMask: 'bagr', expected: vec4(4, 3, 1, 2) },
    { swizzleMask: 'argb', expected: vec4(2, 3, 4, 1) },
    { swizzleMask: 'arbg', expected: vec4(2, 4, 3, 1) },
    { swizzleMask: 'agrb', expected: vec4(3, 2, 4, 1) },
    { swizzleMask: 'agbr', expected: vec4(4, 2, 3, 1) },
    { swizzleMask: 'abrg', expected: vec4(3, 4, 2, 1) },
    { swizzleMask: 'abgr', expected: vec4(4, 3, 2, 1) },
    { swizzleMask: 'stpq', expected: vec4(1, 2, 3, 4) },
    { swizzleMask: 'stqp', expected: vec4(1, 2, 4, 3) },
    { swizzleMask: 'sptq', expected: vec4(1, 3, 2, 4) },
    { swizzleMask: 'spqt', expected: vec4(1, 4, 2, 3) },
    { swizzleMask: 'sqtp', expected: vec4(1, 3, 4, 2) },
    { swizzleMask: 'sqpt', expected: vec4(1, 4, 3, 2) },
    { swizzleMask: 'tspq', expected: vec4(2, 1, 3, 4) },
    { swizzleMask: 'tsqp', expected: vec4(2, 1, 4, 3) },
    { swizzleMask: 'tpsq', expected: vec4(3, 1, 2, 4) },
    { swizzleMask: 'tpqs', expected: vec4(4, 1, 2, 3) },
    { swizzleMask: 'tqsp', expected: vec4(3, 1, 4, 2) },
    { swizzleMask: 'tqps', expected: vec4(4, 1, 3, 2) },
    { swizzleMask: 'pstq', expected: vec4(2, 3, 1, 4) },
    { swizzleMask: 'psqt', expected: vec4(2, 4, 1, 3) },
    { swizzleMask: 'ptsq', expected: vec4(3, 2, 1, 4) },
    { swizzleMask: 'ptqs', expected: vec4(4, 2, 1, 3) },
    { swizzleMask: 'pqst', expected: vec4(3, 4, 1, 2) },
    { swizzleMask: 'pqts', expected: vec4(4, 3, 1, 2) },
    { swizzleMask: 'qstp', expected: vec4(2, 3, 4, 1) },
    { swizzleMask: 'qspt', expected: vec4(2, 4, 3, 1) },
    { swizzleMask: 'qtsp', expected: vec4(3, 2, 4, 1) },
    { swizzleMask: 'qtps', expected: vec4(4, 2, 3, 1) },
    { swizzleMask: 'qpst', expected: vec4(3, 4, 2, 1) },
    { swizzleMask: 'qpts', expected: vec4(4, 3, 2, 1) },
  ])(
    'should support write swizzling with four components',
    ({ swizzleMask, expected }) => {
      const v = vec4(0);

      v[swizzleMask] = vec4(1, 2, 3, 4);

      expect(v).toEqual(expected);
    }
  );
});
