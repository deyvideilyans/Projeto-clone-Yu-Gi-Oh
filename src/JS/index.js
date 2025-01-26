const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function() {
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCertaoSelecionado(); 

   cartaoAtual++;
   mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", function() {
    if(cartaoAtual === 0) return;

    esconderCertaoSelecionado();
  
   cartaoAtual--;
   mostrarCartao(cartaoAtual);
})

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCertaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
