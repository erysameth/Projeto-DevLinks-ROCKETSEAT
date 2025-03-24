function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Selfie de Alexandra fazendo biquinho para a câmera"
    )
  } else {
    img.setAttribute("alt", "Foto de Alexandra séria olhando para a câmera")
  }
}
