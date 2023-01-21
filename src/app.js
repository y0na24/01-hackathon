import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'
import { ClicksModule } from './modules/clicks.module'

class App{
  #contextMenu
  #backgroundModule
  #clicksModule 

  constructor() {
    this.#backgroundModule = new BackgroundModule('background', 'Change color')
    this.#clicksModule = new ClicksModule("ClicksModule", "Click", document.body, document.body, 5)
    this.#contextMenu = new ContextMenu('.menu', [this.#backgroundModule, this.#clicksModule])
  }

  run() {
    this.#contextMenu.open()
    this.#contextMenu.add()
  }
}

const app = new App()
app.run()


