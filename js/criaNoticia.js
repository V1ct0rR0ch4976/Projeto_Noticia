import { Noticia } from "./Noticia.js";

let sectionNoticias = document.getElementById('noticias')
let adicionaNoticia = JSON.parse(localStorage.getItem("adicionaNoticia"))
let imgStorage = JSON.parse(localStorage.getItem('img')) || [];
let titulo = JSON.parse(localStorage.getItem('titulo')) || [];
let subtitulo = JSON.parse(localStorage.getItem('subtitulo')) || [];

let noticiaNova = new Noticia(titulo, subtitulo, imgStorage)

if(adicionaNoticia == 1) {
    sectionNoticias.innerHTML += `
        <div class="card noticia d-inline-block col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-1 col-1" >
            <img src="${noticiaNova.imgStorage[0].url}" class="imagem-fome" alt="${noticiaNova.imgStorage[0].alt}">
            <div class="card-body">
                <h5 class="card-title titulo-importante">${noticiaNova.titulo[0].texto}</h5>
                <p class="card-text" id="p-do-ngc-la">${noticiaNova.subtitulo[0].texto}</p>
                <a href="novaNoticia.html" class="btn btn-primary btn-card">Saiba mais!</a>
            </div>
        </div>
    `
}