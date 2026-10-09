// Arrays paralelos: a mesma posição representa o mesmo produto
const nomes = [&#39;Teclado&#39;, &#39;Mouse&#39;, &#39;Monitor&#39;, &#39;Webcam&#39;];
const precos = [150, 80, 900, 200];
const estoques = [10, 0, 4, 5];

// Soma preço × quantidade de todos os produtos
function calcularValorEstoque(precos, estoques) {
let total = 0;
for (let i = 0; i &lt; precos.length; i++) {
total = total + precos[i] * estoques[i];
}
return total;
}

// Retorna um array com os nomes dos produtos sem estoque
function listarSemEstoque(nomes, estoques) {
const zerados = [];
for (let i = 0; i &lt; nomes.length; i++) {
if (estoques[i] === 0) {
zerados.push(nomes[i]);
}
}
return zerados;
}

// Retorna a posição (índice) do produto mais caro
function encontrarMaisCaro(precos) {
let posicao = 0;
for (let i = 1; i &lt; precos.length; i++) {
if (precos[i] &gt; precos[posicao]) {
posicao = i;
}
}
return posicao;
}

// Retorna o novo preço após um reajuste percentual
function calcularReajuste(preco, percentual) {
return preco + preco * (percentual / 100);
}

// Programa principal: usa as funções e exibe os resultados
const valorTotal = calcularValorEstoque(precos, estoques);
const semEstoque = listarSemEstoque(nomes, estoques);
const posCaro = encontrarMaisCaro(precos);
const novoPreco = calcularReajuste(precos[0], 10);
console.log(`Valor total em estoque: R$ ${valorTotal.toFixed(2)}`);
console.log(`Sem estoque: ${semEstoque.join(&#39;, &#39;)}`);
console.log(`Mais caro: ${nomes[posCaro]} (R$ ${precos[posCaro].toFixed(2)})`);
console.log(`${nomes[0]} com reajuste de 10%: R$ ${novoPreco.toFixed(2)}`);