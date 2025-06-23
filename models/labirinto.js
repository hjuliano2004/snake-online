import { parede } from "../cenario/parede.js";
import { painel, pontuacao } from "./controles.js";
import { inicio, jogo } from "../main.js";
import { cobra } from "./cobra.js";
import { gameOver } from "./gameOver.js";

export let nivelLabirinto = 0;

  export function labirinto1(){

    parede.parede = [];

    parede.orizontal(1, 1, 7);
    parede.vertical(1, 2, 7);

    parede.orizontal(1, 20, 8);
    parede.vertical(1, 14, 19);

    parede.orizontal(14, 1, 20);
    parede.vertical(20, 2, 7);

    parede.orizontal(14, 20, 20);
    parede.vertical(20, 14, 19);

    return {exigencia: 500, nivel: 1};
}

     function labirinto2(){

        parede.parede = [];

        parede.orizontal(1, 1, 7);
        parede.vertical(1, 2, 7);

        parede.orizontal(1, 20, 8);
        parede.vertical(1, 14, 19);

        parede.orizontal(14, 1, 20);
        parede.vertical(20, 2, 7);

        parede.orizontal(14, 20, 20);
        parede.vertical(20, 14, 19);

        parede.orizontal(1, 10, 20);

        return {exigencia: 400, nivel: 2};
}

export let fases = [labirinto1, labirinto2];

export function fase(){

    if(fases.length === nivelLabirinto){
        clearInterval(jogo);
    }

    if(painel.pontos >= fases[nivelLabirinto]().exigencia){
        inicio();

        painel.pontos = 0;
        pontuacao.innerText = painel.pontos;
        nivelLabirinto++;
        fases[nivelLabirinto]();

        console.log("fase");
    }
}