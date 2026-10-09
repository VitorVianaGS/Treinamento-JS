const META = 1000;
const DEPOSITO_MENSAL = 150;
const RENDIMENTO = 0.01; // 1% ao mês

let saldo = 0;
let meses = 0;

cofrinho.mjs passo 3
while (saldo &lt; META) {
meses++;
saldo = saldo + saldo * RENDIMENTO; // rende sobre o que já existe
saldo = saldo + DEPOSITO_MENSAL; // depois entra o depósito
console.log(`Mês ${meses}: R$ ${saldo.toFixed(2)}`);
}

console.log(`Meta atingida em ${meses} meses!`);