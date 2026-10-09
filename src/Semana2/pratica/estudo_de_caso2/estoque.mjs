const nomes = ["Teclado", "Mouse", "Monitor", "Webcam"];

const precos = [150, 80, 900, 200];

const estoques = [10, 0, 4, 5];


function calcularValorEstoque(precos, estoques) {

    let total = 0;

    for (let i = 0; i < precos.length; i++) {
        total += precos[i] * estoques[i];
    }

    return total;
}


function listarSemEstoque(nomes, estoques) {

    let produtos = [];

    for (let i = 0; i < estoques.length; i++) {

        if (estoques[i] === 0) {
            produtos.push(nomes[i]);
        }
    }

    return produtos;
}


function encontrarMaisCaro(precos) {

    let posicao = 0;

    for (let i = 1; i < precos.length; i++) {

        if (precos[i] > precos[posicao]) {
            posicao = i;
        }
    }

    return posicao;
}


function calcularReajuste(preco, percentual) {

    return preco + (preco * percentual / 100);
}


function listarEstoqueBaixo(nomes, estoques, limite) {

    let produtos = [];

    for (let i = 0; i < estoques.length; i++) {

        if (estoques[i] < limite) {
            produtos.push(nomes[i]);
        }
    }

    return produtos;
}


// Programa principal

let valorTotal = calcularValorEstoque(precos, estoques);

let semEstoque = listarSemEstoque(nomes, estoques);

let posicaoMaisCaro = encontrarMaisCaro(precos);

let reajusteTeclado = calcularReajuste(precos[0], 10);

let estoqueBaixo = listarEstoqueBaixo(nomes, estoques, 5);


console.log(`Valor total em estoque: R$ ${valorTotal.toFixed(2)}`);

console.log(`Sem estoque: ${semEstoque.join(", ")}`);

console.log(
    `Mais caro: ${nomes[posicaoMaisCaro]} (R$ ${precos[posicaoMaisCaro].toFixed(2)})`
);

console.log(`Teclado com reajuste de 10%: R$ ${reajusteTeclado.toFixed(2)}`);

console.log(`Estoque baixo: ${estoqueBaixo.join(", ")}`);

/*
Desafio extra
Com limite 5, aparecem Mouse (0) e Monitor (4).
*/

// 6 - Parte B
/*
Caça aos bugs
Nº	Trecho com erro	Explicação e correção
1	i <= lista.length	O último índice válido é length - 1. Corrigir para i < lista.length.
2	soma / lista.length sem return	A função precisa retornar o resultado. Usar return soma / lista.length.
3	if (media = META)	Um = faz atribuição. Para comparar, usar if (media === META).
4	const bonus = '50'	50 foi criado como string. Deve ser const bonus = 50 para somar como número.

*/