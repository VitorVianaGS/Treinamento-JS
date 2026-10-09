class Pet {
    nome;
    especie;
    idade;
    peso;
    tutor;

    constructor (nome, especie, idade, peso, tutor){
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.peso = peso;
        this.tutor = tutor;
    }

    apresentar(){
        return `${this.nome} (${this.especie} - ${this.idade} anos) - tutor(a): ${this.tutor}`
    }

    calcularPrecoBanho(){

        let precoBanho = 0;

        if(this.peso < 10){
            precoBanho = 50;
        }else if(this.peso < 20){
            precoBanho = 70;
        }else{
            precoBanho = 90
        }
        return `Banho do(a) ${this.nome}: R$ ${precoBanho}`
    }

    felizAniversário(){
        console.log(this.apresentar())
        this.idade++
        console.log(this.apresentar())
    }
}

// Cria os objetos com a atributos da variavel
let thor = new Pet('Thor', 'Cachorro', 3, 12.5, 'Carla');
let mia = new Pet('Mia', 'Gato', 2, 4.2, 'Rafael');
let pacoca = new Pet('Paçoca', 'Cachorro', 7, 8, 'Juliana');
let bidu = new Pet('Bidu', 'Cachorro', 5, 25, 'Marcos');

// nome do thor e peso do bidu
console.log(thor.nome)
console.log(bidu.peso)

// apresentar a mia, e mostrar preço do banho do bidu
console.log(mia.apresentar())
console.log(bidu.calcularPrecoBanho())

const agenda = [thor, mia, pacoca, bidu];

// Apresenta, mostra o preço do banho e calcula o total do dia
let totalDia = 0;
for(const pet of agenda){
    const resultado = pet.calcularPrecoBanho();
    console.log(`${pet.apresentar()} | ${resultado}`)
    const preco = Number(resultado.split('R$ ')[1]);
    totalDia += preco;
}

// Some os preços em uma variável e, depois do laço, mostre o total do dia.
console.log(`Total do dia: R$ ${totalDia.toFixed(2)}`);

// aumenta em 1 a idade do pet
console.log(pacoca.felizAniversário())

// Percorre a agenda e conta quantos pets são cachorros e quantos são gatos.
let cachorro = 0;
let gato = 0;
for(const pet of agenda){
    if(pet.especie == "Gato"){
        gato++
    }else{
        cachorro++
    }
}
console.log(`Cachorros: ${cachorro} | Gatos: ${gato}`)

// 1. O thor da parte 1 é um objeto com caracteristicas atribuidas apenas a ele.
// O thor criado com new pet é um objeto derivado de uma classe.
// 
// 2. No programa existe uma classe e quatro objetos.
// 
// 3. Usa this para fazer referência ao escopo da classe a que esta a indicar,
// evitando conflito por nome por exemplo.
// 
// 4. O valor do banho de thor mudaria para 50, e no totalDia seria 240.
//
// 5. sem o new o programa da erro pois o construtor da classe não consegue
// invocar.
