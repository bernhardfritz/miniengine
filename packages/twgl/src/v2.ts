/**
 *
 * Vec2 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec2. In other words you can do this
 *
 *     var v = v2.sum(a, b);  // Creates a new Vec2 with the sum of a and b.
 *
 * or
 *
 *     var v = v2.create();
 *     v2.add(a, b, v);  // Puts the sum of a and b in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v2.add(a, b, a);  // Puts the sum of a and b in a
 */

let VecType: Float32ArrayConstructor | ArrayConstructor = Float32Array;

/**
 * A JavaScript array with 2 values or a Float32Array with 2 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link setDefaultType}.
 */
export type Vec2 = number[] | Float32Array;

/**
 * Sets the type this library creates for a Vec2
 * @param ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return previous constructor for Vec2
 */
function setDefaultType(ctor: Float32ArrayConstructor | ArrayConstructor): Float32ArrayConstructor | ArrayConstructor {
  const oldType = VecType;
  VecType = ctor;
  return oldType;
}

/**
 * Creates a vec2; may be called with x, y to set initial values.
 * @param x Initial x value.
 * @param y Initial y value.
 * @return the created vector
 */
function create(x?: number, y?: number): Vec2 {
  const dst = new VecType(2);
  if (x) {
    dst[0] = x;
  }
  if (y) {
    dst[1] = y;
  }
  return dst;
}

/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return A vector tha tis the sum of a and b.
 */
function add(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] + b[0];
  dst[1] = a[1] + b[1];

  return dst;
}

/**
 * Subtracts two vectors.
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return A vector that is the difference of a and b.
 */
function subtract(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] - b[0];
  dst[1] = a[1] - b[1];

  return dst;
}

/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * a + t * (b - a).
 * @param a Operand vector.
 * @param b Operand vector.
 * @param t Interpolation coefficient.
 * @param dst vector to hold result. If not new one is created.
 * @return The linear interpolated result.
 */
function lerp(a: Vec2, b: Vec2, t: number, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] + t * (b[0] - a[0]);
  dst[1] = a[1] + t * (b[1] - a[1]);

  return dst;
}

/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient vector t, returns
 * a + t * (b - a).
 * @param a Operand vector.
 * @param b Operand vector.
 * @param t Interpolation coefficients vector.
 * @param dst vector to hold result. If not new one is created.
 * @return the linear interpolated result.
 */
function lerpV(a: Vec2, b: Vec2, t: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] + t[0] * (b[0] - a[0]);
  dst[1] = a[1] + t[1] * (b[1] - a[1]);

  return dst;
}

/**
 * Return max values of two vectors.
 * Given vectors a and b returns
 * [max(a[0], b[0]), max(a[1], b[1])].
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return The max components vector.
 */
function max(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = Math.max(a[0], b[0]);
  dst[1] = Math.max(a[1], b[1]);

  return dst;
}

/**
 * Return min values of two vectors.
 * Given vectors a and b returns
 * [min(a[0], b[0]), min(a[1], b[1])].
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return The min components vector.
 */
function min(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = Math.min(a[0], b[0]);
  dst[1] = Math.min(a[1], b[1]);

  return dst;
}

/**
 * Multiplies a vector by a scalar.
 * @param v The vector.
 * @param k The scalar.
 * @param dst vector to hold result. If not new one is created.
 * @return The scaled vector.
 */
function mulScalar(v: Vec2, k: number, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = v[0] * k;
  dst[1] = v[1] * k;

  return dst;
}

/**
 * Divides a vector by a scalar.
 * @param v The vector.
 * @param k The scalar.
 * @param dst vector to hold result. If not new one is created.
 * @return The scaled vector.
 */
function divScalar(v: Vec2, k: number, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = v[0] / k;
  dst[1] = v[1] / k;

  return dst;
}

/**
 * Computes the dot product of two vectors; assumes both vectors have
 * two entries.
 * @param a Operand vector.
 * @param b Operand vector.
 * @return dot product
 */
function dot(a: Vec2, b: Vec2): number {
  return (a[0] * b[0]) + (a[1] * b[1]);
}

/**
 * Computes the length of vector
 * @param v vector.
 * @return length of vector.
 */
function length(v: Vec2): number {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

/**
 * Computes the square of the length of vector
 * @param v vector.
 * @return square of the length of vector.
 */
function lengthSq(v: Vec2): number {
  return v[0] * v[0] + v[1] * v[1];
}

/**
 * Computes the distance between 2 points
 * @param a vector.
 * @param b vector.
 * @return distance between a and b
 */
function distance(a: Vec2, b: Vec2): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Computes the square of the distance between 2 points
 * @param a vector.
 * @param b vector.
 * @return square of the distance between a and b
 */
function distanceSq(a: Vec2, b: Vec2): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return dx * dx + dy * dy;
}

/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param a The vector.
 * @param dst vector to hold result. If not new one is created.
 * @return The normalized vector.
 */
function normalize(a: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  const lenSq = a[0] * a[0] + a[1] * a[1];
  const len = Math.sqrt(lenSq);
  if (len > 0.00001) {
    dst[0] = a[0] / len;
    dst[1] = a[1] / len;
  } else {
    dst[0] = 0;
    dst[1] = 0;
  }

  return dst;
}

/**
 * Negates a vector.
 * @param v The vector.
 * @param dst vector to hold result. If not new one is created.
 * @return -v.
 */
function negate(v: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = -v[0];
  dst[1] = -v[1];

  return dst;
}

/**
 * Copies a vector.
 * @param v The vector.
 * @param dst vector to hold result. If not new one is created.
 * @return A copy of v.
 */
function copy(v: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = v[0];
  dst[1] = v[1];

  return dst;
}

/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return The vector of products of entries of a and
 *     b.
 */
function multiply(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] * b[0];
  dst[1] = a[1] * b[1];

  return dst;
}

/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param a Operand vector.
 * @param b Operand vector.
 * @param dst vector to hold result. If not new one is created.
 * @return The vector of quotients of entries of a and
 *     b.
 */
function divide(a: Vec2, b: Vec2, dst?: Vec2): Vec2 {
  dst = dst || new VecType(2);

  dst[0] = a[0] / b[0];
  dst[1] = a[1] / b[1];

  return dst;
}

export {
  add,
  copy,
  create,
  distance,
  distanceSq,
  divide,
  divScalar,
  dot,
  lerp,
  lerpV,
  length,
  lengthSq,
  max,
  min,
  mulScalar,
  multiply,
  negate,
  normalize,
  setDefaultType,
  subtract,
};