import { parede } from "../cenario/parede.js";
import { cobra } from "./cobra.js";
import { painel, painelPontos, pontuacao } from "./controles.js";
import { menuPrincipal } from "../main.js";
import { jogo } from "../main.js";
import { ctx } from "../cenario/Cenario.js";
import { fases, nivelLabirinto, setNivelLabirinto} from "./labirinto.js";


let menuFim = document.getElementById("gameOver");
let colisao = document.getElementById("colisao");
let pontosTotais = document.getElementById("pontosTotais");
let conclusao = document.getElementById("conclusao");

export let gameOver = {
    telaDeMorte: function(){//define valores pra tela de morte
    this.morte = true;
    cobra.direcao = undefined;
    pontosTotais.innerText = painel.pontos;
    painelPontos.style.display = "none";
    },

    colisaoParede: function(){
        for(let i=0;i<parede.parede.length;i++){
            if(cobra.cabeca().x == parede.parede[i].x &&
               cobra.cabeca().y == parede.parede[i].y){

                menuFim.style.display = "block";
                colisao.textContent = "a parede";

                gameOver.telaDeMorte();
            }
        }
    },

    colisaoCorpo: function(){
        for(let i=1;i<cobra.corpo.length;i++){
            if(cobra.cabeca().x == cobra.corpo[i].x && 
               cobra.cabeca().y == cobra.corpo[i].y){

                menuFim.style.display = "block";
                colisao.textContent = "o proprio corpo";

                gameOver.telaDeMorte();
               }
        }
    },

    recomecar: function(){
                cobra.redefinir();
                menuFim.style.display = "none";
                conclusao.style.display = "none";

                gameOver.morte = false;
                painel.pontos = 0;
                pontuacao.innerText = "00";
                painelPontos.style.display = "block";
                
                if(nivelLabirinto >= fases[nivelLabirinto]().exigencia){
                    nivelLabirinto = 0;
                    labirinto1();
                }
    },

    menu: function(){
        menuFim.style.display = "none";
        menuPrincipal.style.display = "block";
        cobra.redefinir();
        clearInterval(jogo); 
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        setNivelLabirinto(0);
        painel.pontos = 0;
        pontuacao.textContent = "00";
    },
    morte: false
}

window.recomecar = gameOver.recomecar;
window.menu = gameOver.menu;