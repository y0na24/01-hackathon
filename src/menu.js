import { Menu } from './core/menu'
import { Module } from './core/module'
import { addHideClass } from './utils/utils'

export class ContextMenu extends Menu {
  #itemArr

  constructor(selector, itemArr) {
    super(selector)
    this.#itemArr = [...itemArr]
  }

  open() {
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault()

      this.el.style.top = `${event.clientY}px`
      this.el.style.left = `${event.clientX}px`
      this.el.classList.add('open')
      
      addHideClass('.notice-block')
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
