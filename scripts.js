function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme')
  var filmeFavorito = campoFilmeFavorito.value
  if (filmeFavorito.endsWith('.jpg')){
  listarFilmesNaTela(filmeFavorito)
} else {
  alert ("Imagem inválida")
} 
  campoFilmeFavorito.value = ("")
}

function listarFilmesNaTela(filmeFavorito) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filmeFavorito + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
