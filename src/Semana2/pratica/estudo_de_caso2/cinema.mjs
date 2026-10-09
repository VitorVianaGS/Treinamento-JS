import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface(input, output);

console.log(`
    1 - Inteira    (R$ 40,00)
    2 - Meia       (R$ 20,00)
    3 - Idoso      (R$ 20,00)
    4 - Cortesia   (R$ 00,00)
    5 - Estudante  (R$ 25,00)
    `)

let tipoIngresso = Number(await rl.question("Escolha o tipo de ingresso: "));
let qtd = Number(await rl.question("Quantidade: "));
let quartaFeira = await rl.question("É quarta-feira? (s/n): ");

let tipo = '';
let valor = 0;

switch (tipoIngresso){
    case 1:
        tipo = "Inteira";
        valor = 40;
        break;

    case 2:
    case 3:
        valor = 20
        if(tipoIngresso == 2){
            tipo = "Meia";
        } else {
            tipo = "Idoso";
        }
        break

    case 4:
        tipo = "Cortesia"
        valor = 0
        break
    
    case 5:
        tipo = "Estudante com carterinha"
        valor = 25;
        break

    default:
        console.log("Opção inválida")
        break;
}

let total = valor * qtd

if(quartaFeira == "s"){
    total /= 2;
}

console.log(`${qtd} ingressos ${tipo}: R$ ${total.toFixed(2)}`)

// Para o desafio extra acrescentei mais 5 linhas de código