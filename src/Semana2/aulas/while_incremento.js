let qtd = 5;
console.log(qtd) // == 5

// Incrementador +1
qtd++
console.log(qtd) // == 6

// Decrementador -1
qtd--
console.log(qtd) // == 5

// Incrementa de 5 em 5
qtd+=5
console.log(qtd) // == 10

// Decrementa de 5 em 5
qtd-=5
console.log(qtd) // == 5


import { stdin } from "node:process";
//--------------------------------------------------------


// Interação com o usuário usando await
import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const nome = await rl.question("Digite seu nome: ");
const idade = await rl.question("Digite sua idade: ");

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

rl.close();

// Laço while - imprima na tela separadamente os números de 1 a 5
let n = 0

while(n < 5){
    n++
    console.log(n)
}

// usando o loop while imprima a tabuada 7
let tabuada = 0

while (tabuada <= 10){
    console.log(`7 X ${tabuada} = ${tabuada * 7}`)
    tabuada++
}

// Calcular a média dos valores de um array
const notas = [8, 6, 9,7]

let indice = 0
let soma = 0

while (indice < notas.length){
    soma += notas[indice];
    indice ++;
}

if (notas.length > 0){
    const media = soma / notas.length;

    console.log(`Soma das notas: ${soma}`);
    console.log(`Quantidade de nota: ${notas.length}`)
    console.log(`Média: ${media.toFixed(2)}`);
}else{
    console.log("Não há notas para calcular a média.")
}



