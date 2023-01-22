import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'
import { ShapeModule } from './modules/shape.module'

class App{
  #contextMenu
  #backgroundModule
  #clicksModule
  #snapeModule

  constructor() {
    this.#backgroundModule = new BackgroundModule('background', 'Change color')
    this.#clicksModule = new ClicksModule("ClicksModule", "Click", document.body, document.body, 5)
    this.#snapeModule = new ShapeModule('SnapeModule', 'Create figure', document.body)
    this.#contextMenu = new ContextMenu('.menu', [this.#backgroundModule, this.#clicksModule, this.#snapeModule])
  }

  run() {
    this.#contextMenu.open()
    this.#contextMenu.add()
  }
}

const app = new App()
app.run()


