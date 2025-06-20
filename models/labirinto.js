import { parede } from "../cenario/parede.js";

let nivelLabirinto = 1;

export function labirinto1(){
    parede.orizontal(1, 1, 8);
    parede.vertical(1, 2, 8);

    parede.orizontal(1, 600, 8);
}