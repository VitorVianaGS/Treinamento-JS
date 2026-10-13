/*
Exemplo resolvido: Crie Turma com nome e array de aluno inicialmente vazio.
Crie duas turmas, adicione Ana  à primeira e verifique se a segunda continua vazia.
*/

class Turma {
    nome;
    alunos;
    constructor(nome) {
        this.nome = nome;
        this.alunos = [];
    }
    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }
}
const manha = new Turma("Turma da Manhã");
const noite = new Turma("Turma da Noite");
manha.adicionarAluno("Ana");
console.log(manha.alunos.length);
console.log(noite.alunos.length);
