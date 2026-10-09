// Objetos em JS (Baseado em chave e valor)
const aluno = {
    nome: "Vitor",
    idade: 27,
    curso: "ADS"
}
console.log(aluno);

// Acessar a propriedade nome do objeto aluno
console.log(aluno.nome);
console.log(aluno["nome"]);

// alterando a idade do aluno
aluno.idade = 25;
console.log(aluno);
