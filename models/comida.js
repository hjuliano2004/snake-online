import { bloco } from "../cenario/bloco.js";
import { tamanho } from "../cenario/Cenario.js";
import { cobra } from "./cobra.js";
import { painel } from "./controles.js";

function random(){
    return {
        x: Math.floor(Math.random() * 20) * tamanho,
        y: Math.floor(Math.random() * 20) * tamanho,
        cor: `#${Math.floor(Math.random() * 1000000)}` 
    } 
}

export let comida = {
    comida: {x: undefined, y: undefined, cor: undefined},

    drop: function(){
        this.comida = random();
    },

    comer: function(){
        if(cobra.cabeca().x == comida.comida.x &&
         cobra.cabeca().y == comida.comida.y){
            this.drop();
            cobra.incremento();
            painel.incremento();
        }
        for(let i=0;i<cobra.corpo.length;i++){
            if(cobra.corpo[i].x == this.comida.x &&
               cobra.corpo[i].y == this.comida.y){
                this.drop();
                console.log("correcao");
            }
        }
    },

    render: function(){
        bloco(comida.comida);
    }
}