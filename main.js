import { grade, tamanho } from  './cenario/Cenario.js';
import { cobra } from './models/cobra.js';
import { ctx } from './cenario/Cenario.js';
import { movimentacao } from './models/controles.js';
import { painel } from './models/controles.js';
import { comida } from './models/comida.js';
import { gameOver } from './models/gameOver.js';
import { controle } from './models/controles.js';

export let menuPrincipal = document.getElementById("menuPrincipal");

export let jogo = null;

function classico(){

    if(jogo){
        clearInterval(jogo);
    }
    clearInterval(jogo);

    menuPrincipal.style.display = "none";
    cobra.redefinir();
    comida.drop();
    gameOver.morte = false;

jogo = setInterval(()=>{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grade();
    comida.comer();
    cobra.render();
    controle.dobra();
    movimentacao();
    comida.render(comida.comida);
    gameOver.colisaoCorpo();
    gameOver.colisaoParede();
}, painel.dificuldades[painel.sequencia].velocidade);
}

window.painel = painel;
window.classico = classico;
window.dificuldade = painel.dificuldade;