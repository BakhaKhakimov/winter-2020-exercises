import { Stage } from './stage/stage.js';
import { Pacman } from './pacman/pacman.js';
import './index.scss';
import './index.html';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(19, 9);
  stage.mount(app);

  const pac = new Pacman(stage, 'Jane', 'girl', 'dark', 0, 0);
  pac.mount(stage.element);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
      pac.move('right');
    } else if (e.keyCode === 37) {
      pac.move('left');
    } else if (e.keyCode === 38) {
      pac.move('up');
    } else if (e.keyCode === 40) {
      pac.move('down');
    }
  });
});
