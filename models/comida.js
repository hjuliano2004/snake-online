import { bloco } from "../cenario/bloco.js";
import { tamanho } from "../cenario/Cenario.js";
import { parede } from "../cenario/parede.js";
import { cobra } from "./cobra.js";
import { painel } from "./controles.js";

function cores(){
return Math.floor(Math.random() * 100);
}

function random(){
    return {
        x: Math.floor(Math.random() * 20) * tamanho,
        y: Math.floor(Math.random() * 20) * tamanho,
        cor: `#${cores()}${cores()}${cores()}`,
        comida: true
    } 
}

export let comida = {
    comida: {x: undefined, y: undefined, cor: undefined, comida: true},

    drop: function(){
        this.comida = random();
    },

    comer: function(){
        if(cobra.cabeca().x == comida.comida.x &&
         cobra.cabeca().y == comida.comida.y){
            this.drop();
            cobra.incremento();
            painel.incremento();
            comida.correcao();
        }

    },

    render: function(){
        bloco(comida.comida);
    },

    correcao: function(){
            let colide = false;

        do{
            colide = false;
            for(let i=0; i<cobra.corpo.length;i++){
                if(cobra.corpo[i].x === this.comida.x &&
                   cobra.corpo[i].y === this.comida.y){
                    colide = true;
                    break;
                }
            }

            for(let i=0;i<parede.parede.length;i++){
                if(parede.parede[i].x === comida.comida.x &&
                   parede.parede[i].y === comida.comida.y){
                    colide = true;
                    break;
                }
            }

            if(colide){
                comida.drop();
            }

        }while(colide);
    }
}