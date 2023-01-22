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

export function getMessages() {
  const messageArr = [
    'Движок - в веб-разработке так называют системы управления контентом.',
    'Итерация — повторение. «Мы сделали несколько итераций» — мы повторили шаг несколько раз.',
    'Легаси —  Морально устаревший код, который не обновляется, но используется.',
    'Навбар — навигационный блок на сайте или в интерфейсе программы.',
    'Пушить — использовать команду push, публиковать что-то.',
    'Тачка — компьютер.',
    'Фидбек — от англ. Feedback — обратная связь.',
    'Фича — функция, возможность. От англ. Feature.',
    'Копипаста — от англ. Copy-Paste. Скопированный откуда-то код.',
  ]

  return messageArr
}
