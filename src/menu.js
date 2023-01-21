import { Menu } from './core/menu'
import { Module } from './core/module'
import { makeElementHidden } from './utils/utils'
import { makeElementVisable } from './utils/utils'
import { ClicksModule } from './modules/clicks.module'

export class ContextMenu extends Menu {
  #itemArr

  constructor(selector, itemArr) {
    super(selector)
    this.#itemArr = [...itemArr]
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      if (!this.#itemArr) {
        this.el.style.top = `${event.clientY}px`
        this.el.style.left = `${event.clientX}px`
        this.el.classList.add('open')
      }

      makeElementHidden('.notice-block')
    })
    // FOR TEST
    let cm = new ClicksModule("ClicksModule", "click", document.body, document.body, 5)

    document.body.addEventListener('keyup', (event) => {
      cm.trigger()
    })
  }

  close() {
    this.el.classList.remove('open')
  }

  add() {
    this.#itemArr.forEach((item) => {
      if (item instanceof Module) {
        this.el.insertAdjacentHTML('beforeend', item.toHTML())
        item.trigger()
      }
    })
  }
}
