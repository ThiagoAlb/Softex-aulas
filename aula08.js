const pergunta = require('readline-sync');

/*
function fatorial(n) {
    if (n === 0 || n===1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);
*/

//Crie uma função recursiva chamada somaRecursiva que receba um número inteiro postivo n como argumento e calcule
//a soma de todos os números inteiros de 1 até n.

let n = pergunta.questionInt('Digite um número para que seja somado todos os números de 1 até ele: ');

function somaRecursiva(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + somaRecursiva(n - 1);
    }
}

console.log(somaRecursiva(n));

//Escreva uma função chamada Fibonacci que receba um número n como parâmetro e retorne o n-ésimo termo da sequência
//de Fibonacci. Lembre-se de implementar essa função de forma recursiva.
let x = pergunta.questionInt('Digite um número ')

function fibonacci(x) {
    if (n <= 2) {
        return x - 1;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}

console.log(fibonacci(x));