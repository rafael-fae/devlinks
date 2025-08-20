function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // get img tag
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  // alt tag changer
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Rafael Faé sorrindo, usando moletom cinza, barba, com céu azul e árvores de fundo, borda escura."
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Rafael Faé sorrindo, usando moletom cinza, barba, com céu azul e árvores de fundo."
    )
  }
}
