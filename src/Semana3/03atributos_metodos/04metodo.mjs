class Produto{
    preco;

    constructor(preco){
        this.preco = preco
    }

    calcularTotal(quantidade){
        return this.preco * quantidade;
    }
}

const produto = new Produto(30);
const total = produto.calcularTotal(3);
console.log(total);

