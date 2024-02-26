
// INICIO CARDS homepage
let galeria = document.getElementById('galeria')
function criarGaleria() {
  galeria.innerHTML = " "
  for (let i = 0; i < dados.length; i++) {
    galeria.innerHTML += `
        <div class="col-lg-3 col-md-4 col-6 mb-3">
        <div class="card text-dark">
        <img src="${dados[i].url}" class="card-img-top" alt="..." height="200">
        <div class="card-body text-center" style="height: 15rem">
              <h5 class="card-title"><b>${dados[i].titulo.toUpperCase()}</b></h5>
              <p class="card-text">${dados[i].descricao.substring(0, 100)}.</p>  
            </div>
          </div>
    </div>
        `

  }

}
criarGaleria()
// FIM CARDS homepage