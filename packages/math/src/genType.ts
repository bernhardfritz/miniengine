import { vec2 } from './vec2';
import { vec3 } from './vec3';
import { vec4 } from './vec4';

export type genType = number | vec2 | vec3 | vec4;

export type WidenGenType<T> = T extends number ? number : T;

export const genType = {
  1: Number,
  2: vec2,
  3: vec3,
  4: vec4,
};
