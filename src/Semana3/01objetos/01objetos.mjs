const aluno = {
    nome: 'Vitor',
    idade: 27,
    curso: 'ADS'
}

/*
const aluno      <> variável que se refere ao objeto
{...}            <> conteúdo do objeto
nome = 'Ana'     <> Propriedade nome com valor Ana (tipo string)
idade: 27        <> Propriedade com valor 19 (tipo number)
curso: 'ADS'     <> Propriedade com valor 'ADS' (tipo string)
*/

console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.curso)

aluno.idade = 20;
console.log(aluno.idade)
console.log(aluno)

// Criando a classe aluno
class Aluno {
    nome = "";
    idade = 0
}

const aluno1 = new Aluno()
aluno1.nome = 'Ana';
aluno1.idade = 19;
console.log(aluno1)

const aluno2 = new Aluno()
aluno2.nome = 'Vitor';
aluno2.idade = 27;
console.log(aluno2);

// objetos - é uma unidade de software que junta dados e ações em um único lugar.