import { parede } from "../cenario/parede.js";
import { cobra } from "./cobra.js";

let menuFim = document.getElementById("gameOver");
let colisao = document.getElementById("colisao");

export let gameOver = {
    colisaoParede: function(){
        for(let i=0;i<parede.parede.length;i++){
            if(cobra.cabeca().x == parede.parede[i].x &&
               cobra.cabeca().y == parede.parede[i].y){
                console.log("colisao parede");
                this.morte = !this.morte;
                cobra.direcao = undefined;
                colisao.textContent = "a parede";
            }
        }
    },

    colisaoCorpo: function(){
        for(let i=1;i<cobra.corpo.length;i++){
            if(cobra.cabeca().x == cobra.corpo[i].x && 
               cobra.cabeca().y == cobra.corpo[i].y){
                console.log("colisao com o corpo");
                menuFim.style.display = "block";
                this.morte = !this.morte;
                cobra.direcao = undefined;
                colisao.textContent = "o proprio corpo";
               }
        }
    },

    recomecar: function(){
        console.log("recomecar");
                cobra.redefinir();
                menuFim.style.display = "none";
                gameOver.morte = !gameOver.morte;
    },

    morte: false
}

window.recomecar = gameOver.recomecar;