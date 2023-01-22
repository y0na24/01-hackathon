import {Module} from '../core/module'

export class ShapeModule extends Module {

  constructor(text, type, parentElementOnTheDOM) {
    super(type, text)
    
    this.parentElementOnTheDOM = parentElementOnTheDOM
  }

  trigger() {
    const positionInfo = this.parentElementOnTheDOM.getBoundingClientRect()
    console.log("height", positionInfo.height)
    console.log("width", positionInfo.width)
  }

  #createGeometryFigure(geometryType) {
    switch (geometryType) {
      case "square":
        
        break;
      case "rectangle":

        break;
      default:

        break;
    }
  }


  #generateSquare(size, xPosition, yPosition, color) {
    const square = document.createElement('div')
    square.style.position = "relative"
    square.style.width = size
    square.style.height = size
    square.style.left = xPosition
    square.style.top = yPosition
    square.style.background = color
    return 
  }

  #generateRectangle(width, height, xPosition, yPosition, color) {
  
  }

  #generateCircle(radius, xPosition, yPosition, color) {

  }

  #generateOval(width, height, xPosition, yPosition, color) {

  }

  #generateTriangle(leftIndent, rightIndent, bottomIndent, color) {

  }

  #generateParallelogram(width, height, skew, color) {

  }

  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }
}