//Classifique um número em três categorias: negativo, zero ou positivo
let num = true;
let tipoNum = typeof(num);

if(num < 0) {
    console.log("Negativo");
} else if (num === 0) {
    console.log("Igual a zero");
} else if (num > 0){
    console.log("Positivo");
}

//Verifique se um número é divisível por 2, 3 ou 5.
if (num % 2 === 0) {
    console.log("Divisível por 2")
} else if (num % 3 === 0) {
    console.log("Divisível por 3")
} else if (num % 5 === 0){
    console.log("Divisível por 3")
}

//Classifique uma variável em quatro categorias: booleana, numérica, string ou indefinida.
if(tipoNum === true || tipoNum === false) {
    console.log("É booleano")
} else if (tipoNum === typeof(1)) {
    console.log("É número")
} else if (tipoNum === typeof("x")) {
    console.log("É string")
} else if (tipoNum === undefined) {
    console.log("É indefinido")
}

//Classifique um número em cinco categorias: negativo, zero, positivo, par ou impar
if(num < 0) {
    console.log("Número menor que zero")
} else if (num === 0) {
    console.log("Número igual a zero")
} else if(num > 0) {
    console.log("Número positivo")
} else if (num % 2 === 0) {
    console.log("Par")
} else if (num % 2 !== 0 && tipoNum === typeof(5)) {
    console.log("Número ímpar.")
}


//Verifique se um número é divisível por 2, 3, 5 ou 7
if (num % 2 === 0) {
    console.log("Divisivel por 2")
} else if (num % 3 === 0) {
    console.log("Divisivel por 3")
} else if (num % 5 === 0){
    console.log("Divisivel por 3")
} else if (num % 7 === 0) {
    console.log("Divisivel por 7")
}