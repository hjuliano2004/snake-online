import { tamanho } from "../cenario/Cenario.js";
import { cobra } from "./cobra.js";
import { comida } from "./comida.js";
import { gameOver } from "./gameOver.js";

let dificuldadeBtn = document.getElementById("dificuldade");
export let pontuacao = document.getElementById("pontuacao");
export let pausaBtn = document.getElementById("pausa");
export let painelPontos = document.getElementById("painel"); 


export let controle = {
  cima: function () {
    if (!painel.pausa && cobra.direcao != "baixo" && !gameOver.morte) {
      cobra.direcao = "cima";
    }
  },

  baixo: function () {
    if (!painel.pausa && cobra.direcao != "cima" && !gameOver.morte) {
      cobra.direcao = "baixo";
    }
  },

  esquerda: function () {
    if (!painel.pausa && cobra.direcao != "direita" && cobra.direcao && !gameOver.morte) {
      cobra.direcao = "esquerda";
    }
  },

  direita: function () {
    if (!painel.pausa && cobra.direcao != "esquerda" && !gameOver.morte) {
      cobra.direcao = "direita";
    }
  },

  dobra: function () {
  
    if (cobra.cabeca().x < 0) {
      cobra.corpo[0].x = 570;
    }
    if (cobra.cabeca().x > 570) {
      cobra.corpo[0].x = 0;
    }

    if (cobra.cabeca().y < 0) {
      cobra.corpo[0].y = 570;
    }
    if (cobra.cabeca().y > 570) {
      cobra.corpo[0].y = 0;
    }
      comida.comer();
  },

  teclado: window.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        controle.cima();
        break;
      case "ArrowDown":
        controle.baixo();
        break;
      case "ArrowLeft":
        controle.esquerda();
        break;
      case "ArrowRight":
        controle.direita();
        break;
      case " ":
      case "Spacebar":
        painel.funcaoPausa();
         //case
    }
  }),
};

export function movimentacao() {
  if (!painel.pausa) {
    switch (cobra.direcao) {
      case "cima":
        cobra.movimento(cobra.cabeca().x, cobra.cabeca().y - tamanho);

        break;
      case "baixo":
        cobra.movimento(cobra.corpo[0].x, cobra.corpo[0].y + tamanho);

        break;
      case "direita":
        cobra.movimento(cobra.cabeca().x + tamanho, cobra.cabeca().y);

        break;
      case "esquerda":
        cobra.movimento(cobra.cabeca().x - tamanho, cobra.cabeca().y);
    }
  }
}

export let painel = {

  pontos: 0,
  pausa: false,
  sequencia: 1,

  funcaoPausa: function () {
    if (cobra.direcao) {
      this.pausa = !this.pausa;
    }
  },

  incremento: function() {
    this.pontos = this.pontos + 10;
    pontuacao.textContent = this.pontos;
  },

  dificuldades: [
    {
      nivel: "fácil",
      velocidade: 250,
    },
    {
      nivel: "normal",
      velocidade: 150,
    },
    {
      nivel: "dificil",
      velocidade: 80,
    }
  ],


  dificuldade: function(){
    painel.sequencia++;
    if(painel.sequencia >= 3){
        painel.sequencia = 0;
    }
    dificuldadeBtn.innerText = painel.dificuldades[painel.sequencia].nivel;
  }
}

window.controle = controle;
window.painel = painel;