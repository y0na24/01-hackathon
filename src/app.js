import './styles.css'
import { ContextMenu } from './menu'
import { BackgroundModule } from './modules/background.module'

class App{
  #contextMenu
  #backgroundModule

  constructor() {
    this.#backgroundModule = new BackgroundModule('background', 'Поменять цвет фона')
    this.#contextMenu = new ContextMenu('.menu', [this.#backgroundModule])
  }

  run() {
    this.#contextMenu.open()
    this.#contextMenu.add()
  }
}

const app = new App()
app.run()


