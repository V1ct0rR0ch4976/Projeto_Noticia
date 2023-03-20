let btnAdiconaNoticiaNaHome = document.getElementById('btnAdiconaNoticiaNaHome')
let adicionaNoticia = JSON.parse(localStorage.getItem("adicionaNoticia")) || 0

btnAdiconaNoticiaNaHome.addEventListener('click', () => {
    adicionaNoticia = 1
    localStorage.setItem("adicionaNoticia", JSON.stringify(adicionaNoticia))
})
