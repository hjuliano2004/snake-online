import { parede } from "../cenario/parede.js";
import { painel, pontuacao } from "./controles.js";
import { inicio, jogo } from "../main.js";
import { comida } from "./comida.js";

export let nivelLabirinto = 0;

    function labirinto0(){
        parede.parede = [];
        return {exigencia: 30, nivel: 1}
    }

    function labirinto1(){

    parede.parede = [];

    parede.orizontal(1, 1, 7);
    parede.vertical(1, 2, 7);

    parede.orizontal(1, 20, 7);
    parede.vertical(1, 14, 19);

    parede.orizontal(14, 1, 20);
    parede.vertical(20, 2, 7);

    parede.orizontal(14, 20, 20);
    parede.vertical(20, 14, 19);

    return {exigencia: 30, nivel: 2};
}

    function labirinto2(){
        parede.parede = [];

        parede.orizontal(1, 1, 20);
        parede.vertical(1, 0, 20);

        parede.orizontal(0, 20, 20);
        parede.vertical(20, 1, 19);


        return {exigencia: 30, nivel: 3}
    }

     function labirinto3(){

        parede.parede = [];

        parede.orizontal(1, 1, 7);
        parede.vertical(1, 2, 7);

        parede.orizontal(1, 20, 7);
        parede.vertical(1, 14, 19);

        parede.orizontal(14, 1, 20);
        parede.vertical(20, 2, 7);

        parede.orizontal(14, 20, 20);
        parede.vertical(20, 14, 19);

        parede.orizontal(1, 10, 20);

        return {exigencia: 30, nivel: 3};
}

export let fases = [labirinto0, labirinto1, labirinto2, labirinto3];

export function fase(){

    if(fases.length === nivelLabirinto){
        clearInterval(jogo);
    }

    if(painel.pontos >= fases[nivelLabirinto]().exigencia && nivelLabirinto != fases.length - 1){
        inicio();

        painel.pontos = 0;
        pontuacao.innerText = "00";
        nivelLabirinto++;
        fases[nivelLabirinto]();

        comida.correcao();
    }
}

export function setNivelLabirinto(nivel){
    nivelLabirinto = nivel;
}