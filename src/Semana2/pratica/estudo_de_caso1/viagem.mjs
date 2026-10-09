import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { calcularCusto, calcularLitros } from './calculoViagem.mjs';

const rl = readline.createInterface({ input, output });

let distancia = 0;
let consumo = 0;
let preco = 0;

while (true) {
    distancia = Number(
        await rl.question("Digite a distância total em km: ")
    );

    consumo = Number(
        await rl.question("Digite o consumo médio em km/l: ")
    );

    preco = Number(
        await rl.question("Digite o preço do combustível por litro: ")
    );

    if (
        Number.isFinite(distancia) && distancia > 0 &&
        Number.isFinite(consumo) && consumo > 0 &&
        Number.isFinite(preco) && preco > 0
    ) {
        break;
    }

    console.log("Dados inválidos, tente novamente!");
}

const combNecessario = calcularLitros(distancia, consumo);

console.log(`Combustível necessário: ${combNecessario} litros`);

const custoEstimado = calcularCusto(combNecessario, preco);

console.log(`Custo estimado da viagem: R$ ${custoEstimado}`);

rl.close();
