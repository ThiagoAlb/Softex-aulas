const pergunta = require("readline-sync");

//Imprima os números de 1 a 10.
/*
let i = 1;

while(i <= 10) {
    console.log(i);
    i++;
}

console.log("-----------------------------------------");
*/
//Calcule a soma dos números de 1 a 100.
/*
let soma = 0;
while (i <= 100) {
    
    soma = soma + i;
    i++
}
console.log(`O valor da soma dos números de 1 a 100 é igual a: ${soma}`);
*/
//Conte e imprima a quantidade de números pares de 1 a 50.
/*
let quantPares = 0;
while (i <= 50) {
    if (i % 2 == 0) {
        quantPares = quantPares + 1;
    }
    i++;
}
console.log(`A quantidade de números pares é igual a: ${quantPares}`);
*/

//Multiplique um número por 2 até que o resultado seja maior que 1000.
/*
let numero = pergunta.questionInt("Informe um número inteiro: ");

while (numero <= 1000) {
    numero = numero * 2;
}
console.log(numero);

*/

//verifique se um número é primo.
/*
let k = 2;
let ePrimo = true;

while (k < numero) {
    if (numero % k == 0) {
        console.log("Não é primo");
        ePrimo = false;
        break;

    } k++
}
if (ePrimo) {
    console.log("É primo.")
}
*/

//Faça o usuário digitar sua senha até que seja digitada a senha correta.
/*
let senha = pergunta.questionInt("Informe sua senha: ");

let confirmarSenha = pergunta.questionInt("Confirme sua senha: ");

while (confirmarSenha !== senha) {
    console.log("SENHA INCORRETA! Tente novamente.")
    confirmarSenha = pergunta.questionInt("Confirme sua senha: ");
}

console.log("Senha Correta! Acesso permitido.");
*/

//Imprima os múltiplos de 3 de 1 a 30
/*
let m = 1
while (m <= 30) {
    if (m % 3 == 0) {
        console.log(m);
    }
    m++
}

*/

//Calcule a média de uma lista de números.
/*
const lista = [];
let n = 1;
let quantNumeros = pergunta.questionInt("Quantos números você quer tirar a média? ");
while (n <= quantNumeros) {
    let numero = pergunta.questionInt("Digite um número: ");
    lista.push(numero)
    n++
}

let soma = 0;
let t = 0;
while (t < lista.length) {
    soma += lista[t];
    t++;
}

const media = soma / quantNumeros;
console.log(`A média dos números é igual a ${media}`);
*/

//Calcule o fatorial de um número.

let fatNumero = pergunta.questionInt('Qual numero deseja fatorar? ');
let somaFatNumero = 0;
while (fatNumero >= 2) {
    let resultado = fatNumero * (fatNumero - 1);
    somaFatNumero = somaFatNumero + resultado;
    fatNumero--;
    console.log(somaFatNumero);
}


//Imprima os números de 10a 1 em ordem decrescente.
/*
let j = 10;
while(j >= 1) {
    console.log(j);
    j--
}
*/