import { permutations, product } from '@miniengine/itertools';
import { SwizzleComponent } from './swizzle-component';
import { vec2 } from './vec2';
import { vec3 } from './vec3';

export type vec4 = [number, number, number, number] & {
  x: number;
  y: number;
  z: number;
  w: number;
  r: number;
  g: number;
  b: number;
  a: number;
  s: number;
  t: number;
  p: number;
  q: number;
  xx: vec2;
  xy: vec2;
  xz: vec2;
  xw: vec2;
  yx: vec2;
  yy: vec2;
  yz: vec2;
  yw: vec2;
  zx: vec2;
  zy: vec2;
  zz: vec2;
  zw: vec2;
  wx: vec2;
  wy: vec2;
  wz: vec2;
  ww: vec2;
  rr: vec2;
  rg: vec2;
  rb: vec2;
  ra: vec2;
  gr: vec2;
  gg: vec2;
  gb: vec2;
  ga: vec2;
  br: vec2;
  bg: vec2;
  bb: vec2;
  ba: vec2;
  ar: vec2;
  ag: vec2;
  ab: vec2;
  aa: vec2;
  ss: vec2;
  st: vec2;
  sp: vec2;
  sq: vec2;
  ts: vec2;
  tt: vec2;
  tp: vec2;
  tq: vec2;
  ps: vec2;
  pt: vec2;
  pp: vec2;
  pq: vec2;
  qs: vec2;
  qt: vec2;
  qp: vec2;
  qq: vec2;
  xxx: vec3;
  xxy: vec3;
  xxz: vec3;
  xxw: vec3;
  xyx: vec3;
  xyy: vec3;
  xyz: vec3;
  xyw: vec3;
  xzx: vec3;
  xzy: vec3;
  xzz: vec3;
  xzw: vec3;
  xwx: vec3;
  xwy: vec3;
  xwz: vec3;
  xww: vec3;
  yxx: vec3;
  yxy: vec3;
  yxz: vec3;
  yxw: vec3;
  yyx: vec3;
  yyy: vec3;
  yyz: vec3;
  yyw: vec3;
  yzx: vec3;
  yzy: vec3;
  yzz: vec3;
  yzw: vec3;
  ywx: vec3;
  ywy: vec3;
  ywz: vec3;
  yww: vec3;
  zxx: vec3;
  zxy: vec3;
  zxz: vec3;
  zxw: vec3;
  zyx: vec3;
  zyy: vec3;
  zyz: vec3;
  zyw: vec3;
  zzx: vec3;
  zzy: vec3;
  zzz: vec3;
  zzw: vec3;
  zwx: vec3;
  zwy: vec3;
  zwz: vec3;
  zww: vec3;
  wxx: vec3;
  wxy: vec3;
  wxz: vec3;
  wxw: vec3;
  wyx: vec3;
  wyy: vec3;
  wyz: vec3;
  wyw: vec3;
  wzx: vec3;
  wzy: vec3;
  wzz: vec3;
  wzw: vec3;
  wwx: vec3;
  wwy: vec3;
  wwz: vec3;
  www: vec3;
  rrr: vec3;
  rrg: vec3;
  rrb: vec3;
  rra: vec3;
  rgr: vec3;
  rgg: vec3;
  rgb: vec3;
  rga: vec3;
  rbr: vec3;
  rbg: vec3;
  rbb: vec3;
  rba: vec3;
  rar: vec3;
  rag: vec3;
  rab: vec3;
  raa: vec3;
  grr: vec3;
  grg: vec3;
  grb: vec3;
  gra: vec3;
  ggr: vec3;
  ggg: vec3;
  ggb: vec3;
  gga: vec3;
  gbr: vec3;
  gbg: vec3;
  gbb: vec3;
  gba: vec3;
  gar: vec3;
  gag: vec3;
  gab: vec3;
  gaa: vec3;
  brr: vec3;
  brg: vec3;
  brb: vec3;
  bra: vec3;
  bgr: vec3;
  bgg: vec3;
  bgb: vec3;
  bga: vec3;
  bbr: vec3;
  bbg: vec3;
  bbb: vec3;
  bba: vec3;
  bar: vec3;
  bag: vec3;
  bab: vec3;
  baa: vec3;
  arr: vec3;
  arg: vec3;
  arb: vec3;
  ara: vec3;
  agr: vec3;
  agg: vec3;
  agb: vec3;
  aga: vec3;
  abr: vec3;
  abg: vec3;
  abb: vec3;
  aba: vec3;
  aar: vec3;
  aag: vec3;
  aab: vec3;
  aaa: vec3;
  sss: vec3;
  sst: vec3;
  ssp: vec3;
  ssq: vec3;
  sts: vec3;
  stt: vec3;
  stp: vec3;
  stq: vec3;
  sps: vec3;
  spt: vec3;
  spp: vec3;
  spq: vec3;
  sqs: vec3;
  sqt: vec3;
  sqp: vec3;
  sqq: vec3;
  tss: vec3;
  tst: vec3;
  tsp: vec3;
  tsq: vec3;
  tts: vec3;
  ttt: vec3;
  ttp: vec3;
  ttq: vec3;
  tps: vec3;
  tpt: vec3;
  tpp: vec3;
  tpq: vec3;
  tqs: vec3;
  tqt: vec3;
  tqp: vec3;
  tqq: vec3;
  pss: vec3;
  pst: vec3;
  psp: vec3;
  psq: vec3;
  pts: vec3;
  ptt: vec3;
  ptp: vec3;
  ptq: vec3;
  pps: vec3;
  ppt: vec3;
  ppp: vec3;
  ppq: vec3;
  pqs: vec3;
  pqt: vec3;
  pqp: vec3;
  pqq: vec3;
  qss: vec3;
  qst: vec3;
  qsp: vec3;
  qsq: vec3;
  qts: vec3;
  qtt: vec3;
  qtp: vec3;
  qtq: vec3;
  qps: vec3;
  qpt: vec3;
  qpp: vec3;
  qpq: vec3;
  qqs: vec3;
  qqt: vec3;
  qqp: vec3;
  qqq: vec3;
  xxxx: vec4;
  xxxy: vec4;
  xxxz: vec4;
  xxxw: vec4;
  xxyx: vec4;
  xxyy: vec4;
  xxyz: vec4;
  xxyw: vec4;
  xxzx: vec4;
  xxzy: vec4;
  xxzz: vec4;
  xxzw: vec4;
  xxwx: vec4;
  xxwy: vec4;
  xxwz: vec4;
  xxww: vec4;
  xyxx: vec4;
  xyxy: vec4;
  xyxz: vec4;
  xyxw: vec4;
  xyyx: vec4;
  xyyy: vec4;
  xyyz: vec4;
  xyyw: vec4;
  xyzx: vec4;
  xyzy: vec4;
  xyzz: vec4;
  xyzw: vec4;
  xywx: vec4;
  xywy: vec4;
  xywz: vec4;
  xyww: vec4;
  xzxx: vec4;
  xzxy: vec4;
  xzxz: vec4;
  xzxw: vec4;
  xzyx: vec4;
  xzyy: vec4;
  xzyz: vec4;
  xzyw: vec4;
  xzzx: vec4;
  xzzy: vec4;
  xzzz: vec4;
  xzzw: vec4;
  xzwx: vec4;
  xzwy: vec4;
  xzwz: vec4;
  xzww: vec4;
  xwxx: vec4;
  xwxy: vec4;
  xwxz: vec4;
  xwxw: vec4;
  xwyx: vec4;
  xwyy: vec4;
  xwyz: vec4;
  xwyw: vec4;
  xwzx: vec4;
  xwzy: vec4;
  xwzz: vec4;
  xwzw: vec4;
  xwwx: vec4;
  xwwy: vec4;
  xwwz: vec4;
  xwww: vec4;
  yxxx: vec4;
  yxxy: vec4;
  yxxz: vec4;
  yxxw: vec4;
  yxyx: vec4;
  yxyy: vec4;
  yxyz: vec4;
  yxyw: vec4;
  yxzx: vec4;
  yxzy: vec4;
  yxzz: vec4;
  yxzw: vec4;
  yxwx: vec4;
  yxwy: vec4;
  yxwz: vec4;
  yxww: vec4;
  yyxx: vec4;
  yyxy: vec4;
  yyxz: vec4;
  yyxw: vec4;
  yyyx: vec4;
  yyyy: vec4;
  yyyz: vec4;
  yyyw: vec4;
  yyzx: vec4;
  yyzy: vec4;
  yyzz: vec4;
  yyzw: vec4;
  yywx: vec4;
  yywy: vec4;
  yywz: vec4;
  yyww: vec4;
  yzxx: vec4;
  yzxy: vec4;
  yzxz: vec4;
  yzxw: vec4;
  yzyx: vec4;
  yzyy: vec4;
  yzyz: vec4;
  yzyw: vec4;
  yzzx: vec4;
  yzzy: vec4;
  yzzz: vec4;
  yzzw: vec4;
  yzwx: vec4;
  yzwy: vec4;
  yzwz: vec4;
  yzww: vec4;
  ywxx: vec4;
  ywxy: vec4;
  ywxz: vec4;
  ywxw: vec4;
  ywyx: vec4;
  ywyy: vec4;
  ywyz: vec4;
  ywyw: vec4;
  ywzx: vec4;
  ywzy: vec4;
  ywzz: vec4;
  ywzw: vec4;
  ywwx: vec4;
  ywwy: vec4;
  ywwz: vec4;
  ywww: vec4;
  zxxx: vec4;
  zxxy: vec4;
  zxxz: vec4;
  zxxw: vec4;
  zxyx: vec4;
  zxyy: vec4;
  zxyz: vec4;
  zxyw: vec4;
  zxzx: vec4;
  zxzy: vec4;
  zxzz: vec4;
  zxzw: vec4;
  zxwx: vec4;
  zxwy: vec4;
  zxwz: vec4;
  zxww: vec4;
  zyxx: vec4;
  zyxy: vec4;
  zyxz: vec4;
  zyxw: vec4;
  zyyx: vec4;
  zyyy: vec4;
  zyyz: vec4;
  zyyw: vec4;
  zyzx: vec4;
  zyzy: vec4;
  zyzz: vec4;
  zyzw: vec4;
  zywx: vec4;
  zywy: vec4;
  zywz: vec4;
  zyww: vec4;
  zzxx: vec4;
  zzxy: vec4;
  zzxz: vec4;
  zzxw: vec4;
  zzyx: vec4;
  zzyy: vec4;
  zzyz: vec4;
  zzyw: vec4;
  zzzx: vec4;
  zzzy: vec4;
  zzzz: vec4;
  zzzw: vec4;
  zzwx: vec4;
  zzwy: vec4;
  zzwz: vec4;
  zzww: vec4;
  zwxx: vec4;
  zwxy: vec4;
  zwxz: vec4;
  zwxw: vec4;
  zwyx: vec4;
  zwyy: vec4;
  zwyz: vec4;
  zwyw: vec4;
  zwzx: vec4;
  zwzy: vec4;
  zwzz: vec4;
  zwzw: vec4;
  zwwx: vec4;
  zwwy: vec4;
  zwwz: vec4;
  zwww: vec4;
  wxxx: vec4;
  wxxy: vec4;
  wxxz: vec4;
  wxxw: vec4;
  wxyx: vec4;
  wxyy: vec4;
  wxyz: vec4;
  wxyw: vec4;
  wxzx: vec4;
  wxzy: vec4;
  wxzz: vec4;
  wxzw: vec4;
  wxwx: vec4;
  wxwy: vec4;
  wxwz: vec4;
  wxww: vec4;
  wyxx: vec4;
  wyxy: vec4;
  wyxz: vec4;
  wyxw: vec4;
  wyyx: vec4;
  wyyy: vec4;
  wyyz: vec4;
  wyyw: vec4;
  wyzx: vec4;
  wyzy: vec4;
  wyzz: vec4;
  wyzw: vec4;
  wywx: vec4;
  wywy: vec4;
  wywz: vec4;
  wyww: vec4;
  wzxx: vec4;
  wzxy: vec4;
  wzxz: vec4;
  wzxw: vec4;
  wzyx: vec4;
  wzyy: vec4;
  wzyz: vec4;
  wzyw: vec4;
  wzzx: vec4;
  wzzy: vec4;
  wzzz: vec4;
  wzzw: vec4;
  wzwx: vec4;
  wzwy: vec4;
  wzwz: vec4;
  wzww: vec4;
  wwxx: vec4;
  wwxy: vec4;
  wwxz: vec4;
  wwxw: vec4;
  wwyx: vec4;
  wwyy: vec4;
  wwyz: vec4;
  wwyw: vec4;
  wwzx: vec4;
  wwzy: vec4;
  wwzz: vec4;
  wwzw: vec4;
  wwwx: vec4;
  wwwy: vec4;
  wwwz: vec4;
  wwww: vec4;
  rrrr: vec4;
  rrrg: vec4;
  rrrb: vec4;
  rrra: vec4;
  rrgr: vec4;
  rrgg: vec4;
  rrgb: vec4;
  rrga: vec4;
  rrbr: vec4;
  rrbg: vec4;
  rrbb: vec4;
  rrba: vec4;
  rrar: vec4;
  rrag: vec4;
  rrab: vec4;
  rraa: vec4;
  rgrr: vec4;
  rgrg: vec4;
  rgrb: vec4;
  rgra: vec4;
  rggr: vec4;
  rggg: vec4;
  rggb: vec4;
  rgga: vec4;
  rgbr: vec4;
  rgbg: vec4;
  rgbb: vec4;
  rgba: vec4;
  rgar: vec4;
  rgag: vec4;
  rgab: vec4;
  rgaa: vec4;
  rbrr: vec4;
  rbrg: vec4;
  rbrb: vec4;
  rbra: vec4;
  rbgr: vec4;
  rbgg: vec4;
  rbgb: vec4;
  rbga: vec4;
  rbbr: vec4;
  rbbg: vec4;
  rbbb: vec4;
  rbba: vec4;
  rbar: vec4;
  rbag: vec4;
  rbab: vec4;
  rbaa: vec4;
  rarr: vec4;
  rarg: vec4;
  rarb: vec4;
  rara: vec4;
  ragr: vec4;
  ragg: vec4;
  ragb: vec4;
  raga: vec4;
  rabr: vec4;
  rabg: vec4;
  rabb: vec4;
  raba: vec4;
  raar: vec4;
  raag: vec4;
  raab: vec4;
  raaa: vec4;
  grrr: vec4;
  grrg: vec4;
  grrb: vec4;
  grra: vec4;
  grgr: vec4;
  grgg: vec4;
  grgb: vec4;
  grga: vec4;
  grbr: vec4;
  grbg: vec4;
  grbb: vec4;
  grba: vec4;
  grar: vec4;
  grag: vec4;
  grab: vec4;
  graa: vec4;
  ggrr: vec4;
  ggrg: vec4;
  ggrb: vec4;
  ggra: vec4;
  gggr: vec4;
  gggg: vec4;
  gggb: vec4;
  ggga: vec4;
  ggbr: vec4;
  ggbg: vec4;
  ggbb: vec4;
  ggba: vec4;
  ggar: vec4;
  ggag: vec4;
  ggab: vec4;
  ggaa: vec4;
  gbrr: vec4;
  gbrg: vec4;
  gbrb: vec4;
  gbra: vec4;
  gbgr: vec4;
  gbgg: vec4;
  gbgb: vec4;
  gbga: vec4;
  gbbr: vec4;
  gbbg: vec4;
  gbbb: vec4;
  gbba: vec4;
  gbar: vec4;
  gbag: vec4;
  gbab: vec4;
  gbaa: vec4;
  garr: vec4;
  garg: vec4;
  garb: vec4;
  gara: vec4;
  gagr: vec4;
  gagg: vec4;
  gagb: vec4;
  gaga: vec4;
  gabr: vec4;
  gabg: vec4;
  gabb: vec4;
  gaba: vec4;
  gaar: vec4;
  gaag: vec4;
  gaab: vec4;
  gaaa: vec4;
  brrr: vec4;
  brrg: vec4;
  brrb: vec4;
  brra: vec4;
  brgr: vec4;
  brgg: vec4;
  brgb: vec4;
  brga: vec4;
  brbr: vec4;
  brbg: vec4;
  brbb: vec4;
  brba: vec4;
  brar: vec4;
  brag: vec4;
  brab: vec4;
  braa: vec4;
  bgrr: vec4;
  bgrg: vec4;
  bgrb: vec4;
  bgra: vec4;
  bggr: vec4;
  bggg: vec4;
  bggb: vec4;
  bgga: vec4;
  bgbr: vec4;
  bgbg: vec4;
  bgbb: vec4;
  bgba: vec4;
  bgar: vec4;
  bgag: vec4;
  bgab: vec4;
  bgaa: vec4;
  bbrr: vec4;
  bbrg: vec4;
  bbrb: vec4;
  bbra: vec4;
  bbgr: vec4;
  bbgg: vec4;
  bbgb: vec4;
  bbga: vec4;
  bbbr: vec4;
  bbbg: vec4;
  bbbb: vec4;
  bbba: vec4;
  bbar: vec4;
  bbag: vec4;
  bbab: vec4;
  bbaa: vec4;
  barr: vec4;
  barg: vec4;
  barb: vec4;
  bara: vec4;
  bagr: vec4;
  bagg: vec4;
  bagb: vec4;
  baga: vec4;
  babr: vec4;
  babg: vec4;
  babb: vec4;
  baba: vec4;
  baar: vec4;
  baag: vec4;
  baab: vec4;
  baaa: vec4;
  arrr: vec4;
  arrg: vec4;
  arrb: vec4;
  arra: vec4;
  argr: vec4;
  argg: vec4;
  argb: vec4;
  arga: vec4;
  arbr: vec4;
  arbg: vec4;
  arbb: vec4;
  arba: vec4;
  arar: vec4;
  arag: vec4;
  arab: vec4;
  araa: vec4;
  agrr: vec4;
  agrg: vec4;
  agrb: vec4;
  agra: vec4;
  aggr: vec4;
  aggg: vec4;
  aggb: vec4;
  agga: vec4;
  agbr: vec4;
  agbg: vec4;
  agbb: vec4;
  agba: vec4;
  agar: vec4;
  agag: vec4;
  agab: vec4;
  agaa: vec4;
  abrr: vec4;
  abrg: vec4;
  abrb: vec4;
  abra: vec4;
  abgr: vec4;
  abgg: vec4;
  abgb: vec4;
  abga: vec4;
  abbr: vec4;
  abbg: vec4;
  abbb: vec4;
  abba: vec4;
  abar: vec4;
  abag: vec4;
  abab: vec4;
  abaa: vec4;
  aarr: vec4;
  aarg: vec4;
  aarb: vec4;
  aara: vec4;
  aagr: vec4;
  aagg: vec4;
  aagb: vec4;
  aaga: vec4;
  aabr: vec4;
  aabg: vec4;
  aabb: vec4;
  aaba: vec4;
  aaar: vec4;
  aaag: vec4;
  aaab: vec4;
  aaaa: vec4;
  ssss: vec4;
  ssst: vec4;
  sssp: vec4;
  sssq: vec4;
  ssts: vec4;
  sstt: vec4;
  sstp: vec4;
  sstq: vec4;
  ssps: vec4;
  sspt: vec4;
  sspp: vec4;
  sspq: vec4;
  ssqs: vec4;
  ssqt: vec4;
  ssqp: vec4;
  ssqq: vec4;
  stss: vec4;
  stst: vec4;
  stsp: vec4;
  stsq: vec4;
  stts: vec4;
  sttt: vec4;
  sttp: vec4;
  sttq: vec4;
  stps: vec4;
  stpt: vec4;
  stpp: vec4;
  stpq: vec4;
  stqs: vec4;
  stqt: vec4;
  stqp: vec4;
  stqq: vec4;
  spss: vec4;
  spst: vec4;
  spsp: vec4;
  spsq: vec4;
  spts: vec4;
  sptt: vec4;
  sptp: vec4;
  sptq: vec4;
  spps: vec4;
  sppt: vec4;
  sppp: vec4;
  sppq: vec4;
  spqs: vec4;
  spqt: vec4;
  spqp: vec4;
  spqq: vec4;
  sqss: vec4;
  sqst: vec4;
  sqsp: vec4;
  sqsq: vec4;
  sqts: vec4;
  sqtt: vec4;
  sqtp: vec4;
  sqtq: vec4;
  sqps: vec4;
  sqpt: vec4;
  sqpp: vec4;
  sqpq: vec4;
  sqqs: vec4;
  sqqt: vec4;
  sqqp: vec4;
  sqqq: vec4;
  tsss: vec4;
  tsst: vec4;
  tssp: vec4;
  tssq: vec4;
  tsts: vec4;
  tstt: vec4;
  tstp: vec4;
  tstq: vec4;
  tsps: vec4;
  tspt: vec4;
  tspp: vec4;
  tspq: vec4;
  tsqs: vec4;
  tsqt: vec4;
  tsqp: vec4;
  tsqq: vec4;
  ttss: vec4;
  ttst: vec4;
  ttsp: vec4;
  ttsq: vec4;
  ttts: vec4;
  tttt: vec4;
  tttp: vec4;
  tttq: vec4;
  ttps: vec4;
  ttpt: vec4;
  ttpp: vec4;
  ttpq: vec4;
  ttqs: vec4;
  ttqt: vec4;
  ttqp: vec4;
  ttqq: vec4;
  tpss: vec4;
  tpst: vec4;
  tpsp: vec4;
  tpsq: vec4;
  tpts: vec4;
  tptt: vec4;
  tptp: vec4;
  tptq: vec4;
  tpps: vec4;
  tppt: vec4;
  tppp: vec4;
  tppq: vec4;
  tpqs: vec4;
  tpqt: vec4;
  tpqp: vec4;
  tpqq: vec4;
  tqss: vec4;
  tqst: vec4;
  tqsp: vec4;
  tqsq: vec4;
  tqts: vec4;
  tqtt: vec4;
  tqtp: vec4;
  tqtq: vec4;
  tqps: vec4;
  tqpt: vec4;
  tqpp: vec4;
  tqpq: vec4;
  tqqs: vec4;
  tqqt: vec4;
  tqqp: vec4;
  tqqq: vec4;
  psss: vec4;
  psst: vec4;
  pssp: vec4;
  pssq: vec4;
  psts: vec4;
  pstt: vec4;
  pstp: vec4;
  pstq: vec4;
  psps: vec4;
  pspt: vec4;
  pspp: vec4;
  pspq: vec4;
  psqs: vec4;
  psqt: vec4;
  psqp: vec4;
  psqq: vec4;
  ptss: vec4;
  ptst: vec4;
  ptsp: vec4;
  ptsq: vec4;
  ptts: vec4;
  pttt: vec4;
  pttp: vec4;
  pttq: vec4;
  ptps: vec4;
  ptpt: vec4;
  ptpp: vec4;
  ptpq: vec4;
  ptqs: vec4;
  ptqt: vec4;
  ptqp: vec4;
  ptqq: vec4;
  ppss: vec4;
  ppst: vec4;
  ppsp: vec4;
  ppsq: vec4;
  ppts: vec4;
  pptt: vec4;
  pptp: vec4;
  pptq: vec4;
  ppps: vec4;
  pppt: vec4;
  pppp: vec4;
  pppq: vec4;
  ppqs: vec4;
  ppqt: vec4;
  ppqp: vec4;
  ppqq: vec4;
  pqss: vec4;
  pqst: vec4;
  pqsp: vec4;
  pqsq: vec4;
  pqts: vec4;
  pqtt: vec4;
  pqtp: vec4;
  pqtq: vec4;
  pqps: vec4;
  pqpt: vec4;
  pqpp: vec4;
  pqpq: vec4;
  pqqs: vec4;
  pqqt: vec4;
  pqqp: vec4;
  pqqq: vec4;
  qsss: vec4;
  qsst: vec4;
  qssp: vec4;
  qssq: vec4;
  qsts: vec4;
  qstt: vec4;
  qstp: vec4;
  qstq: vec4;
  qsps: vec4;
  qspt: vec4;
  qspp: vec4;
  qspq: vec4;
  qsqs: vec4;
  qsqt: vec4;
  qsqp: vec4;
  qsqq: vec4;
  qtss: vec4;
  qtst: vec4;
  qtsp: vec4;
  qtsq: vec4;
  qtts: vec4;
  qttt: vec4;
  qttp: vec4;
  qttq: vec4;
  qtps: vec4;
  qtpt: vec4;
  qtpp: vec4;
  qtpq: vec4;
  qtqs: vec4;
  qtqt: vec4;
  qtqp: vec4;
  qtqq: vec4;
  qpss: vec4;
  qpst: vec4;
  qpsp: vec4;
  qpsq: vec4;
  qpts: vec4;
  qptt: vec4;
  qptp: vec4;
  qptq: vec4;
  qpps: vec4;
  qppt: vec4;
  qppp: vec4;
  qppq: vec4;
  qpqs: vec4;
  qpqt: vec4;
  qpqp: vec4;
  qpqq: vec4;
  qqss: vec4;
  qqst: vec4;
  qqsp: vec4;
  qqsq: vec4;
  qqts: vec4;
  qqtt: vec4;
  qqtp: vec4;
  qqtq: vec4;
  qqps: vec4;
  qqpt: vec4;
  qqpp: vec4;
  qqpq: vec4;
  qqqs: vec4;
  qqqt: vec4;
  qqqp: vec4;
  qqqq: vec4;
};

// Additionally, there are 3 sets of swizzle masks. You can use xyzw, rgba (for colors), or stpq (for texture coordinates). These three sets have no actual difference; they're just syntactic sugar. You cannot combine names from different sets in a single swizzle operation. So ".xrs" is not a valid swizzle mask.
const readSwizzleMasks = [
  [
    ...product(['x', 'y', 'z', 'w'], 1),
    ...product(['r', 'g', 'b', 'a'], 1),
    ...product(['s', 't', 'p', 'q'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z', 'w'], 2),
    ...product(['r', 'g', 'b', 'a'], 2),
    ...product(['s', 't', 'p', 'q'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z', 'w'], 3),
    ...product(['r', 'g', 'b', 'a'], 3),
    ...product(['s', 't', 'p', 'q'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...product(['x', 'y', 'z', 'w'], 4),
    ...product(['r', 'g', 'b', 'a'], 4),
    ...product(['s', 't', 'p', 'q'], 4),
  ].map((tuple) => tuple.join('')),
];

// However, when you use a swizzle as a way of setting component values, you cannot use the same swizzle component twice. So someVec.xx = vec2(4.0, 4.0); is not allowed.
const writeSwizzleMasks = [
  [
    ...permutations(['x', 'y', 'z', 'w'], 1),
    ...permutations(['r', 'g', 'b', 'a'], 1),
    ...permutations(['s', 't', 'p', 'q'], 1),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z', 'w'], 2),
    ...permutations(['r', 'g', 'b', 'a'], 2),
    ...permutations(['s', 't', 'p', 'q'], 2),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z', 'w'], 3),
    ...permutations(['r', 'g', 'b', 'a'], 3),
    ...permutations(['s', 't', 'p', 'q'], 3),
  ].map((tuple) => tuple.join('')),
  [
    ...permutations(['x', 'y', 'z', 'w'], 4),
    ...permutations(['r', 'g', 'b', 'a'], 4),
    ...permutations(['s', 't', 'p', 'q'], 4),
  ].map((tuple) => tuple.join('')),
];

export /* for testing */ type Vec4SwizzleComponentKeys =
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

const handler: ProxyHandler<vec4> = {
  get(target, prop, receiver) {
    if (typeof prop === 'string') {
      if (prop.length === 1 && readSwizzleMasks[0].includes(prop)) {
        return target[SwizzleComponent[prop as Vec4SwizzleComponentKeys]];
      }
      if (
        (prop.length === 2 && readSwizzleMasks[1].includes(prop)) ||
        (prop.length === 3 && readSwizzleMasks[2].includes(prop)) ||
        (prop.length === 4 && readSwizzleMasks[3].includes(prop))
      ) {
        const a = new Array<number>(prop.length);
        const keys = prop.split('') as Vec4SwizzleComponentKeys[];
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
        target[SwizzleComponent[p as Vec4SwizzleComponentKeys]] = newValue;
        return true;
      }
      if (
        (p.length === 2 && writeSwizzleMasks[1].includes(p)) ||
        (p.length === 3 && writeSwizzleMasks[2].includes(p)) ||
        (p.length === 4 && writeSwizzleMasks[3].includes(p))
      ) {
        const keys = p.split('') as Vec4SwizzleComponentKeys[];
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
export function vec4(...args: (number | number[])[]): vec4 {
  const flattened = args.flat();
  if (flattened.length === 1) {
    flattened.length = 4;
    flattened.fill(flattened[0]);
  }
  if (flattened.length < 4) {
    throw new Error('Not enough components');
  }

  return new Proxy(
    flattened.slice(undefined, 4) as [number, number, number, number],
    handler
  ) as vec4;
}
