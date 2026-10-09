// Função sem parâmetros
function saudar(){
    console.log("Hello, World!")
}
saudar()

// Imagine que você deseja acrescentar um texto ao resultado de uma variavel e exibi-las.
function saudar2(nome){
    console.log(`Olá, ${nome}`)
}
saudar2("Vitor")

// Imagine que você deseja criar uma função que exiba nome e idade juntos
function apresenta(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`)
}
apresenta("Vitor", 27)

// Será que a ordem dos parâmetros importa? R: sim
function apresenta2(nome, idade){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`)
}
apresenta2(27, "Vitor")

// Construindo a função para receber parâmetros como objetos
// (A ordem dos  parâmetros poderá ser trocada)

function apresenta3({nome, idade}){
    console.log(`Meu nome é ${nome} e tenho ${idade} anos de idade.`)
}
apresenta3({idade: 27, nome: "Vitor"})

// Imagine que você deseja armazenar em uma variavel o 
// resultado que acontece na execução
function dobro(numero){
    return numero * 2
}
const result = dobro(25)
console.log(result)

// 1ª - Transforme o exercício de ontem em uma função

/*
2ª - Crie uma função calcularIMC que recebe do usuário peso (kg) e altura (m) e
retorna o IMC. Formula: IMC = peso/(altura*altura). Mostre o resultado
de 70kg e 1,75m com 2 casas decimais
*/