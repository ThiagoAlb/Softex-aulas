const pergunta = require("readline-sync");

//Classifique um número em três categorias: negativo, zero ou positivo
let resposta = pergunta.questionInt("Digite um número: ");
let tipoResposta = typeof(resposta);

if(resposta < 0) {
    console.log("Negativo");
} else if (resposta === 0) {
    console.log("Igual a zero");
} else if (resposta > 0){
    console.log("Positivo");
}

//Verifique se um número é divisível por 2, 3 ou 5.
if (resposta % 2 === 0) {
    console.log("Divisível por 2")
} if (resposta % 3 === 0) {
    console.log("Divisível por 3")
} if (resposta % 5 === 0){
    console.log("Divisível por 5")
}

//Classifique uma variável em quatro categorias: booleana, numérica, string ou indefinida.
if(tipoResposta === true || tipoResposta === false) {
    console.log("É booleano")
} else if (tipoResposta === typeof(1)) {
    console.log("É número")
} else if (tipoResposta === typeof("x")) {
    console.log("É string")
} else if (tipoResposta === undefined) {
    console.log("É indefinido")
}

//Classifique um número em cinco categorias: negativo, zero, positivo, par ou impar
if(resposta < 0) {
    console.log("Número menor que zero")
} else if (resposta === 0) {
    console.log("Número igual a zero")
} else if(resposta > 0) {
    console.log("Número positivo")
} else if (resposta % 2 === 0) {
    console.log("Par")
} else if (resposta % 2 !== 0 && tipoResposta === typeof(5)) {
    console.log("Número ímpar.")
}


//Verifique se um número é divisível por 2, 3, 5 ou 7
if (resposta % 2 === 0) {
    console.log("Divisivel por 2")
} else if (resposta % 3 === 0) {
    console.log("Divisivel por 3")
} else if (resposta % 5 === 0){
    console.log("Divisivel por 3")
} else if (resposta % 7 === 0) {
    console.log("Divisivel por 7")
}