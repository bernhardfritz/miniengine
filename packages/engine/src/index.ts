export function render(
  app: (gl: WebGLRenderingContext) => (time: number) => void,
  container: Element
) {
  var canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const gl = canvas.getContext('webgl');
  if (gl === null) {
    throw new Error('Error creating WebGL context.');
  }
  const callback = app(gl);
  const frameRequestCallback: FrameRequestCallback = (time) => {
    callback(time);
    requestAnimationFrame(frameRequestCallback);
  };
  requestAnimationFrame(frameRequestCallback);
}
