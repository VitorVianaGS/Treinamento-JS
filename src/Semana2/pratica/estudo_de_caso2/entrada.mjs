import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function lerTexto(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

export async function lerNumero(pergunta, minimo, maximo, inteiro = false) {
    while (true) {
        let valor = (await lerTexto(pergunta)).replace(",", ".");
        let numero = Number(valor);

        if (numero >= minimo && numero <= maximo &&
            (!inteiro || Number.isInteger(numero))) {
            return numero;
        }

        console.log("Valor inválido. Tente novamente.");
    }
}

export function fecharEntrada() {
    rl.close();
}
notas.mjs
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
