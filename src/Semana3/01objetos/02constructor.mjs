class Aluno {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const aluno = new Aluno("Vitor", 50);

console.log(aluno)
console.log(aluno.nome)
console.log(aluno.idade)



class Cliente {
    nome;

    constructor(nomeRecebido) {
        this.nome = nomeRecebido;
    }
}

const cliente = new Cliente("Vitor");
console.log(cliente)

// Classe - é um modelo ou 'forma' que define as caracteristicas e os comportamentos
// que os futuros objetos terão

// construtor - é um inicializador da classe quando você instância um objeto

