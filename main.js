import { grade, tamanho } from  './cenario/Cenario.js';
import { cobra } from './models/cobra.js';
import { ctx } from './cenario/Cenario.js';
import { movimentacao } from './models/controles.js';
import { painel } from './models/controles.js';
import { comida } from './models/comida.js';
import { gameOver } from './models/gameOver.js';
comida.drop();

setInterval(()=>{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    grade();
    comida.comer();
    cobra.render();
    movimentacao();
    comida.render(comida.comida);

    gameOver.colisaoCorpo();
    gameOver.colisaoParede();
}, 200);



//parede.vertical(2, 3, 10);
//parede.orizontal(5, 3, 10);
//parede.render(parede.parede);
//console.log(parede.parede);

window.painel = painel;