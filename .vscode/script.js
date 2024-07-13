function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img
     const img = document.querySelector("#profile img")

    // substituir a imagem   
    if(html.classList.contains('light')) {
      // se tiver light mode, adicionar a img light
      img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se sem a light mode, manter a normal
        img.setAttribute("src", "./assets/avatar.png")
    }






}
