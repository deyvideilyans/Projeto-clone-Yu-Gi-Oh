const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function() {
        const cartaVirada = cartao.querySelector(".carta-virada");
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});

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
