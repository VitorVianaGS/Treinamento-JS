import { createInterface } from &#39;node:readline/promises&#39;;
import { stdin as input, stdout as output } from &#39;node:process&#39;;
const leitor = createInterface({ input, output });

// Lê um número maior que zero (aceita vírgula); repete se inválido
async function lerNumero(pergunta, somenteInteiro = false) {
while (true) {
const texto = (await leitor.question(pergunta)).trim();
const valor = Number(texto.replace(&#39;,&#39;, &#39;.&#39;));
const tipoOk = somenteInteiro ? Number.isInteger(valor) : true;
if (texto !== &#39;&#39; &amp;&amp; Number.isFinite(valor) &amp;&amp; valor &gt; 0 &amp;&amp; tipoOk) {
return valor;
}
console.log(&#39;Valor inválido. Tente novamente.&#39;);
}
}

function formatarMoeda(valor) {
return `R$ ${valor.toFixed(2)}`;
}

// 1. Registra os itens até o operador digitar &quot;fim&quot;
const itens = [];
let nome = &#39;&#39;;
while (nome !== &#39;fim&#39;) {
nome = (await leitor.question(&#39;Produto (ou &quot;fim&quot;): &#39;)).trim();
if (nome === &#39;&#39;) {
console.log(&#39;O nome não pode ficar vazio.&#39;);
} else if (nome.toLowerCase() === &#39;fim&#39;) {
nome = &#39;fim&#39;;
} else {
const preco = await lerNumero(&#39;Preço unitário: &#39;);
const quantidade = await lerNumero(&#39;Quantidade: &#39;, true);
itens.push({ nome, preco, quantidade });
}
}

// 2. Se houver itens, mostra o cupom e calcula o pagamento
if (itens.length === 0) {
console.log(&#39;Nenhum item registrado.&#39;);
} else {
let subtotal = 0;
console.log(&#39;&#39;);
console.log(&#39;===== CUPOM =====&#39;);
for (const item of itens) {
const totalItem = item.preco * item.quantidade;
subtotal += totalItem;
const linha = `${item.quantidade}x ${item.nome}`;
console.log(`${linha}: ${formatarMoeda(totalItem)}`);
}
console.log(`Subtotal: ${formatarMoeda(subtotal)}`);

// 3. Forma de pagamento com switch (repete se a opção for inválida)
let percentual = -1;
while (percentual &lt; 0) {
const forma = await leitor.question(
&#39;Pagamento: 1-Dinheiro 2-Pix 3-Cartão: &#39;
);
switch (forma.trim()) {
case &#39;1&#39;:
percentual = 5;
break;
case &#39;2&#39;:
percentual = 3;
break;
case &#39;3&#39;:
percentual = 0;
break;
default:
console.log(&#39;Opção inválida.&#39;);
}
}

const desconto = subtotal * (percentual / 100);
console.log(`Desconto (${percentual}%): ${formatarMoeda(desconto)}`);
console.log(`Total a pagar: ${formatarMoeda(subtotal - desconto)}`);
}
leitor.close();
