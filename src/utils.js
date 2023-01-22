export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const makeElementHidden = (target) => {
  if (!target) {
    throw new Error(`Target path should not be empty`)
  }

  let elementUI = target

  if (!(target instanceof HTMLElement)) {
    elementUI = document.querySelector(target)
  }

  if (!elementUI.classList?.contains('hide')) {
    elementUI?.classList?.add('hide')
  }
}

export const makeElementVisible = (target) => {
  if (!target) {
    throw new Error(`Target path should not be empty`)
  }

  let elementUI = target

  if (!(target instanceof HTMLElement)) {
    elementUI = document.querySelector(target)
  }

  if (elementUI.classList.contains('hide')) {
    elementUI.classList.remove('hide')
  }
}

export const getFormattedTime = (quantitySeconds) => {
  if (quantitySeconds < 10) {
    return `00:0${quantitySeconds}`
  }

  if (quantitySeconds >= 60 && quantitySeconds < 600) {
    return `0${(quantitySeconds / 60).toFixed(0)}:${quantitySeconds % 60}`
  }

  return `${quantitySeconds}`

}

export const getRandomColor = (() => {
  return `rgb(${random(1, 255)}, ${random(1, 255)}, ${random(1, 255)})`;
})




export function getMessages() {
  

  return messageArr
}

export function getSounds() {
  

  return soundsArr
}

