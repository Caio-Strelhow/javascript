var inProduto = document.getElementById("produto");
var inPreco = document.getElementById("preco");
var inQuantidade = document.getElementById("quantidade");
var btPagamento = document.getElementById("btPagamento");
var semDesconto = document.getElementById("semDesconto");
var comDesconto = document.getElementById("comDesconto");

function calcular(){
    var produto = inProduto.value;
    var preco = inPreco.value;
    var quantidade = inQuantidade.value;

    semDesconto.textContent = "O seu produto, " + produto + ", sem descontos sai por: R$" +  Number(quantidade) * Number(preco).toFixed(2);
    comDesconto.textContent = "O seu produto, " + produto + ", com 15% de desconto sai por: R$" + Number(quantidade) * Number(preco) * 0.85 + " e parcelado em 3 vezes por: R$" + Number(quantidade) * Number(preco) / Number(3).toFixed(2);
}
btPagamento.addEventListener("click", calcular);