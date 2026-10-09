// Módulo de cálculos: funções puras, sem perguntas e sem console.log
// Recebe um array de notas e retorna a média
export function calcularMedia(notas) {
let soma = 0;
for (const nota of notas) {
soma += nota;
}
return soma / notas.length;
}
// Recebe a média e retorna a situação do aluno
export function definirSituacao(media) {
if (media &gt;= 7) {
return &#39;Aprovado&#39;;
} else if (media &gt;= 5) {
return &#39;Recuperação&#39;;
}
return &#39;Reprovado&#39;;
}
// Recebe o array de alunos e retorna o de maior média
export function encontrarMelhorAluno(alunos) {
let melhor = alunos[0];
for (const aluno of alunos) {
if (aluno.media &gt; melhor.media) {
melhor = aluno;
}
}
return melhor;
}