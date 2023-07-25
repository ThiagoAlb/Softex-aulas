const pergunta = require("readline-sync");

//Verifique o dia da semana com base em um número de 1 a 7.
let numero = pergunta.questionInt("Qual o número da semana? ");
switch(numero) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
}

//Converta um número de mês em seu nome correspondente.
let numMes = pergunta.questionInt("Qual o número do mês? ");

switch(numMes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;    
}

//Exiba uma mensagem de acordo com o estado civil: "solteiro", "casado", "divorciado", ou "outro"
let estadoCivil = pergunta.question("Qual seu estado civil? ");
switch(estadoCivil) {
    case "solteiro":
        console.log("Você está solteiro");
        break;
    case "casado":
        console.log("Você está casado");
        break;
    case "divorciado":
        console.log("Você está divorciado");
        break;
    default:
        console.log("Outro");
        break;
}


//Exiba uma mensagem dependendo do tipo de animal: "cachorro", "gato", "passáro" ou "outro"
let animal = pergunta.question("Qual seu animal de estimação? ");
switch(animal) {
    case "cachorro":
        console.log("Seu animal é um cachorro");
        break;
    case "gato":
        console.log("Seu animal é um gato");
        break;
    case "passáro":
        console.log("Seu animal é um passáro");
        break;
    default:
        console.log("Outro");
        break;
}

//Calcule o valor de uma operação matemática com base em um operador: soma, subtração, multiplicação ou divisão
console.log(`1 - Soma
2 - Subtração
3 - Multiplicação
4 - Divisão`)
let operador = pergunta.questionInt("Escolha o número da operação que você deseja efetuar: ");
let num1 = pergunta.questionFloat("Qual o primeiro número? ");
let num2 = pergunta.questionFloat("Qual o segundo número? ");

switch (operador) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break;
    case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}