const pergunta = require("readline-sync");

//Faça um programa que leia o nome do aluno, três notas e mostre o nome e a média(aritmética) do aluno.

/*

function lerNome() {
    const nome = pergunta.question('Digite seu nome: ');
    return nome
}

function calcularMedia() {
    const n1 = pergunta.questionInt('Digite a primeira nota: ');
    const n2 = pergunta.questionInt('Digite a segunda nota: ');
    const n3 = pergunta.questionInt('Digite a terceira nota: ');
    const media = (n1 + n2 + n3) / 3;
    return media
}

console.log(`Nome: ${lerNome()}
Média: ${calcularMedia()} `)

*/

//Faça um programa com JavaScript para verificar se um determinado ano, fornecido pelo usuário, é bissexto.
//Um ano é bissexto se for divisível por 400 ou se for divisível por 4 e não for divisível por 100. Exemplos:
//1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.

/*

const ano = pergunta.questionInt('Digite um ano no padrão XXXX: ');

if(ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto`);
} else if(ano % 4 === 0 && ano % 100 != 0) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é bissexto.`)
}

*/

/*Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada estado possui uma taxação
de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript, que
o usuário entre com o valor e o estado de destino do produto e o praograma retorne o preço final do produto
acrescido do imposto correspondente ao estado onde será vendido. O programa deve mostrar uma mensagem de erro
caso o estado fornecido não esteja na lista de estados válidos.*/

/*

let valor = pergunta.questionFloat('Digite o valor do produto: ');

function calcularPrecoFinal() {
    console.log(`Digite o número referente ao Estado: 
1 - MG(7%)
2 - SP(12%)
3 - RJ(15%)
4 - MS(8%)`);

    let estado = pergunta.questionInt('Digite o número referente ao Estado: ');
    switch(estado) {
        case 1:
            const precoFinalMG = valor * 1.07;
            console.log(`Destino: Minas Gerais.
        Valor final: ${precoFinalMG}`);
            break;
        case 2:
            const precoFinalSP = valor * 1.12;
            console.log(`Destino: São Paulo.
        Valor final: ${precoFinalSP}`);
            break;
        case 3:
            const precoFinalRJ = valor * 1.15;
            console.log(`Destino: Rio de Janeiro.
        Valor final: ${precoFinalRJ}`);
            break;
        case 4:
            const precoFinalMS = valor * 1.08;
            console.log(`Destino: Mato Grosso do Sul.
        Valor final: ${precoFinalMS}`);
            break;
        default:
            console.log('ERRO: Digite um número válido.');
            calcularPrecoFinal();
    }
}

calcularPrecoFinal();

*/

/*Faça um programa que calcule e mostre a soma dos 50 primeiros números pares. Faça três versões desse programa,
cada uma usando uma estrutura de repetição diferente (for, while, do-while). Qual das três estruturas é a mais
adequada para este programa? Por que?
*/

/*

let soma = 0;
for(let i = 0; i <= 50; i++) {
    soma = soma + i;
}

console.log(soma);
let soma1 = 0;
let i = 0;
while(i <= 50) {
    soma1 = soma1 + i;
    i++;
}

console.log(soma1);

let j = 0;
let soma2 = 0;
do {
    soma2 = soma2 + j;
    j++
} while(j <= 50);

console.log(soma2);

//A mais adequada é a for, pois precisa de menos linhas para resolver o mesmo problema

*/

//Faça um programa em JavaScript que receba do usuário um número N e depois imprima os N primeiros números 
//naturais ímpares.

/*

let numero = pergunta.questionInt('Digite um número positivo: ');


for(let i = 0; i <= numero; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}

*/

/*Uma empresa contrata um encanador a R$ 30 por dia. Crie um programa que solicite o número de dias trabalhados
pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são descontados 8% para pagamento
de impostos e taxas devidas.*/

/*

let diasTrabalhados = pergunta.questionFloat('Digite a quantidade de dias trabalhados: ');


function calcularValorPago() {
    const valor = diasTrabalhados * 30;
    const valorLiquido = valor * 0.92;
    return valorLiquido;
}

console.log(calcularValorPago(diasTrabalhados));


*/

/*Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração, em segundos, de uma
experiência biológica. O programa deve informar o horário (hora:minuto:segundo) de término da mesma.*/

const hora = pergunta.question('Digite o horário de ínicio: ');
const duracao = pergunta.question('Qual o tempo de duração em segundos? ');



