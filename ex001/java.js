        var outPutSaida = document.getElementById("outSaida");
        var btMensagem = document.getElementById("geraMensagem");
        var inNome = document.getElementById("inNome");

        function gerar(){
            var nome = inNome.value;
            outPutSaida.textContent = "Olá " + nome + "!" 
        }

        btMensagem.addEventListener("click", gerar);
       