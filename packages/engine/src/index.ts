export function render(
  app: (gl: WebGL2RenderingContext) => (time: number) => void,
  container: Element
) {
  const canvas = document.createElement('canvas');
  container.innerHTML = '';
  container.appendChild(canvas);
  const gl = canvas.getContext('webgl2');
  if (gl === null) {
    throw new Error('Error creating WebGL2 context.');
  }
  const callback = app(gl);
  const frameRequestCallback: FrameRequestCallback = (time) => {
    callback(time);
    requestAnimationFrame(frameRequestCallback);
  };
  requestAnimationFrame(frameRequestCallback);
}
