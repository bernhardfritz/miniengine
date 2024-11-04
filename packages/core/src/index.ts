function createWebGL2RenderingContext(domNode: Element): WebGL2RenderingContext {
  const canvas = document.createElement('canvas');
  domNode.innerHTML = '';
  domNode.appendChild(canvas);
  const gl = canvas.getContext('webgl2');
  if (gl === null) {
    throw new Error('Error creating WebGL2 context.');
  }

  return gl;
}

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
export async function render(app: (gl: WebGL2RenderingContext) => Promise<(deltaTime: number) => void>, domNode: Element): Promise<void>;
/**
 * Renders an app into an existing WebGL2RenderingContext.
 * @param app An app that you want to display. An app is an async function that returns a render loop callback.
 * @param gl A {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext | WebGL2RenderingContext}. miniengine will display the app you pass inside this WebGL2RenderingContext.
 * 
 * @example
 * ```
 * import { render } from '@miniengine/core';
 * import app from './app';
 * 
 * const canvas = document.getElementById('canvas')!;
 * const gl = canvas.getContext('webgl2')!;
 * render(app, gl);
 * ```
 */
export async function render<T extends WebGL2RenderingContext>(app: (gl: T) => Promise<(deltaTime: number) => void>, gl: T): Promise<void>;
export async function render<T extends WebGL2RenderingContext = WebGL2RenderingContext>(
  app: (gl: T) => Promise<(deltaTime: number) => void>,
  domNodeOrGl: Element | T
): Promise<void> {
  const gl = domNodeOrGl instanceof WebGL2RenderingContext ? domNodeOrGl : createWebGL2RenderingContext(domNodeOrGl) as T;
  const callback = await app(gl);
  let previousTime = performance.now();
  const frameRequestCallback: FrameRequestCallback = (time) => {
    callback(time - previousTime);
    previousTime = time;
    requestAnimationFrame(frameRequestCallback);
  };
  requestAnimationFrame(frameRequestCallback);
}
