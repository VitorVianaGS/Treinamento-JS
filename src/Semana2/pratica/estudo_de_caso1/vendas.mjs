

import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

import {calcularTotal, calcularMedia} from './calculoVendas.mjs';

// Recebe e valida a "quantidade de vendas"
let qtdVendas;

while (true){
    qtdVendas = Number(
        await rl.question("Informe quantas vendas foram realizadas no dia: ")
    );

    if (Number.isInteger(qtdVendas) && qtdVendas > 0){
        break;
    }

    console.log("Valor inválido, digite novamente!");
}

// Recebe, valida e armazana "cada venda"
let vendas = [];
let i = 0;

while(i < qtdVendas){
    const valores = await rl.question(`Valor da ${i + 1}ª venda: `);

    const vendascd = Number(valores.replace(',', '.'));

    if (valores.trim() === '' || !Number.isFinite(vendascd) || vendascd <= 0){
        console.log("Valor inválido digite um número!");
        continue;
    }

    vendas.push(vendascd)
    i++
}

const total = calcularTotal(vendas);
console.log(`Valor total de vendas: ${total.toFixed(2)}`);

const media = calcularMedia(vendas);
console.log(`Valor médio por venda: ${media.toFixed(2)}`);

rl.close()