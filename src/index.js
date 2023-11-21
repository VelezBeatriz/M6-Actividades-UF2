// Import
import { header } from './componentes/header.js'
import { main } from './vistas/vistaComentarios.js'
// DOM
document.getElementById('header').innerHTML = header.template
header.script()
document.getElementById('main').innerHTML = main.template
main.script()
