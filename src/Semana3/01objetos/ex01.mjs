// Enunciado: uma papelaria precisa cadastrar um produto com nome e preço. Crie uma classe,
// cadastre um caderno de R$ 25,00 e apresente uma descrição usando um método.
// Identifique os dados
// Nome é texto; preço é número. Ambos pertencem a cada produto.
// Planeje a criação e a saída
// O construtor recebe os dados. O método descrever devolve a mensagem; console.log fica 
// responsável por exibi-la.

class Produto {  // Classe guarda os atributos do objeto
    name;
    price;

    constructor (name, price) {  // Construtor inicializa a classe
        this.name = name;
        this.price = price;
    }

    description() {  // Método define uma ação
        return `${this.name}: R$ ${this.price.toFixed(2)}`
    }
}

const caderno = new Produto("Caderno",25);
console.log(caderno.description());