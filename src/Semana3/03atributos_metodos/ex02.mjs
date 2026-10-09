class Produto{
    preco = 100;

    calcularComDesconto(desconto){
        desconto = this.preco * (1 - desconto / 100)

        if(isFinite(desconto) && desconto > 0 && desconto < 100){
            return desconto
        }
        return "Valor percentual inválido."
    }
}

const lapis = new Produto("Lápis");
console.log(lapis.calcularComDesconto(20))

/* Versão do professor 

class Produto {
    preco;


    constructor(preco) {
        this.preco = preco
    }


    calcularComDesconto(percentual) {
        if(!Number.isFinite(percentual) ||
            percentual < 0  || percentual > 100) {
                throw new Error("Percentual inválido."); // lança o erro e interrompe a execução (na prática desconsidera tudo que vem depois
            }
        const desconto = this.preco * percentual / 100;
        return this.preco - desconto;
    }
}


const produto = new Produto(100);
console.log(produto.calcularComDesconto(10));
console.log(produto.preco);

*/