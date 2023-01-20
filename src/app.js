import './styles.css'
import { ContextMenu } from './menu'

class App{
  #contextMenu
  
  constructor() {
    this.#contextMenu = new ContextMenu('.menu', [])
  }

  run() {
    this.#contextMenu.open()
    this.#contextMenu.add()
  }
}

const app = new App()
app.run()

