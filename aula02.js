//Declarar uma variável chamada 'minhaVar', sem valor.
var minhaVar;

//Após declarar, atribua o valor 10 à variável 'minhaVar'.
minhaVar = 10;

//Delcare uma nova variável chamada 'soma', e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log(soma);

//Atribua à variável 'soma' todo o valor dela, somando 1, usando o operador de soma abreviado.
soma = ++soma;
console.log(soma);

//Atribua à variável 'soma' todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

//Qual o valor de 'soma' até aqui? 
console.log(soma);

//Declare uma variável chamada 'fazSol', atribuindo à ela o valor booleano que representa 'verdadeiro'.
var fazSol = true;

//Declare uma variável chamada comida que recebe um array com os valores 'arroz', 'feijao', 'ovo'.
var comida = ['arroz', 'feijao', 'ovo'];

//Digite a instrução qu imprime o valor de 'feijao', que está na variável 'comida'.
console.log(comida[1]);

//Digite o código que verifica se a variável 'soma' é igual a variável 'minhaVar' (testando também o tipo).
console.log(soma === minhaVar);

//Digite o código que verifica se a variável 'minhaVar' é menor ou igual à variável 'soma'.
console.log(minhaVar <= soma);

//Crie uma função chamada 'divisao' que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(n1,n2) {
    return n1 / n2;
}
//Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log(divisao(10,2));