const meta = 1000;
const deposito = 150;
const rendimento = 0.01;

let saldo = 0;
let meses = 0;

while (saldo < meta) {
    saldo = saldo * (1 + rendimento);
    saldo += deposito;
    meses++;

    console.log(`Mês ${meses}: R$ ${saldo.toFixed(2)}`);
}

console.log(`Meta atingida em ${meses} meses!`);


//A Parte A usa for porque existe uma quantidade definida de dias. A Parte B usa while porque o número de meses depende de quando o saldo vai atingir a meta.
// Resultado do cofrinho
// A meta de R$ 1.000,00 é atingida em 7 meses, com saldo aproximado de R$ 1.082,03.


// Desafio extra resposta: se o deposito for zero, o laço while não vai parar, porque a condição de parada é 
// o rendimento ser maior ou igual a meta, e se o deposito for zero, o rendimento nunca vai aumentar.
// Para resolver isso, podemos adicionar uma condição de parada para o caso do deposito ser zero, como por exemplo:
// if(deposito === 0){
//     console.log("Depósito não pode ser zero. Tente novamente.");
//     break;
// }