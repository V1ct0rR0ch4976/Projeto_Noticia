export class Noticia {
    _titulo
    _subtitulo
    _imagem
    constructor(titulo, subtitulo, imagem) {
        this._titulo = titulo
        this._subtitulo = subtitulo
        this._imagem = imagem
    }
    get titulo() {
        return this._titulo
    }
    get subtitulo() {
        return this._subtitulo
    }
    get imagem() {
        return this._imagem
    }
}