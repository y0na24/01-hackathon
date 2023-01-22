import {Module} from '../core/module'
import {random} from '../utils'

export class SoundModule extends Module {
  #soundsArr

  constructor(type,text, soundsArr) {
    super(type,text)

    this.#soundsArr = soundsArr
  }

  trigger() {
    this.#formatSoundArray()
    const length = this.#soundsArr.length - 1
    const soundModule = document.querySelector(`[data-type='${this.type}']`)

    soundModule.addEventListener('click', () => {
      this.#soundsArr[random(0, length)].play()
    })
  }

  #formatSoundArray() {
    this.#soundsArr = this.#soundsArr?.map(sound => {
      const audio = new Audio(sound)

      return audio
    })
  }
}