import { mat4 } from './mat4';

/**
 * Creates a matrix for an orthographic parallel viewing volume.
 * @param left Specify the coordinate for the left vertical clipping plane.
 * @param right Specify the coordinate for right vertical clipping plane.
 * @param bottom Specify the coordinate for the bottom horizontal clipping plane.
 * @param top Specify the coordinates for the top horizontal clipping plane.
 * @param zNear Specify the distance to the nearer depth clipping plane. This value is negative if the plane is to be behind the viewer.
 * @param zFar Specify the distance to the farther depth clipping plane. This value is negative if the plane is to be behind the viewer.
 * @returns A transformation that produces a parallel projection.
 */
export function ortho(
  left: number,
  right: number,
  bottom: number,
  top: number,
  zNear = -1,
  zFar = 1
) {
  return mat4(
    2 / (right - left),
    0,
    0,
    0,
    0,
    2 / (top - bottom),
    0,
    0,
    0,
    0,
    -2 / (zFar - zNear),
    0,
    -(right + left) / (right - left),
    -(top + bottom) / (top - bottom),
    -(zFar + zNear) / (zFar - zNear),
    1
  );
}
