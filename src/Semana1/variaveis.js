/*
const nome = "João";
const idade = 30;
let profissao = "pintor";
*/

const nome = "Fulano";
console.log(nome);

let peso = 76;
console.log(peso);

let altura = 1.71;
console.log(altura);

const exibir = `O Paciente ${nome} pesa ${peso}kg e tem ${altura} de altura!`;
console.log(exibir);

// Tipos primitivos de dados

/*
    string: texto
    number: números
    boolean: valores verdadeiros ou falsos
    undefined: uma variavél declarada mas não inicializada
    null: representa a ausência de um valor
*/

console.log(typeof nome);
console.log(typeof peso);
console.log(typeof altura);

// Operadores aritméticos

/*
    + : adição
    - : subtração
    * : multiplicação
    / : divisão
    % : resto da divisão
    ** : exponenciação
*/

// Exemplo com os números 2 e 3

// Soma
const soma = 3 + 2;
console.log(soma);

// Concatenação
const soma1 = "3" + 2;
console.log(soma1);

// Subtração
const subtracao = 3 - 2;
console.log(subtracao);

// Multiplicação
const multiplicacao = 3 * 2;
console.log(multiplicacao);

// Divisão
const divisao = 3 / 2;
console.log(divisao);

// Resto
const resto = 3 % 2;
console.log(resto);

// Exponenciação
const potenciacao = 3 ** 2;
console.log(potenciacao);

/*
Desafio

Crie uma variavél que armazene seu nome;
outra que armazene seu peso;
e outra que armazene sua altura;

Crie uma que calcule o IMC (IMC = peso / (altura x altura));

Exiba um texto com seu nome, peso, altura e IMC.
*/

const nome = "Vitor"
const peso = 76
const altura = 1.71
const imc = (peso / (altura ** 2))

console.log(`${nome} tem ${altura} de altura, pesa ${peso} kg, portanto seu IMC é de ${imc}`);