//Crie a classe Ingresso com os atributos filme, assento e tipo.
class Ingresso {
    filme;
    assento;
    tipo = "Inteira"; 

    constructor(filme, assento, tipo){

        const filmeLimpo = filme.trim();
        if(filmeLimpo === 0 || filme.trim() === ""){
            throw new Error('O nome não pode ser vazio.');
        }
        
        if(!Number.isInteger(assento) || assento < 0 || assento > 120){
            throw new Error('Número de assento inválido');
        }

        if(tipo != "inteira" && tipo != "meia"){
            throw new Error('Tipo de ingresso inválido.')
        }

        filme = this.filme;
        assento = this.assento;
        tipo = this.tipo;
    }

        
    calcularPreco(){
        if(this.tipo === "meia"){
            return 16;
        }
        return 32;
    }

    descrever(){
        const preco = this.calcularPreco().toFixed(2);
        return `Filme: ${this.filme} | assento: ${this.assento} | ${this.tipo} | R$ ${preco}`;
    }
}
