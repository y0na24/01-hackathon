import {Module} from '../core/module'
import * as Util from '../utils'
import * as Constants from '../constants'

export class ShapeModule extends Module {

  constructor(type, text, placeForTheElementUI) {
    super(type, text)
    
    this.placeForTheElementUI = placeForTheElementUI
  }

  trigger() {
    const shapeModule = document.querySelector(`[data-type='${this.type}']`)

    shapeModule.addEventListener('click', () => {
      this.#createGeometryFigure(Util.random(0, 3) , this.placeForTheElementUI)
    })

    
  }

  #createGeometryFigure(geometryType, placeForFigure) {
    const placeForFigureInfo = placeForFigure.getBoundingClientRect()
    const width = Util.random(1, placeForFigureInfo.width / 2)
    const height = Util.random(1, placeForFigureInfo.width / 2)

    switch (geometryType) {
      case 0:
        placeForFigure.append(this.#generateSquare(
          width,
          Util.random(1, placeForFigureInfo.width - width),
          Util.random(1, placeForFigureInfo.height - width - Constants.FIXED_HIEGHT),
          Util.getRandomColor()
        ))
        break;
      case 1:   
        placeForFigure.append(
          this.#generateRectangle(
            width,
            height,
            Util.random(1, placeForFigureInfo.width - width),
            Util.random(1, placeForFigureInfo.height - height - Constants.FIXED_HIEGHT),
            Util.getRandomColor()
          )
        )
        break;
      case 2:
        placeForFigure.append(
          this.#generateCircle(
            width,
            Util.random(1, placeForFigureInfo.width - width),
            Util.random(1, placeForFigureInfo.height - width - Constants.FIXED_HIEGHT),
            Util.getRandomColor()
          )
        )
        break
      default:
        placeForFigure.append(
          this.#generateOval(
          width,
          height,
          Util.random(1, placeForFigureInfo.width - width),
          Util.random(1, placeForFigureInfo.height - height - Constants.FIXED_HIEGHT),
          Util.getRandomColor()
          )
        )
        break
    }
  }


  #generateSquare(size, xPosition, yPosition, color) {
    const square = document.createElement('div')
    square.style.position = "absolute"
    square.style.width = size + 'px'
    square.style.height = size + 'px'
    square.style.left = xPosition + 'px'
    square.style.bottom = yPosition + 'px'
    square.style.background = color
    square.style.boxShadow = "0px 0px 10px #ff7aa2"
    square.classList.add('geometry')
    return square
  }

  #generateRectangle(width, height, xPosition, yPosition, color) {
    const rectangle = document.createElement('div')
    rectangle.style.width = width + 'px'
    rectangle.style.height = height + 'px'
    rectangle.style.left = xPosition + 'px'
    rectangle.style.bottom = yPosition + 'px'
    rectangle.style.background = color
    rectangle.classList.add('geometry')
    return rectangle
  }

  #generateCircle(radius, xPosition, yPosition, color) {
    const circle = document.createElement('div')
    circle.style.width = radius + 'px'
    circle.style.height = radius + 'px'
    circle.style.left = xPosition + 'px'
    circle.style.bottom = yPosition + 'px'
    circle.style.borderRadius = '50%'
    circle.style.background = color
    circle.classList.add('geometry')
    return circle
  }

  #generateOval(width, height, xPosition, yPosition, color) {
    const oval = document.createElement('div')
    oval.style.width = width + 'px'
    oval.style.height = height + 'px'
    oval.style.left = xPosition + 'px'
    oval.style.bottom = yPosition + 'px'
    oval.style.borderRadius = '50%'
    oval.style.background = color
    oval.classList.add('geometry')
    return oval
  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}