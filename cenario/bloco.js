import { ctx } from "./Cenario.js";
import { tamanho } from "./Cenario.js";

export function bloco(posicao){
    let x = posicao.x;
    let y = posicao.y;
    ctx.beginPath();
    ctx.fillStyle = posicao.cor;
    ctx.fillRect(x, y, tamanho, tamanho);
    ctx.strokeStyle = posicao.cor;
    ctx.lineWidth = 2;
}