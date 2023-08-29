//Exemplo de enumerates

/*
const DiasDaSemana = {
    DOMINGO: 'Domingo',
    SEGUNDA: 'Segunda-feira',
    TERCA: 'Terça-feira',
    QUARTA: 'Quarta-feira',
    QUINTA: 'Quinta-feira',
    SEXTA: 'Sexta-feira',
    SABADO: 'Sábado'
};

console.log(DiasDaSemana.QUARTA);

*/
//Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias da semana. Como
//você usaria enums para isso e qual seria o benefício?

const DiasDaSemana = {
    DOMINGO: 'Domingo',
    SEGUNDA: 'Segunda-feira',
    TERCA: 'Terça-feira',
    QUARTA: 'Quarta-feira',
    QUINTA: 'Quinta-feira',
    SEXTA: 'Sexta-feira',
    SABADO: 'Sábado'
};

console.log(DiasDaSemana.DOMINGO);

//Facilitar o acesso a informação

//Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. Como você usaria enums para 
//essa situação?

const LittleMonster = {
    ATAQUE: 10,
    DEFESA: 6,
}

const BigMonster = {
    ATAQUE: 30,
    DEFESA: 15
}

const Boss = {
    ATAQUE: 50,
    DEFESA: 40
}

console.log(Boss.ATAQUE);

//Você está criando um aplicativo de reserva de passagens aéreas e precisa representar os diferentes tipos de 
//classes (Econômica, Executiva, Primeira Classe). Como você usaria enums para isso?

const PassagensAereas = {
    ECONOMICA: 'Econômica',
    EXECUTIVA: 'Executiva',
    PRIMEIRACLASSE: 'Primeira Classe'
}


console.log(PassagensAereas.ECONOMICA);

//Imagine que você desenvolvendo um aplicativo de tarefas e deseja categorizar as tarefas em 'Trabalho', 'Estudo',
//e 'Lazer'. Como você usaria enums para esse cenário?

const CategoriasDeTrabalho = {
    TRABALHO: 'Trabalho',
    ESTUDO: 'Estudo',
    LAZER: 'Lazer'
}

console.log(CategoriasDeTrabalho.ESTUDO);

//Em um aplicativo de e-commerce, você precisa definir os diferentes status de um pedido: "Em processamento", 
//"Enviado" e "Entregue". Como você usaria enums para isso?

const StatusDoPedido = {
    EMPROCESSAMENTO : 'Em processamento',
    ENVIADO: 'Enviado',
    ENTREGUE: 'Entregue'
}

console.log(StatusDoPedido.ENTREGUE);