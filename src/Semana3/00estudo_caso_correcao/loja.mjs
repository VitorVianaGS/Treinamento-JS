// Parte A: funções com parâmetros, return e valor padrão
function calcularSubtotal(preco, quantidade) {
return preco * quantidade;
}

function aplicarDesconto(valor, percentual = 0) {
return valor - valor * (percentual / 100);
}

function calcularFrete(valor) {
if (valor &gt;= 200) {
return 0; // frete grátis
}
return 25;
}

function formatarMoeda(valor) {
return `R$ ${valor.toFixed(2)}`;
}

function resumirPedido(produto, preco, quantidade, desconto) {
const subtotal = calcularSubtotal(preco, quantidade);
const comDesconto = aplicarDesconto(subtotal, desconto);
const frete = calcularFrete(comDesconto);
const total = comDesconto + frete;
console.log(`--- ${produto} ---`);
console.log(`Subtotal: ${formatarMoeda(subtotal)}`);
console.log(`Com desconto: ${formatarMoeda(comDesconto)}`);
console.log(`Frete: ${formatarMoeda(frete)}`);
console.log(`Total: ${formatarMoeda(total)}`);
}

resumirPedido(&#39;Fone de ouvido&#39;, 120, 2, 10);
resumirPedido(&#39;Mouse&#39;, 80, 1); // sem desconto: usa o valor padrão 0