function criptografarTexto() {
    var textoOriginal = document.getElementById("campoTexto").value;
    var textoCriptografado = criptografar(textoOriginal);
    document.getElementById("resultado").textContent = textoCriptografado;
    document.getElementById("resultado").classList.remove("resultadoImagem");
}

function descriptografarTexto() {
    var textoOriginal = document.getElementById("campoTexto").value;
    var textoDescriptografado = descriptografar(textoOriginal);
    document.getElementById("resultado").textContent = textoDescriptografado;
    document.getElementById("resultado").classList.remove("resultadoImagem");
}

function criptografar(texto) {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
}

function descriptografar(texto) {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
}
