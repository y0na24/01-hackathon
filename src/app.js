import './styles.css'
import { addHideClass } from './utils/utils'

addEventListener("contextmenu", function() {
  addHideClass('.notice-block')
})