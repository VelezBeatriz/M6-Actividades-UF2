// IMPORT COMPONENT
import { comentario } from './comentario.js'

const comentarios = {

  script: (array) => {
    let row = ''

    array.forEach(element => {
      row +=
      `
      ${comentario.script(element.autor, element.fecha, element.comentario)}
      `
    })

    return row
  }
}

// EXPORT
export { comentarios }
