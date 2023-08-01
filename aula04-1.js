//Crie dois arrays com números de 1 a 5 e, em seguida, concatene-os em um novo array.
const array1 = [1,2,3,4,5];
const array2 = [5,4,3,2,1];

let concatArray = array1.concat(array2);
console.log("--- ARRAYS CONCATENADOS---");
console.log(concatArray);

//Dado o array de números abaixo, crie um novo array contendo apenas os números pares.
const numeros = [1,2,3,4,5,6,7,8,9,10];

let pares = numeros.filter(x => x % 2 == 0);
console.log("---ARRAY DE NÚMEROS PARES");
console.log(pares);


//Ordene o seguinte array de números em ordem crescente.
const numeros1 = [3,1,4,1,5,9,2,6,5,3,5];
console.log("--- ARRAYS DE NÚMEROS CRESCENTES---");
console.log(numeros1.sort());

//Dado o array de frutas abaixo, encontre o índice em que a fruta "laranja" está localizada.
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
let indexFrutas = frutas.indexOf('laranja');
console.log(`O índice da fruta laranja é: ${indexFrutas}`);
//Crie uma função que receba um parâmetro e verifique se é um array ou não. A função deve retornar true se for um array e false caso contrário.
function eArray(x) {
    x.isArray()
    
}


