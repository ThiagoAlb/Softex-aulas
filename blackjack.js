const pergunta = require("readline-sync");

let jogadorCarta1 = pergunta.questionInt("Valor da primeira carta do jogador: ");
let bancaCarta1 = pergunta.questionInt("Valor da primeira carta da banca: ");
let jogadorCarta2 = pergunta.questionInt("valor da segunda carta do jogador: ");
let somaJogador = jogadorCarta1 + jogadorCarta2;
let bancaCarta2 = pergunta.questionInt("Valor da segunda carta da banca: ");
let bancaCarta3 = pergunta.questionInt("Valor da terceira carta da banca: ")
let somaBanca = bancaCarta1 + bancaCarta2 + bancaCarta3;

if(somaJogador > 21) {
    console.log("O jogador perdeu!")
}else if(somaBanca > 21 && somaJogador > 21) {
    console.log("A banca venceu!")
} else if (somaJogador <= 21 && somaJogador > somaBanca) {
    console.log("O jogador venceu!")
} else {
    console.log("A banca venceu!")
}

//console.log(`A soma dos pontos do jogador foi: ${soma}`);


/*
let carta1 = Math.floor((Math.random() * 10) + 1);
console.log(`Valor da primeira carta: ${carta1}`);

let carta2 = Math.floor((Math.random() * 10) + 1);
console.log(`Valor da primeira carta: ${carta2}`);

let soma = carta1 + carta2;
console.log(soma);



//Testar se a soma delas é maior que 21
if(soma > 21 ) {
    console.log("Você perdeu!")
} 

console.log(`A soma dos pontos do jogador foi: ${soma}`)
*/