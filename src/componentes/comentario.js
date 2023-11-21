const comentario = {

  script: (autor, fecha, comentario) => {
    const template =
    `
    <div class="card p-3 my-2">
    <h5 class="text-end">Autor: <span>${autor}</span><span class="ms-4">${fecha}</span></h5>
    <p>${comentario}</p>
    </div>
    
    `

    return template
  }
}

export { comentario }
