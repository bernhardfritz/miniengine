/**
 * Renders an app into a browser DOM node.
 * @param app An app that you want to display. An app is an async function that returns a render loop callback.
 * @param domNode A {@link https://developer.mozilla.org/en-US/docs/Web/API/Element | DOM element}. miniengine will display the app you pass inside this DOM element.
 * 
 * @example
 * ```
 * import { render } from '@miniengine/core';
 * import app from './app';
 * 
 * render(app, document.getElementById('root')!);
 * ```
 */
export async function render(
  app: (gl: WebGL2RenderingContext) => Promise<(deltaTime: number) => void>,
  domNode: Element
): Promise<void> {
  const canvas = document.createElement('canvas');
  domNode.innerHTML = '';
  domNode.appendChild(canvas);
  const gl = canvas.getContext('webgl2');
  if (gl === null) {
    throw new Error('Error creating WebGL2 context.');
  }
  const callback = await app(gl);
  const frameRequestCallback: FrameRequestCallback = (deltaTime) => {
    callback(deltaTime);
    requestAnimationFrame(frameRequestCallback);
  };
  requestAnimationFrame(frameRequestCallback);
}
