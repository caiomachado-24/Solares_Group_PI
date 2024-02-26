let containerLocais = document.getElementById('Portifolio')


function carregarContainer() {
    console.log(locais);

    containerLocais.innerHTML = ''


    for (let i = 0; i < locais.length; i++) {

        containerLocais.innerHTML += ` 
        <div class="col-lg-4 col-md-4 col-12 mb-4">           
            <div class="card card-rotate">
                <div class="card-frente">
                    <img src="${locais[i].url}" class="card-img" alt="" height="300">
                </div>
                <div class="card-tras text-center card-img-overlay">
                    <h5 class="card__title">${locais[i].titulo}</h5>
                    <p class="m-2">${locais[i].descricao}</p>
                </div>
            </div>
        </div>
    `
    }
}
carregarContainer()