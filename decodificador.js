var criptografar = document.querySelector(".btn-criptografar");
var descriptografar = document.querySelector(".btn-descriptografar");
var txtDesejado = document.querySelector("#texto_desejado");
var txtEstrutura = document.querySelector("#estrutura");

function criptografarFunction() {
    var text = txtDesejado.value;
    var letra_1 = text.replace(/e/g, "enter");
    var letra_2 = letra_1.replace(/i/g, "imes");
    var letra_3 = letra_2.replace(/a/g, "ai");
    var letra_4 = letra_3.replace(/o/g, "ober");
    var letra_5 = letra_4.replace(/u/g, "ufat");
    document.getElementById('estrutura').innerHTML = '<textarea id="texto_decodificado" readonly>' + letra_5 + '</textarea>' + '<button id="copiar" class="btn_copiar" onclick="copiar_txt()">Copiar</button>';
}

function descriptografarFunction() {
    var text = txtDesejado.value;
    var letra_1 = text.replace(/enter/g, "e");
    var letra_2 = letra_1.replace(/imes/g, "i");
    var letra_3 = letra_2.replace(/ai/g, "a");
    var letra_4 = letra_3.replace(/ober/g, "o");
    var letra_5 = letra_4.replace(/ufat/g, "u");
    document.getElementById('estrutura').innerHTML = '<textarea id="texto_decodificado" readonly>' + letra_5 + '</textarea>' + '<button  id="copiar" class="btn_copiar" onclick="copiar_txt()">Copiar</button>';
}

function copiar_txt() {
    var txt = document.getElementById('texto_decodificado');
    txt.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}