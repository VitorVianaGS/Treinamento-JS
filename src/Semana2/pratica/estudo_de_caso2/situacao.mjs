import * as readline from 'node:readline/promises'
import {stdin as input, stdout as output} from 'node:process'
const rl = readline.createInterface({input, output})

let nota1 = Number(await rl.question(`Nota 1: `));
let nota2 = Number(await rl.question(`Nota 2: `));
let nota3 = Number(await rl.question(`Nota 3: `));
let frequencia = Number(await rl.question(`Frequência (%): `));
let soma = nota1 + nota2 + nota3;
let media = soma / 3;
let situacao;

if (frequencia < 75){
    situacao = "Reprovado";
}else if(media >= 7){
    situacao = "Aprovado";
}else if(media >= 5){
    situacao = "Recuperação";
}else if(media < 5){
    situacao = "Reprovado";
}else{
    console.log("Dados inválidos")
}

// Mostre também quantos pontos faltaram para a aprovação quando o aluno ficar de recuperação.
if (situacao == "Reprovado"){
    console.log(`Faltaram ${media - 7} pontos para aprovação!`)
}


console.log(`Média: ${media.toFixed(1)}`);
console.log(`Situação: ${situacao}`)

/*
Aprovado
Reprovado
Reprovado
Reprovado
Aprovado
*/

