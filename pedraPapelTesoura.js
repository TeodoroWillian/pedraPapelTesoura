/* Grifinoria ganha da Sonserina, mas perde para a Corvinal;
Sonserina ganha da Cornival, mas perde para a Grifinoria;
Corvinal ganha da Grifinoria, mas perde para a Sonserina. */

const prompt = require('prompt-sync')();

console.clear();

console.log("Olá! Escolha uma casa para iniciar o jogo, Grifinoria ganha da Sonserina, mas perde para a Corvinal, Sonserina ganha da Cornival, mas perde para a Grifinoria,Corvinal ganha da Grifinoria, mas perde para a Sonserina. ")

let elementos = ["Grifinoria","Sonserina","Corvinal"]
let escolhaDoComputador;
let escolhaDoJogador;
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let desejaJogarNovamente = "sim";

while(desejaJogarNovamente == "sim"){
    let rodadas = prompt("Escolha quantas rodadas terá a partida: ");
    for(let i = 0; i< rodadas; i++){
        escolhaDoJogador = prompt("Escolha uma casa para disputa ");
        escolhaDoComputador = Math.floor(Math.random() * 3);
        console.log();
        console.log(`O computador escolheu ${elementos[escolhaDoComputador]}`);
        console.log();
        console.log(`O jogador escolheu: ${escolhaDoJogador}`);
        console.log();
        if(escolhaDoJogador == "Grifinoria" && elementos[escolhaDoComputador] == "Sonserina"){
            vitoriasJogador++
        } else if(escolhaDoJogador == "Grifinoria" && elementos[escolhaDoComputador] == "Corvinal"){
            vitoriasComputador++;
        }else if(escolhaDoJogador == "Sonserina" && elementos[escolhaDoComputador] == "Corvinal"){
            vitoriasJogador ++;
        } else if(escolhaDoJogador == "Sonserina" && elementos[escolhaDoComputador] == "Grifinoria"){
            vitoriasComputador++;
        } else if(escolhaDoJogador == "Corvinal" && elementos[escolhaDoComputador] == "Grifinoria"){
            vitoriasJogador++;
        } else if(escolhaDoJogador == "Corvinal" && elementos[escolhaDoComputador] == "Sonserina"){
            vitoriasComputador++;
        }
    
    
    }
    if(vitoriasJogador > vitoriasComputador){
        console.log("O jogador ganhou");
    }else if( vitoriasJogador == vitoriasComputador){
        console.log("Houve um empate");
    } else {
        console.log("O computador ganhou");
    }
    
    console.log();
        desejaJogarNovamente = prompt("Deseja jogar novamente?").toLowerCase();
}

