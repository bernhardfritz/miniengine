import './style.css';
import { render } from '@miniengine/engine';
import helloTriangle from './hello-triangle';
import twglCube from './twgl-cube';
import textures from './textures';
import normalMapping from './normal-mapping';

const examples: Record<
  string,
  (gl: WebGL2RenderingContext) => Promise<(time: number) => void>
> = {
  'hello-triangle': helloTriangle,
  'twgl-cube': twglCube,
  'textures': textures,
  'normal-mapping': normalMapping,
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <select id="example" style="position: absolute">
    ${Object.keys(examples)
      .map((example) => `<option value="${example}">${example}</option>`)
      .join('\n')}
  </select>
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
