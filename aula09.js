/*
const usuarios = [
    {nome:'Robinson', idade: 18},
    {nome:'Willian', idade: 28},
    {nome:'Janaina', idade: 19},
    {nome:'Carla', idade: 25},
    {nome:'Maíra', idade: 32},
    {nome:'George', idade: 30},
    {nome:'Camila', idade: 30},
];
*/
/*
for(let i = 0; i < usuarios.length; i++) {
    console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos.`);
}
*/

/*
for(let item in usuarios) {
    console.log(`Nome: ${usuarios[item].nome}, Idade: ${usuarios[item].idade}`);
}
*/

/*
for(let item of usuarios) {
    console.log(`Nome: ${item.nome}, Idade: ${item.idade}`);
}
*/

/*
const numeros = [150, 100, 200, 250, 50];
const palavras = ['cadeira', 'lapis', 'caneta', 'caderno', 'mesa'];
const logicos = [true, false, false, true, true];


for(let item in numeros) {
    console.log(numeros[item]);
}

for(let i in palavras) {
    console.log(palavras[i]);
}

for(let k in logicos) {
    console.log(palavras[k]);
}

for(let numero of numeros) {
    console.log(numero);
}

for(let palavra of palavras) {
    console.log(palavra);
}

for(let logico of logicos) {
    console.log(logico);
}
*/

//Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.
/*
const numeros = [3, 7, 2, 9, 5];
for(let numero of numeros) {
    console.log(numero);
}
*/
//Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d:40}. Utilize um laço "for...in"
//para iterar pelas chaves do objeto e calcular a soma de todos os valores.
/*
const objetos = [
    {a: 10, 
    b: 20, 
    c: 30, 
    d:40}
];

let soma = 0;
for(let objeto in objetos) {
    let valoresObjetos = Object.values(objetos[objeto]);
    for(let valores in valoresObjetos) {
        soma = soma + valoresObjetos[valores];
    }
}
console.log(soma)

*/

//Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada 
//número é par. Se for par, adicione-o a um novo array. No final, exiba o novo array com números pares.
/*
const numeros = [12, 5, 8, 21, 16, 7];
let numerosPar = [];

for(let numero of numeros) {
    if(numero % 2 === 0) {
        numerosPar.push(numero);
    }
}
console.log(numerosPar);
*/

//Considere um objeto com informações de estudantes: const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};
//Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante:
// idade" no console

/*

const estudantes = {alice: 18, bob: 20, carol: 19, david: 21};

for(let estudante in estudantes) {
    if(estudantes[estudante] === 19) {
        console.log(`${estudante}: ${estudantes[estudante]} anos`)
    }
}


*/

//Imagine que você tem uma matriz bidimensional representando uma grade de pontos: const pontos = [[2,5,8],[3,9,12],[4,6,10]];
//utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

const pontos = [
    [2,5,8],
    [3,9,12],
    [4,6,10]
];

for(let linha in pontos) {
    console.log(pontos[linha]);
    for(let coluna in pontos[linha]) {
        //console.log();
    }
}