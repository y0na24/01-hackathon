import { Module } from '../core/module'
import { random } from '../utils'

export class MessageModule extends Module {
  #span
  #messageArr

  constructor(type, text, span, messageArr) {
    super(type, text)

    this.#span = document.createElement(span)
    this.#messageArr = messageArr
  }

  trigger() {
    const createButton = document.querySelector(`[data-type='${this.type}']`)

    createButton.addEventListener('click', () => {

      if (this.#span) {
        this.#createMessage(this.#span)

        const removeMessage = setInterval(() => {
          document?.querySelector(`#random_message`)?.remove()
          this.#createMessage(this.#span)
        }, 2000)

        setTimeout(() => {
          document?.querySelector(`#random_message`)?.remove()
          clearInterval(removeMessage)
        }, 10000)
      }
    })
  }

  #createMessage() {
    const length = this.#messageArr.length - 1

    this.#span.textContent = this.#messageArr[random(0, length)]
    this.#span.className = 'random_massage'
    this.#span.id = 'random_message'
    document.body.insertAdjacentElement('beforeend', this.#span)
  }
}
