export function calcularMedia(notas) {
    return (notas[0] + notas[1] + notas[2]) / 3;
}

export function definirSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

export function encontrarMelhorAluno(alunos) {
    let melhor = alunos[0];

    for (let aluno of alunos) {
        if (aluno.media > melhor.media) {
            melhor = aluno;
        }
    }

    return melhor;
}