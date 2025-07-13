import { bloco } from "../cenario/bloco.js";
import { tamanho } from "./Cenario.js";

export let parede = {
    parede : [],
    vertical : function(x=0, y=0, z=0){//z representa o final da linha
        y = (y * tamanho)-tamanho;
        while(y<z*tamanho){
            parede.parede.push({x: (x*tamanho)-tamanho, y: y, cor: "yellow"});
            y += tamanho;
        }
    },

    orizontal : function(x=0, y=0, z=0){
        x = (x*tamanho)-tamanho;

        while(x<z*tamanho){
            parede.parede.push({x: x, y: (y*tamanho)-tamanho, cor: "yellow"});
            x += tamanho;
        }

    },

    render : function(){
        
        for(let i=0;i<parede.parede.length;i++){
            bloco(parede.parede[i]);
        }
    }
} 