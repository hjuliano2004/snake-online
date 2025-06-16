import { parede } from "../cenario/parede.js";
import { cobra } from "./cobra.js";
import { painel, pontuacao } from "./controles.js";

let menuFim = document.getElementById("gameOver");
let colisao = document.getElementById("colisao");
let pontosTotais = document.getElementById("pontosTotais");

export let gameOver = {
    colisaoParede: function(){
        for(let i=0;i<parede.parede.length;i++){
            if(cobra.cabeca().x == parede.parede[i].x &&
               cobra.cabeca().y == parede.parede[i].y){

                this.morte = true;
                cobra.direcao = undefined;
                colisao.textContent = "a parede";
                pontosTotais.innerText = painel.pontos;
            }
        }
    },

    colisaoCorpo: function(){
        for(let i=1;i<cobra.corpo.length;i++){
            if(cobra.cabeca().x == cobra.corpo[i].x && 
               cobra.cabeca().y == cobra.corpo[i].y){
                menuFim.style.display = "block";

                this.morte = true;
                cobra.direcao = undefined;
                colisao.textContent = "o proprio corpo";
                pontosTotais.innerText = painel.pontos;
               }
        }
    },

    recomecar: function(){
                cobra.redefinir();
                menuFim.style.display = "none";
                gameOver.morte = false;
                painel.pontos = 0;
                pontuacao.innerText = "00";
    },

    morte: false
}

window.recomecar = gameOver.recomecar;