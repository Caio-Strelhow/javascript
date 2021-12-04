var inNome = document.getElementById('inNome');
var btOK = document.getElementById('btOK');
var outText = document.getElementById('outText');

function responder(){
    var nome = inNome.value;
    if(nome == ""){
        outText.innerText = 'Olá, você esqueceu de pôr o seu nome!'
        inNome.focus();
    }else{
        outText.innerText = `Olá, ${nome}, bem vindo ao site!`
    }
}
btOK.addEventListener('click', responder)
