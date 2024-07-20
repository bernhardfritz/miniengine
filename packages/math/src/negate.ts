import { WidenGenType, genType } from './genType';
import { componentWise } from './component-wise';
import { isNumber } from './isNumber';

/**
 * Negates a scalar, vector or matrix.
 * @param x The scalar, vector or matrix.
 * @returns The negated scalar, vector or matrix.
 */
export function negate<T extends genType>(x: T): WidenGenType<T> {
  if (isNumber(x)) {
    return (-x) as WidenGenType<T>;
  } else {
    return componentWise(negate, x) as WidenGenType<T>;
  }
}
