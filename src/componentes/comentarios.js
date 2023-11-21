// IMPORT COMPONENT
import { comentario } from './comentario.js'

const insertar = (array) => {
  let row = ''

  array.forEach(element => {
    row +=
      `
      ${comentario.script(element.autor, element.fecha, element.comentario)}
      `
  })

  return row
}

// EXPORT
export { insertar }
