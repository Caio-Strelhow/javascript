function confirmar(){
    var nome = document.getElementById("nome")
    var cor = document.getElementById("cor")
    var porta = document.getElementById("portas")
    var texto = document.getElementById("texto")
    var nome = nome.value
    var cor = cor.value
    var porta = porta.value
    var cor = cor.toLowerCase()
    if(cor == '' && porta == '' && nome == ''){
        alert('Você não preencheu nenhum dos campos!!')
    }else if(cor == '' && porta == ''){
        alert(`${nome}, você não preencheu os demais campos!!`)
    }else if(nome == '' && cor == ''){
        alert('Você não preencheu os campos nome e cor!!')
    }else if(nome == '' && porta == ''){
        alert('Você não preencheu os campos nome e porta!!')
    }else if(nome == ''){
        alert('Você não preencheu o campo nome!!')
    }else if(cor == ''){
        alert('Você não preencheu o campo cor!!')
    }else if(porta == ''){
        alert('Você não preencheu o campo porta!!')
    }else if(porta != '2' && porta != '4'){
        alert('Use as opções de porta disponíveis!!')
    }else if(cor != 'vermelho' && cor != 'preto' && cor != 'branco'){
        alert('Use as opções de cor disponíveis!!')
    }else if (cor == 'preto' && porta == '4'){
        texto.innerHTML = (`Olá, ${nome}, seu carro terá acréscimo de 3% pela cor PRETO e mais 10% por ser 4 portas`)
    }else if(cor == 'preto' && porta == '2'){
        texto.innerHTML = (`Olá, ${nome}, seu carro terá apenas um acréscimo de 3% pela cor PRETO`)
        }else if(cor == 'vermelho' && porta == '4'){
            texto.innerHTML = (`Olá, ${nome}, seu carro terá acréscimo de 5% pela cor VERMELHO e mais 10% por ser 4 portas!!`)
        }else if(cor == 'vermelho' && porta == '2'){
            texto.innerHTML = (`Olá, ${nome}, seu carro terá apenas um acréscimo de 5% pela cor VERMELHO`)
        }else if(cor == 'branco' && porta == '2') {
            texto.innerHTML = (`Olá, ${nome}, seu carro não terá nenhum acréscimo pela escolha do BRANCO e por ter apenas 2 portas!!`)
        }else if(cor == 'branco' && porta == '4') 
            texto.innerHTML = (`Olá, ${nome}, seu carro não terá o acréscimo de cor por ser BRANCO mas terá o acréscimo de 10% por ser 4 portas!!`)
        }
    

