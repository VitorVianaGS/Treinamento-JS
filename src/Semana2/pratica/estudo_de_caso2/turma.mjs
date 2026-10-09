import {lerTexto, lerNumero, fecharEntrada} from "./entrada.mjs";
import {calcularMedia, definirSituacao, encontrarMelhorAluno} from "./notas.mjs";

let quantidade = await lerNumero("Quantos alunos? ", 1, 50, true);
let alunos = [];

for (let i = 0; i < quantidade; i++) {
    console.log(`--- Aluno ${i + 1} ---`);

    let nome;

    while (true) {
        nome = await lerTexto("Nome: ");

        if (nome !== "") {
            break;
        }

        console.log("Nome obrigatório.");
    }

    let nota1 = await lerNumero("Nota 1: ", 0, 10);
    let nota2 = await lerNumero("Nota 2: ", 0, 10);
    let nota3 = await lerNumero("Nota 3: ", 0, 10);

    let notas = [nota1, nota2, nota3];
    let media = calcularMedia(notas);
    let situacao = definirSituacao(media);

    alunos.push({
        nome: nome,
        media: media,
        situacao: situacao
    });
}

console.log("\n===== RELATÓRIO DA TURMA =====");

let aprovados = 0;
let somaMedias = 0;

for (let aluno of alunos) {
    console.log(`${aluno.nome}: ${aluno.media.toFixed(1)} - ${aluno.situacao}`);

    somaMedias += aluno.media;

    if (aluno.situacao === "Aprovado") {
        aprovados++;
    }
}

let mediaTurma = somaMedias / alunos.length;
let melhor = encontrarMelhorAluno(alunos);

console.log(`Média da turma: ${mediaTurma.toFixed(1)}`);
console.log(`Melhor desempenho: ${melhor.nome} (${melhor.media.toFixed(1)})`);
console.log(`Aprovados: ${aprovados} de ${alunos.length}`);

fecharEntrada();