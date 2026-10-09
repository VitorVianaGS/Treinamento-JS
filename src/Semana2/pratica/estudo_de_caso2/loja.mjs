import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output }); 

let preco = Number(await rl.question("Preço: "));
let quantidade = Number(await rl.question("Quantidade: "));
let desconto = Number(await rl.question("Desconto: "));

function calcularSubTotal(preco, quantidade){
    return preco * quantidade;
}

function aplicarDesconto(valor, percentual=0){
    return valor - (valor * percentual / 100);
}

function calcularFrete(valor){
    if (valor < 200){
        valor += 25;
    }
    return valor;
}

function formatarMoeda(valor){
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function resumirPedido(preco, quantidade, desconto){

    let subtotal = calcularSubTotal(preco, quantidade);
    let comDesconto = aplicarDesconto(subtotal, desconto);
    let frete = calcularFrete(comDesconto);

    console.log(`Subtotal: ${formatarMoeda(subtotal)}`);
    console.log(`Com desconto: ${formatarMoeda(comDesconto)}`)
    console.log(`Frete: ${formatarMoeda(frete)}`)
    console.log(`Total: ${formatarMoeda(frete)}`)
}

resumirPedido(preco, quantidade, desconto)

rl.close();

// Parte B
/*
1: bloco - pois existe uma variavel "mensagem" dentro do if e ela é a proxima
2: função - fora do if, a variável do bloco não existe mais. É usada a mensagem da função.
3: global - Fora da função, a mensagem local não existe. Usa-se a variável global.
4: 1 - contador começa em 0, recebe +1 e retorna 1.
5: 1 - Cada chamada de contar() cria um novo contador, começando novamente em 0.
6: erro - contador foi declarado com let dentro da função contar(). Ele não existe fora dela.
*/

