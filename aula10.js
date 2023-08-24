// Como você cria um objeto vazio, chamado pessoa em JavaScript
const pessoa = {};

//Como você adiciona a propriedade "nome" com valor "João" a um objeto chamado "pessoa"?
pessoa.nome = 'João';
console.log(pessoa.nome)

//Como você acessa o valor da propriedade "idade" de um objeto chamado "usuário"
const usuario = {
    idade: 30
};

console.log(usuario.idade);

//Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como você altera o valor
//dessa propriedade para 75?
const produto = {
    preco: 50
};

produto.preco = 75;
console.log(produto.preco);

//Como você remove a propriedade "email" de um objeto chamado "contato"?

const contato = {
    email: 0
};

delete contato.email;
console.log(contato);

//Comno você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente chamado "cliente"?

const cliente = {};

cliente.endereco = 'Rua A, 123';

console.log(cliente.endereco);

//Se você tem um objeto "empresa" com a propriedade "departamentos", como você acessa o nome do primeiro departamento?
const empresa = {
    departamentos: 'RH'
}

empresa.departamentos


//Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85,90,78]. Como você altera
//a segunda nota para 95?

const student = {
    notas: [85, 90, 78]
}

student.notas[1] = 95;

console.log(student.notas[1]);

//Se você tem um objeto "dados" com uma propriedade "valores" contendo [10,20,30], como você remove o segundo valor
//(20) desse array?

const data = {
    valores: [10,20,30]
}

delete data.valores[1];

console.log(data.valores);


//Como você cria um objeto com as propriedades "título" (com o valor "Livro") e "autor" (com o valor "Maria")?

const livros = {
    titulo: 'Livro',
    autor: 'Maria'
}
