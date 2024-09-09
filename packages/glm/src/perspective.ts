import { mat4 } from './mat4';
import { tan } from './tan';
import { vec4 } from './vec4';

/**
 * Creates a matrix for a symetric perspective-view frustum.
 * @param fovy Specifies the field of view angle in the y direction. Expressed in radians.
 * @param aspect Specifies the aspect ratio that determines the field of view in the x direction. The aspect ratio is the ratio of x (width) to y (height).
 * @param zNear Specifies the distance from the viewer to the near clipping plane (always positive).
 * @param zFar Specifies the distance from the viewer to the far clipping plane (always positive).
 * @returns A viewing frustum into the world coordinate system.
 */
export function perspective(
  fovy: number,
  aspect: number,
  zNear: number,
  zFar: number
) {
  const tanHalfFovy = tan(fovy / 2);

  return mat4(
    vec4(1 / (aspect * tanHalfFovy), 0, 0, 0),
    vec4(0, 1 / tanHalfFovy, 0, 0),
    vec4(0, 0, -(zFar + zNear) / (zFar - zNear), -1),
    vec4(0, 0, -(2 * zFar * zNear) / (zFar - zNear), 0)
  );
}
