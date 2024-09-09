import { componentWise } from './component-wise';
import { WidenGenType, genType } from './genType';
import { isNumber } from './isNumber';

/**
 * Generate a step function by comparing two values.
 * @param edge Specifies the location of the edge of the step function.
 * @param x Specify the value to be used to generate the step function.
 * @returns Generates a step function by comparing x to edge. For element i of the return value, 0.0 is returned if x[i] < edge[i], and 1.0 is returned otherwise.
 */
export function step<T extends genType>(edge: T, x: T): WidenGenType<T>;
/**
 * Generate a step function by comparing two values.
 * @param edge Specifies the location of the edge of the step function.
 * @param x Specify the value to be used to generate the step function.
 * @returns Generates a step function by comparing x to edge. For element i of the return value, 0.0 is returned if x[i] < edge[i], and 1.0 is returned otherwise.
 */
export function step<T extends genType>(edge: number, x: T): WidenGenType<T>;
export function step<T extends genType>(
  edge: T | number,
  x: T
): WidenGenType<T> {
  if (isNumber(x)) {
    return (x < (edge as number) ? 0 : 1) as WidenGenType<T>;
  } else {
    if (isNumber(edge)) {
      edge = genType[x.length](edge) as Exclude<T, number>;
    }

    return componentWise(step, edge, x) as WidenGenType<T>;
  }
}
