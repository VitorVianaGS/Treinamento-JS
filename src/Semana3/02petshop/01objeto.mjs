/*
O programa prescisa saber o nome, a idade, peso, e nome do tutor;
O programa precisa armazenar estes dados;

O programa tambem precisa calcular o preço do banho baseado no peso do pet;
*/

const cachorro = {
    nome: "Thor",
    especie: "Cachorro",
    idade: 3,
    peso: 8,
    tutor: "Carla",

    apresentar(){
    return `${this.nome} (${this.especie} - ${this.idade} anos) - tutor(a): ${this.tutor}`
    }
}

console.log(cachorro.nome)
console.log(cachorro.apresentar())

