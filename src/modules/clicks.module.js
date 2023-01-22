import {Module} from '../core/module'
import * as Utils from "../utils"

export class ClicksModule extends Module {
  #increaseWrapper = this.#increaseClicksScore.bind(this)
  #currentTime

  constructor(type, text, parentElementOnTheDOM, clickPlaceOnTheDOM, quantitySeconds) {
    super(type, text)
    this.#appendCalculatorDiv(parentElementOnTheDOM)

    this.timerBlock = parentElementOnTheDOM.querySelector("div.timer")
    this.timerBlock.innerHTML = this.#getHTML()
    
    this.eventBlock = {
      score: parentElementOnTheDOM.querySelector(".score-block .primary"),
      timer: parentElementOnTheDOM.querySelector(".timer-block .primary"),
      scoreBlock: parentElementOnTheDOM.querySelector(".score-block"),
      currentTimeBlock: parentElementOnTheDOM.querySelector(".timer-block")
    }

    this.quantitySeconds = quantitySeconds
    this.clickPlaceOnTheDOM = clickPlaceOnTheDOM
    this.parentElementOnTheDOM = parentElementOnTheDOM

    this.quantityClicks = 0 
    this.interval = null
    this.isActivated = false

    this.#updateTimer(quantitySeconds)
  }

  #updateTimer(time) {
    console.log(Utils.getFormattedTime(time));
    this.eventBlock.timer.innerHTML = Utils.getFormattedTime(time)
  }

  trigger() {
    const clickModule = document?.querySelector(`[data-type="${this.type}"]`)
    
    clickModule.addEventListener('click', () => {
      if (this.timerBlock && !this.isActivated) {
        Utils.makeElementVisible(this.timerBlock)
        this.#start()
        console.log("START");
      } else {
        this.#stop()
      }
    })
  }

  #start() {
    if (this.quantitySeconds === 0) {
      return
    }

    if (this.eventBlock.currentTimeBlock.classList.contains('hide')) {
      Utils.makeElementVisible(this.eventBlock.currentTimeBlock)
      Utils.makeElementHidden(this.eventBlock.scoreBlock)
    }

    this.isActivated = true
    this.#currentTime = this.quantitySeconds
    
    this.clickPlaceOnTheDOM.addEventListener("click", this.#increaseWrapper)

    this.#updateTimer(this.quantitySeconds)
    this.interval = setInterval(() => {
      this.#currentTime--
      this.#updateTimer(this.#currentTime)
      if (this.#currentTime === 0) {
        this.#stop(this.#currentTime)
      }
    }, 1000)
  }

  #increaseClicksScore() {
    ++this.quantityClicks
  }

  #stop(time) {
    clearInterval(this.interval)

    this.clickPlaceOnTheDOM.removeEventListener("click", this.#increaseWrapper)
    this.#updateInteface(time)
    
    this.quantityClicks = 0
    this.isActivated = false

    if (!this.eventBlock?.scoreBlock.classList.contains('hide')) {
      let visibilityTime = 5
      this.interval = setInterval(() => {
        visibilityTime--
        if (visibilityTime == 0) {
          Utils.makeElementHidden(this.eventBlock.scoreBlock)
        }
      }, 1000)
    } else {
      Utils.makeElementHidden(this.eventBlock.scoreBlock)
      this.#start()
    }
  }

  #updateInterface(time) {
    if (time === 0) {
      Utils.makeElementVisible(this.eventBlock.scoreBlock)
      this.eventBlock.score.innerHTML = this.quantityClicks
      Utils.makeElementHidden(this.eventBlock.currentTimeBlock)
    }
  }

  #appendCalculatorDiv(targetElement) {
    const timer = document.createElement('div')
    timer.classList.add("timer")
    targetElement.append(timer)
    this.timerBlock = targetElement.querySelector("div.timer")
    this.timerBlock.innerHTML = this.#getHTML()
  }

  #getHTML() {
    return `
    <div class="click-event-block">
      <div class="timer-block hide">
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