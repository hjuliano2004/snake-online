import { tamanho } from "../cenario/Cenario.js";
import { cobra } from "./cobra.js"
import { gameOver } from "./gameOver.js";

export let pontuacao = document.getElementById("pontuacao");

export let controle = {

    cima : function(){
        if(!painel.pausa && cobra.direcao != "baixo" && !gameOver.morte){
        cobra.direcao = "cima";
        }
    },

    baixo: function(){
        if(!painel.pausa && cobra.direcao != "cima" && !gameOver.morte){
            cobra.direcao = "baixo";
        }
    },

    esquerda: function(){
        if(!painel.pausa && cobra.direcao != "direita" && !gameOver.morte){
        cobra.direcao = "esquerda";
        }
    },

    direita: function(){
        if(!painel.pausa && cobra.direcao != "esquerda" && !gameOver.morte){
        cobra.direcao = "direita";
        }
    },
    
    teclado: window.addEventListener("keydown", function(event){
        switch(event.key) {
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
        }})

}

export function movimentacao(){
    if(!painel.pausa){

    switch (cobra.direcao) {
    case "cima":
        cobra.movimento(cobra.cabeca().x, cobra.cabeca().y-tamanho);

        break;
    case "baixo":
        cobra.movimento(cobra.corpo[0].x, cobra.corpo[0].y+tamanho); 

        break;
    case "direita":
        cobra.movimento(cobra.cabeca().x+tamanho, cobra.cabeca().y);

        break;
    case "esquerda":
        cobra.movimento(cobra.cabeca().x-tamanho, cobra.cabeca().y);
}}
}


export let painel = {
    pausa : false,
    funcaoPausa: function(){
        if(cobra.direcao){
        this.pausa = !this.pausa;
        }
    },
    pontos: 0,

    incremento: function(){
        this.pontos = this.pontos + 10;
        pontuacao.textContent = this.pontos;
    }
}


window.controle = controle;
window.painel = painel;