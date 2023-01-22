import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'
import { SoundModule } from './modules/sound.module'


class App{
  #contextMenu
  #backgroundModule
  #clicksModule
  #shapeModule
  #soundModule

  constructor() {
    this.#soundModule = new SoundModule('sound', 'Make a sound', ['../src/assets/s1.wav', '../src/assets/s2.wav', '../src/assets/s3.wav', '../src/assets/s4.wav', '../src/assets/s5.wav'])
    this.#backgroundModule = new BackgroundModule('background', 'Change color')
    this.#shapeModule = new ShapeModule('ShapeModule', 'Create figure', document.body)
    this.#clicksModule = new ClicksModule("ClicksModule", "Count clicks", document.body, document.body, 5)
    this.#contextMenu = new ContextMenu('.menu', [this.#backgroundModule, this.#clicksModule, this.#soundModule, this.#shapeModule])
  }

  run() {
    this.#contextMenu.open()
    this.#contextMenu.add()
  }
}

const app = new App()
app.run()


