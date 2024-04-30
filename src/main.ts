import './style.css';
import { setupCanvas } from './setup-canvas.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="c"></canvas>
`;

setupCanvas(document.querySelector<HTMLCanvasElement>('#c')!);
