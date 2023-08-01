//Dado o array abaixo, acesse o segundo elemento e armazene-o em uma variável chamada "segundoElemento".

const meuArray = [10, 20, 30, 40, 50];
let segundoElemento = meuArray[1];
console.log(`Valor do segundo elemento: ${segundoElemento}`);

//Calcule e exiba o tamanho do segundo array:
const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
let tamanhoFrutas = frutas.length;
console.log(`Tamanho do segundo array: ${tamanhoFrutas}`);

//Adicione o elemento "pera" ao final do array de frutas do exercício anterior
frutas.push('pera');
console.log(frutas);

//Remova o primeiro elemento do array de frutas do exercício anterior.
frutas.shift();
console.log(frutas);

//Dado o array abaixo, verifique se o número 25 está presente e exiba uma mensagem indicando se ele foi encontrado ou não.
const numeros = [10, 20, 30, 40, 50];
//Primeiro método
let acharNumero = numeros.includes(25);
console.log("--- Metódo INCLUDES---");
if (acharNumero === false) {
    console.log("25 não foi encontrado");
}else {
    console.log("25 foi encontrado");
}

//Segundo metódo
let find = numeros.find(elemento => elemento === 25);
console.log("--- Metódo FIND---");
if (find === undefined) {
    console.log("25 não foi encontrado");
}else {
    console.log("25 foi encontrado");
}

//Terceiro método
let procurarNumero = numeros.indexOf(25);
console.log("--- Metódo INDEX OF---");
if (procurarNumero === -1) {
    console.log("25 não foi encontrado");
}else {
    console.log("25 foi encontrado");
}


