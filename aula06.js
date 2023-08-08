const pergunta = require("readline-sync");
/*
function exibirSaudacao() {
    console.log("Olá, mundo!");
}
exibirSaudacao();
*/

/*
function saudar(nome) {
    console.log(`Olá, ${nome}. Boa tarde!`);
}

saudar('Thiago');

*/

/*
function exibirSaudacaoEInfos(nome, idade, dia, mes, ano) {
    console.log(`Olá, ${nome}, notei que você tem ${idade} anos. Você nasceu em ${dia} de ${mes} de ${ano}.`);
}

exibirSaudacaoEInfos("João", 31, 4, "Outubro", 1991);]
*/

//Crie uma função chamada saudação que exiba a mensagem "Olá, mundo!" no console quando for chamada.
/*
function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();
*/
//Escreva uma função chamada dobro que aceite um parâmetro num e exiba o dobro desse número no console.
/*
let num = pergunta.questionInt("Digite o número que você deseja dobrar: ");

function dobro(num) {
    console.log(`O dobro de ${num} é ${num * 2}`);
}
dobro(num);
*/

//Crie uma função chamada mostrarNumeros que receba dois parâmetros, inicio e fim. 
//Essa função deve exibir todos os números inteiros no intervalo de inicio a fim (inclusive) no console.

let inicio = pergunta.questionInt("Qual o número inicial? ");
let fim = pergunta.questionInt("Qual o número final? ");
function mostrarNumeros(inicio, fim) {
    /*
    while(inicio < fim) {
        console.log(inicio);
        inicio++;
    }
    */
   for(inicio; inicio < fim; inicio++) {
        console.log(inicio);
   }
}

//mostrarNumeros(inicio, fim);

//Escreva uma função chamada verificarPar que aceite um número como entrada e exiba no console se 
//o número é par ou não.
/*
let numero = pergunta.questionInt("Qual número você deseja verificar se é par? ");
function verificarPar(numero) {
    if(numero % 2 == 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é impar.`);
    }
}
verificarPar(numero);
*/
//Crie uma função chamada imprimirLista que aceite um array como parâmetro e exiba cada elemento desse array
//no console, um por um.

const frutas = [];

//let quantElementosArray = pergunta.questionInt("Quantos elementos você deseja colocar no array? ");

for(let k = 0; k < quantElementosArray; k++) {
    let fruta = pergunta.question("Escreva o nome das frutas que você deseja inserir na lista: ");
    frutas.push(fruta);
}

//const frutas = ["laranja", "maça", "uva", "melão", "banana"];
;
function imprimirLista(array) {
    /*
    while(i < frutas.length) {
        console.log(frutas[i]);
        i++
    }
    */
   console.log("------Lista de frutas: ------")
    for(let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}
//imprimirLista(frutas);

//Escreva uma função chamada calcularMedia que receba um array de números como parâmetro e calcule 
//a média desses números. Não é necessário exibir o resultado, apenas retorne o valor da média.
const numerosMedia = [];

for(let k = 0; k < quantElementosArray; k++) {
    let n = pergunta.question("Escreva um por um os números que você deseja tirar a média: ");
    numerosMedia.push(n);
}
let soma = 0;
function calcularMedia() {
    for(let k = 0; k < numerosMedia.length; k++) {
        soma = soma + numerosMedia[k];
    }
    let media
    media = soma / (numerosMedia.length + 1);
    return media;
}

//Crie uma função chamada maiorNumero que receba um array de números como parâmetro e exiba o maior número presente no array no console.


//