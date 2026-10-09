// Módulo de entrada: concentra a leitura e a validação dos dados
import { createInterface } from &#39;node:readline/promises&#39;;
import { stdin as input, stdout as output } from &#39;node:process&#39;;
const leitor = createInterface({ input, output });
// Lê um texto que não pode ficar vazio
export async function lerTexto(pergunta) {
let texto = &#39;&#39;;
while (texto === &#39;&#39;) {
texto = (await leitor.question(pergunta)).trim();
if (texto === &#39;&#39;) {
console.log(&#39;Resposta obrigatória.&#39;);
}
}
return texto;
}
// Lê um número entre minimo e maximo (inteiro, se for pedido)
export async function lerNumero(pergunta, minimo, maximo, inteiro = false) {
while (true) {
const texto = (await leitor.question(pergunta)).trim();
const valor = Number(texto.replace(&#39;,&#39;, &#39;.&#39;));
const tipoOk = inteiro ? Number.isInteger(valor) : true;
if (texto !== &#39;&#39; &amp;&amp; valor &gt;= minimo &amp;&amp; valor &lt;= maximo &amp;&amp; tipoOk) {
return valor;
}
console.log(`Digite um número entre ${minimo} e ${maximo}.`);
}
}
export function fecharEntrada() {
leitor.close();
}