import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function lerNumero(pergunta, inteiro = false) {
    while (true) {
        let valor = (await perguntar(pergunta)).replace(",", ".");
        let numero = Number(valor);

        if (numero > 0 && (!inteiro || Number.isInteger(numero))) {
            return numero;
        }

        console.log("Valor inválido. Digite novamente.");
    }
}

function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",");
}

let produtos = [];

while (true) {
    let nome = (await perguntar('Produto (ou "fim"): ')).trim();

    if (nome.toLowerCase() === "fim") break;

    if (nome === "") {
        console.log("Nome do produto não pode ser vazio.");
        continue;
    }

    let preco = await lerNumero("Preço unitário: ");
    let quantidade = await lerNumero("Quantidade: ", true);

    produtos.push({nome, preco, quantidade});
}

if (produtos.length === 0) {
    console.log("Nenhum item registrado.");
    rl.close();
    process.exit();
}

let subtotal = 0;

console.log("\n===== CUPOM =====");

for (let produto of produtos) {
    let total = produto.preco * produto.quantidade;
    subtotal += total;
    console.log(`${produto.quantidade}x ${produto.nome}: R$ ${formatarMoeda(total)}`);
}

console.log(`Subtotal: R$ ${formatarMoeda(subtotal)}`);

let pagamento;
let desconto;

while (true) {
    pagamento = await perguntar("Pagamento: 1-Dinheiro 2-Pix 3-Cartão: ");

    switch (pagamento) {
        case "1":
            desconto = 0.05;
            break;
        case "2":
            desconto = 0.03;
            break;
        case "3":
            desconto = 0;
            break;
        default:
            console.log("Opção inválida.");
            continue;
    }

    break;
}

let valorDesconto = subtotal * desconto;
let totalPagar = subtotal - valorDesconto;

console.log(`Desconto (${desconto * 100}%): R$ ${formatarMoeda(valorDesconto)}`);
console.log(`Total a pagar: R$ ${formatarMoeda(totalPagar)}`);

rl.close();

/*
Desafio extra
Para descobrir o item mais caro, é necessário comparar o total de cada item. Para as unidades vendidas, basta somar as quantidades de todos os produtos.
 */