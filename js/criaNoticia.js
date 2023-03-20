let sectionNoticias = document.getElementById('noticias')
let adicionaNoticia = JSON.parse(localStorage.getItem("adicionaNoticia"))
let imgStorage = JSON.parse(localStorage.getItem('img')) || [];
let titulo = JSON.parse(localStorage.getItem('titulo')) || [];
let subtitulo = JSON.parse(localStorage.getItem('subtitulo')) || [];

if(adicionaNoticia == 1) {
    sectionNoticias.innerHTML += `
        <div class="card noticia d-inline-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-1" >
            <img src="${imgStorage[0].url}" class="imagem-fome" alt="${imgStorage[0].alt}">
            <div class="card-body">
                <h5 class="card-title titulo-importante">${titulo[0].texto}</h5>
                <p class="card-text" id="p-do-ngc-la">${subtitulo[0].texto}</p>
                <a href="novaNoticia.html" class="btn btn-primary btn-card">Saiba mais!</a>
            </div>
        </div>
    `
}