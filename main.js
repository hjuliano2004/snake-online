import { grade, tamanho } from  './cenario/Cenario.js';
import { cobra } from './models/cobra.js';
import { ctx } from './cenario/Cenario.js';
import { movimentacao } from './models/controles.js';
import { painel } from './models/controles.js';
import { comida } from './models/comida.js';
import { gameOver } from './models/gameOver.js';
import { controle } from './models/controles.js';
import { pausaBtn } from './models/controles.js';
import { painelPontos } from './models/controles.js'; 
import { fase} from './models/labirinto.js';
import { parede } from './cenario/parede.js';

export let menuPrincipal = document.getElementById("menuPrincipal");

export let jogo = null;

export function inicio(){//garante o inicio correto do jogo em qualquer modo

    menuPrincipal.style.display = "none";
    cobra.redefinir();//é necessario definir a posiçao da cobra antes de dropar uma nova comida
    comida.drop();
    comida.correcao();
    gameOver.morte = false;
    pausaBtn.style.display = "block";
    painelPontos.style.display = "block";
}

function classico(){
    clearInterval(jogo);

    inicio();
    
jogo = setInterval(()=>{

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grade();
    comida.comer();
    cobra.render();
    controle.dobra();
    movimentacao();
    comida.render(comida.comida);
    gameOver.colisaoCorpo();

}, painel.dificuldades[painel.sequencia].velocidade);//a velocidade é determinada pela dificuldade

}



function labirintos(){
    clearInterval(jogo);

    //labirinto1();//é necessario criar as paredes antes de dropar a comida
    inicio();
    
jogo = setInterval(()=>{

    fase();
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grade();
    parede.render();


    comida.comer();
    movimentacao();
    controle.dobra();
    cobra.render();
    comida.render();
    gameOver.colisaoCorpo();
    gameOver.colisaoParede();

}, painel.dificuldades[painel.sequencia].velocidade);//a velocidade é determinada pela dificuldade

}

window.painel = painel;
window.classico = classico;
window.labirintos = labirintos;
window.dificuldade = painel.dificuldade;