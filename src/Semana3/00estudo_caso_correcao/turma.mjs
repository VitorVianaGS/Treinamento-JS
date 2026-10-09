// Programa principal: usa os módulos de entrada e de cálculos
import { lerTexto, lerNumero, fecharEntrada } from &#39;./entrada.mjs&#39;;
import {
calcularMedia,
definirSituacao,
encontrarMelhorAluno,
} from &#39;./notas.mjs&#39;;

const alunos = [];
const quantidade = await lerNumero(&#39;Quantos alunos? &#39;, 1, 50, true);
// 1. Coleta os dados de cada aluno
for (let i = 1; i &lt;= quantidade; i++) {
console.log(`--- Aluno ${i} ---`);
const nome = await lerTexto(&#39;Nome: &#39;);
const notas = [];
for (let n = 1; n &lt;= 3; n++) {
notas.push(await lerNumero(`Nota ${n}: `, 0, 10));
}
const media = calcularMedia(notas);
alunos.push({ nome, media, situacao: definirSituacao(media) });
}
fecharEntrada();

// 2. Exibe o relatório
console.log(&#39;&#39;);
console.log(&#39;===== RELATÓRIO DA TURMA =====&#39;);
let somaMedias = 0;
let aprovados = 0;
for (const aluno of alunos) {
console.log(`${aluno.nome}: ${aluno.media.toFixed(1)} - ${aluno.situacao}`);
somaMedias += aluno.media;
if (aluno.situacao === &#39;Aprovado&#39;) {
aprovados++;
}
}
const melhor = encontrarMelhorAluno(alunos);
console.log(`Média da turma: ${(somaMedias / alunos.length).toFixed(1)}`);
console.log(`Melhor desempenho: ${melhor.nome} (${melhor.media.toFixed(1)})`);
console.log(`Aprovados: ${aprovados} de ${alunos.length}`);

