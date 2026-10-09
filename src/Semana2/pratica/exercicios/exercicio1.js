// Exercício
/* 
Construa um programa que peça ao usuário uma quantidade de notas a inserir
e a partir disso crie um loop while que receba as n notas informadas pelo
usuário e a partir disso as armazene em um array e posteriormente calcule e
exiba para o usuário a média aritmética com 4 casas decimais
*/
import readline from "node:readline/promises"; // Importa a função promises

const rl = readline.createInterface({ // Este bloco da um "apelido" curto para o método, e o método é a comunicação entre
    input: process.stdin,             // o programa e o terminal do SO, permitindo entrada pelo teclado, e saida pelo monitor
    output: process.stdout
});

let listanotas = []; // Guarda todas as notas digitadas em um array vazio
let cont = 1;        // Conta quantas notas serão digitadas
let soma = 0;        // Soma o valor de todas as notas digitadas

const qtdNotas = parseFloat(await rl.question(`Quantidade de notas a declarar:  `)); // Usuário define quantas notas serão digitadas, 
                                                                                     // parseFloat converte string para Number ignorando outros caracteres
while(cont <= qtdNotas){ // Condição de parada do loop

    const notas = parseFloat(await rl.question(`Digite a ${cont}ª nota: `)); // Repete a entrada para quantidade de notas definida
    
    listanotas.push(notas); // Acrecenta a nota digitada a lista(array)
    cont++;                 // Acrescenta +1 ao contador
    soma += notas;          // Vai somando as notas
}

const media = soma / qtdNotas; // Calcula a média dividindo a soma pela quantidade de notas no array
console.log(`Média das notas: ${media.toFixed(4)}`); // Exibe ao usuário a média
rl.close(); // Para o readLine