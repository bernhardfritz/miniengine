import './style.css';
import { render } from '@miniengine/core';
import helloTriangle from './hello-triangle';
import textures from './textures';
import normalMapping from './normal-mapping';
import models from './models';
import basicHeightmap from './basic-heightmap';

const examples: Record<
  string,
  (gl: WebGL2RenderingContext) => Promise<(deltaTime: number) => void>
> = {
  'hello-triangle': helloTriangle,
  'textures': textures,
  'normal-mapping': normalMapping,
  'models': models,
  'basic-heightmap': basicHeightmap,
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <span style="position: absolute">
    <select id="example">
      ${Object.keys(examples)
        .map((example) => `<option value="${example}">${example}</option>`)
        .join('\n')}
    </select>
    <a href="${import.meta.env.BASE_URL.replace('examples/', '')}">&lt;&lt; Docs</a>
  </span>
  <div id="container"></div>
`;

const select = document.querySelector<HTMLSelectElement>('#example')!;
const searchParams = new URLSearchParams(location.search);
const example = searchParams.get('example');
if (example !== null) {
  select.value = example;
}
select.addEventListener('change', () => {
  const url = new URL(location.href);
  url.searchParams.set('example', select.value);
  history.replaceState({}, '', url);
  render(
    examples[select.value],
    document.querySelector<HTMLDivElement>('#container')!
  );
});

render(
  examples[select.value],
  document.querySelector<HTMLDivElement>('#container')!
);
