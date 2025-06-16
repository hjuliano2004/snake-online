import { bloco } from "../cenario/bloco.js";

export let cobra = {

    corpo : [{x:300, y:240,}, {x:270, y:240,}, {x:240, y:240}],

    direcao : undefined,

    incremento : function(){
        cobra.corpo.push({x: undefined, y: undefined});
    },

    movimento : function(x, y){
        cobra.corpo.unshift({x: x, y: y});
        cobra.corpo.pop();
    }, 

    render : function(){
        cobra.corpo[0].cor = "red";
        bloco(this.corpo[0]);
        for(let i=1;i<cobra.corpo.length;i++){
            cobra.corpo[i].cor="green";
            bloco(this.corpo[i]);
        }
    },
    redefinir : function(){
        this.corpo = [{x:300, y:240,}, {x:270, y:240,}, {x:240, y:240}];
        this.direcao = undefined;
    },

    cabeca: function(){
        return this.corpo[0];
    }
}

window.incremento = cobra.incremento;