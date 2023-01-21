import {Module} from '../core/module'
import * as Utils from "../utils/utils"

export class ClicksModule extends Module {
  #increaseWrapper = this.#increaseClicksScore.bind(this)

  constructor(type, text, root, clicksSquare, quantitySeconds) {
    super(type, text)
    
    root.innerHTML = this.#getHTML()
    
    this.eventBlock = {
      score: root.querySelector(".score-block .primary"),
      timer: root.querySelector(".timer-block .primary"),
      scoreBlock: root.querySelector(".score-block"),
      timerBlock: root.querySelector(".timer-block")
    }

    this.root = root
    this.quantitySeconds = quantitySeconds
    this.quantityClicks = 0 
    this.clicksSquare = clicksSquare
    this.interval = null

    this.#updateTimer(quantitySeconds)
  }

  #updateTimer(time) {
    this.eventBlock.timer.innerHTML = Utils.getFormatedTime(time)
  }

  trigger() {
    if (this.root) {
      this.#start()
    } else {
      this.#stop()
    }
  }

  #start() {
    if (this.quantitySeconds === 0) {
      return
    }

    this.clicksSquare.addEventListener("click", this.#increaseWrapper)

    this.interval = setInterval(() => {
      this.quantitySeconds--
      this.#updateTimer(this.quantitySeconds)
      
      if (this.quantitySeconds === 0) {
        this.#stop(this.quantitySeconds)
      }
    }, 1000)
  }

  #increaseClicksScore() {
    ++this.quantityClicks
  }

  #stop(time) {
    clearInterval(this.interval)
    this.clicksSquare.removeEventListener("click", this.#increaseWrapper)
    this.#updateInteface(time)
    this.quantityClicks = 0
    
    let visibilityTime = 5
    this.interval = setInterval(() => {
      visibilityTime--
      if (visibilityTime == 0) {
        clearInterval(this.interval)
        this.root.remove()
      }
    }, 1000)
  }

  #updateInteface(time) {
    if (time === 0) {
      Utils.makeElementVisable(this.eventBlock.scoreBlock)
      this.eventBlock.score.innerHTML = this.quantityClicks
      this.eventBlock.timerBlock.remove()
    }
  }

  #getHTML() {
    return `
    <div class="click-event-block">
      <div class="timer-block">
        <span>Time for click: <span class="primary">${Utils.getFormatedTime(this.quantitySeconds)}</span></span>
      </div>
      <div class="score-block hide">
        <span class="current-score">Quantities clicks: <span class="primary">${this.quantityClicks=0}</span></span>
      </div>
    </div>
    `
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}