import {Module} from '../core/module'
import {random} from '../utils'

export class BackgroundModule extends Module {
    constructor() {
        super('background', 'Поменять цвет фона') 
    }

    trigger() {
        this.#setBackground();
    }

    #setBackground() {
        const directions = ['to right', 'to left', 'to bottom', 'to top', 'to bottom right', 'to bottom left', 'to top right', 'to top left'];
        if (random(1, 100) < 50) {
            document.body.style.background = `linear-gradient(${directions[random(0, 7)]}, ${this.#getRandomColor()}, ${this.#getRandomColor()})`;
            document.body.style.backgroundRepeat = 'no-repeat';
            document.body.style.backgroundSize = 'cover';
            document.body.style.height = '100vh';

        } else {
            document.body.style.background = this.#getRandomColor();
        }
    }

    #getRandomColor() {
      return `rgb(${random(1, 255)}, ${random(1, 255)}, ${random(1, 255)})`;
    }
}



