const pergunta = require('readline-sync')
//Não é necessário passar o segunda argumento na chamada da função
/*
function exibirSaudacao(nome, saudacao='Hello') {
    console.log(`${saudacao}, ${nome}. Você tem ${idade} anos.`);
}

exibirSaudacao("Thiago", 22);
*/

//Crie uma função chamada saudacao que aceita um parâmetro nome para uma pessoa e exiba no console a saudação "Olá, [nome]!"
//utilizando um valor padrão para nome caso nenhum seja fornecido.
/*
function saudacao(nome="senhor(a)") {
    console.log(`Olá, ${nome}!`)
}

saudacao()

*/

//Escreva uma função chamada calculadora que receba dois números (num1 e num2) e um operador matemático (operacao) 
//como parâmetros. A função deve realizar a operação matemática entre num1 e num2 (por exemplo, adição, subtração, 
// multiplicação, divisão) com um valor padrão de operação sendo "+".
/*
let num1 = pergunta.questionInt("Primeiro número: ");
let num2 = pergunta.questionInt("Segundo número: ");
let operacao = pergunta.question("Digite o operador matemático: ")


function calculadora(num1, num2, operacao) {
    switch(operacao) {
        case "+":
            let soma = num1 + num2;
            console.log(`${num1} + ${num2} = ${soma}`);
            break;
        case "-":
            let subtracao = num1 - num2;
            console.log(`${num1} - ${num2} = ${subtracao}`);
            break;
        case "*":
            let multiplicacao = num1 * num2;
            console.log(`${num1} * ${num2} = ${multiplicacao}`);
            break;
        case "/":
            let divisao = num1 / num2;
            console.log(`${num1} / ${num2} = ${divisao}`);
            break;
        default:
            let somar = num1 + num2;
            console.log(`${num1} + ${num2} = ${somar}`);
            break; 
    }
}
calculadora(num1, num2, operacao);

*/

//Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para iniciar a contagem regressiva.
//A função deve exibir no console uma contagem regressiva a partir do número fornecido até 1, utilizando
//um valor padrão de início igual a 10.
/*

function contagemRegressiva(inicio = 10) {
    inicio = pergunta.questionInt("Digite o número para contagem regressiva: ");
    for(let i = 1;inicio >= i; inicio--) {
        console.log(inicio);
    }
}

contagemRegressiva()

*/

//Escreva uma função chamada apresentacao que aceite três parâmetros: nome, idade, e profissao. A função deve exibir
//no console uma mensagem de apresentação no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", 
//utilizando valores padrão para parâmetros caso nenhum seja fornecido.

function apresentacao(nome="João", idade=20, profissao="estudante") {
    console.log(`Olá, eu sou ${nome}, tenho${idade} e sou ${profissao}.`)
}


//Crie uma função chamada mensagemPersonalizada que receba uma parâmetro texto para uma mensagem e um parâmetro
//estilo para o estilo da mensagem (por exemplo, "normal", "negrito", "itálico"), com uma valor padrão de estilo
//sendo "normal". A função deve exibir no console o texto fornecido com o estilo especificado.



//___________________________________________________________________________________________________________________


function criarMensagemDeSaudacao(nome) {
    const mensagem = `Hello, ${nome}`;
    return mensagem;
}

console.log(criarMensagemDeSaudacao("Thiago"));

//Crie uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.
/*

function somar(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}

console.log(somar(1,3));

*/

//Escreva uma função chamada ehPar que aceite um número como parâmetro e retorne true se o número for par e false
//caso contrário.
/*
function ehPar(numero) {
    if(numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(ehPar(4));
*/

//Crie uma função chamada maiorNumero que receba três números como parâmetros e retorne o maior deles.

function maiorNumero(n1,n2,n3) {
    if(n1 > n2 || n1 > n3) {
        return n1;
    } else if (n2 > n1 || n2 > n3){
        return n2;
    }else {
        return n3;
    }
}

console.log(maiorNumero(2,3,4));

//Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa como parâmetros e retorne
//o índice de massa corporal (IMC) calculado.

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

console.log(`O seu IMC é: ${calcularIMC(90,1.8)}`);

