import { bloco } from "../cenario/bloco.js";
import { tamanho } from "./Cenario.js";

export let parede = {
    parede : [],
    vertical : function(x, y, z){//z representa o final da linha
        y = (y * tamanho)-tamanho;
        while(y<z*tamanho){
            parede.parede.push({x: (x*tamanho)-tamanho, y: y, cor: "white"});
            y += tamanho;
        }
    },

    orizontal : function(x, y, z){
        x = (x*tamanho)-tamanho;

        while(x<z*tamanho){
            parede.parede.push({x: x, y: (y*tamanho)-tamanho, cor: "white"});
            x += tamanho;
        }

    },

    render : function(lista){
        for(let i=0;i<lista.length;i++){
            bloco(parede.parede[i]);
        }
    }
} 

