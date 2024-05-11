import './style.css';
import { render } from 'engine';
import app from './hello-triangle';

render(app, document.querySelector('#app')!);
