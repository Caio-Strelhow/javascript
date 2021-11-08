var nome = document.getElementById("nome");
var cor = document.getElementById("cor");
var porta = document.getElementById("porta");
var button = document.getElementById("botao");
var texto = document.getElementById("texto")

function confirmar(){
    var nome = nome.value
    var cor = cor.value
    var porta = porta.value
    
    texto.textContent= "Caioso tá bolado";

}

button.addEventListener("click", confirmar);