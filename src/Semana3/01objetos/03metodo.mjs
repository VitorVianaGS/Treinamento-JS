class Aluno {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Sou ${this.nome} e tenho ${this.idade} anos.`
    }
}

const aluno = new Aluno("Vitor", 27);
console.log(aluno.apresentar());