// caso 01

const cliente = "Ana";
const cafe = 6.50;
const quantidadeCafe = 2;
const paoQueijo = 4.00;
const quantidadePao = 3;
const pessoas = 2;
const clienteFidelidade = true;
const taxaServico = 0.10;

const subtotal = cafe * quantidadeCafe + paoQueijo * quantidadePao;
const taxa = subtotal * taxaServico;
const total = subtotal + taxa;
const valorPorPessoa = total / pessoas;

const ganhaBrinde = total >= 25 && clienteFidelidade;
const paoPar = quantidadePao % 2 === 0;

console.log("Cliente:", cliente);
console.log("Subtotal: R$", subtotal.toFixed(2));
console.log("Taxa de serviço (10%): R$", taxa.toFixed(2));
console.log("Total: R$", total.toFixed(2));
console.log("Valor por pessoa: R$", valorPorPessoa.toFixed(2));
console.log("Ganha brinde?", ganhaBrinde);
console.log("Quantidade de pães é par?", paoPar);
console.log(typeof cliente, typeof subtotal, typeof ganhaBrinde);


/*
'5' + 3        = 53      = str num
'5' - 3        = 2       = NaN
10 % 3         = 1       = NaN
5 == '5'       = true    = bool
5 === '5'      = false   = bool
true && false  = false   = bool
!(4 > 2)       = false   = bool
*/

/*
Desafio extra (opcional)
Se clienteFidelidade for false, ganhaBrinde passa a ser false. Se um terceiro item for acrescentado, o subtotal, a taxa, o total e o valor por pessoa serão recalculados de acordo com o novo item.
*/