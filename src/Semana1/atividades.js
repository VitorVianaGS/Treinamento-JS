/*
Exercício 1 Operações
Calcule: a) 12 + 4 * 2; b) (12 + 4) * 2; c) 17 % 5; d) 3 ** 2; e) 9 / 2.
*/
let calculoA = 12 + 4 * 2;
console.log(calculoA) // R: 20

let calculoB = (12 + 4) * 2;
console.log(calculoB) // R: 32

let calculoC = 17 % 5;
console.log(calculoC) // R: 2

let calculoD = 3 ** 2;
console.log(calculoD) // R: 9

let calculoE = 9 / 2;
console.log(calculoE) // R: 4.5
/*
-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 2 Número e texto
Preveja as três saídas e explique a diferença.
console.log(20 + 5);
 console.log("20" + 5);
 console.log(Number("20") + 5);
*/
console.log(20 + 5) // a saída será 25 pois somará dois tipos numéricos;
console.log("20" + 5) // a saída será 205 pois concatenará 20 e depois 5;
console.log(Number("20") + 5) // a saída será 25 pois o "20" string recebe um casting e é transformado em tipo numérico;
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 3 Atualização de uma variável
Qual é o valor final de pontos? Mostre os valores intermediários.
let pontos = 10;
 pontos += 5;
 pontos *= 2;
 pontos--;
 console.log(pontos);
 */
let pontos = 10;
 pontos += 5; // incrementa mais 5
 console.log(pontos); // 15

 let pontos = 10;
 pontos *= 2; // multiplica pontos por 2
 console.log(pontos); // 20

 let pontos = 10;
 pontos--; // decrementa de 1 em 1
 console.log(pontos); // 9
//-----------------------------------------------------------------------------------------------------------------------------------
 /*
Exercício 4 Comparações
Indique true ou false: a) 7 >= 7; b) 8 < 3; c) 5 === "5"; d) 5 !== "5"; e) 10 <= 9.
*/
a) console.log(7 >= 7); // True
b) console.log(8 < 3); // False
c) console.log(5 === "5"); // False
d) console.log(5 !== "5"); // True
e) console.log(10 <= 9) // False
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 5 Condições combinadas
Considere idade = 17, temIngresso = true e bloqueado = false. Calcule: 
*/
// a) idade >= 18 && temIngresso;
let idade = 17;
let temIngresso = true
let bloqueado = false
if(idade >= 18 && temIngresso){
    console.log("Bem-Vindo!")
}else{
    console.log("Bloqueado")
}
// b) idade >= 18 || temIngresso;
let idade = 17;
let temIngresso = true
let bloqueado = false
if(idade >= 18 || temIngresso){
    console.log("Bem-Vindo!")
}else{
    console.log("Bloqueado")
}
// c) !bloqueado.
let idade = 17;
let temIngresso = true
let bloqueado = false
if(idade >= 18 && bloqueado /*ou !temIngresso*/){
    console.log("Bem-Vindo!")
}else{
    console.log("Bloqueado")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 6 Chaves e indentação
A segunda mensagem depende da idade? O que será mostrado? Reescreva com indentação para deixar os blocos claros.
let idade = 16;
 if (idade >= 18) {
 console.log("Maior de idade");
 }
 console.log("Fim");
*/
let idade = 16;
 if (idade >= 18) {
 console.log("Maior de idade");
 }
 console.log("Fim")
 // a segunda mensagem aparece se idade for menor que 18 então, sim depende.
 // a mensagem mostrada será "fim", pois não cumpriu a primeira condição.
//-----------------------------------------------------------------------------------------------------------------------------------
/*
 Exercício 7 Ordem das condições
Com nota = 8, uma sequência testa primeiro nota >= 5 e mostra “Recuperação”; depois, em else if, testa nota >= 7 e mostra “Aprovado”. Qual mensagem aparece? Como corrigir a ordem?
*/
let nota = 8;
if (nota >= 7){
    console.log("Aprovado")
}else if(nota >= 5){
    console.log("Recuperação")
}
// Como a nota é 8 no codigo acima a mensagem é aprovado
// Colocando a ordem do maior para o menor
//-----------------------------------------------------------------------------------------------------------------------------------
/*
** Exercícios de programação
Use valores definidos no código. Nos exercícios 8 a 16, escreva um programa completo para cada problema.
Considere entradas do tipo e da faixa informados.
*/
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 8 Par ou ímpar
Declare um número inteiro e informe se ele é par ou ímpar. Teste com 8 e 15. Dica: use o resto da divisão por 2.
*/
let teste = 15
if (teste % 2 === 0){
    console.log("Par")
} else {
    console.log("Ímpar")
}

let teste = 8
if (teste % 2 === 0){
    console.log("Par")
} else {
    console.log("Ímpar")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 9 Sinal do número
Declare um número e informe “Positivo”, “Negativo” ou “Zero”. Teste com 4, -3 e 0.
*/
let teste = 0
if (teste >= 1){
    console.log("Positivo")
} else if (teste < 0){
    console.log("Negativo")
} else {
    console.log("zero")
}

let teste = -3
if (teste >= 1){
    console.log("Positivo")
} else if (teste < 0){
    console.log("Negativo")
} else {
    console.log("zero")
}

let teste = 4
if (teste >= 1){
    console.log("Positivo")
} else if (teste < 0){
    console.log("Negativo")
} else {
    console.log("zero")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 10 Nota e recuperação
Para uma nota numérica de 0 a 10, mostre “Aprovado” se nota >= 7,
 “Recuperação” se nota >= 5 e menor que 7, ou “Reprovado” nos demais casos. Teste 7, 5 e 4.
*/
let nota = 7;
if (nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

let nota = 5;
if (nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

let nota = 4;
if (nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 11 Acesso com duas condições
Uma pessoa pode entrar se tiver pelo menos 18 anos E tiver ingresso. 
Mostre “Entrada permitida” ou “Entrada negada”. Teste 20 com ingresso e 20 sem ingresso.
*/
const idade = 20;
const ingresso = true;
if(idade >= 18 && ingresso == true){
    console.log("Entrada permitida")
}else{
    console.log("Entrada Negada")
}

const idade = 20;
const ingresso = false;
if(idade >= 18 && ingresso == true){
    console.log("Entrada permitida")
}else{
    console.log("Entrada Negada")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 12 Desconto
Uma compra de pelo menos R$ 300 recebe 15% de desconto. Calcule o valor final com if. Teste com 300 e 200.
*/
let valor = 300;
let valorFinal = 0
if(valor >= 300){
    valorFinal = valor * (1 - (15/100));
    console.log(valorFinal)
}else{
    console.log(valor)
}

let valor = 200;
let valorFinal = 0
if(valor >= 300){
    valorFinal = valor * (1 - (15/100));
    console.log(valorFinal)
}else{
    console.log(valor)
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 13 Menu com switch
Use uma opção numérica: 1 mostra “Cadastrar”; 2 mostra “Consultar”;
 3 mostra “Sair”. Qualquer outro valor mostra “Opção inválida”. Teste 2 e 9.
*/
let opcao = 2;
switch (opcao){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Consultar")
        break
    case 3:
        console.log("Sair")
        break
    default:
        console.log("Opção inválida")
}

let opcao = 9;
switch (opcao){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Consultar")
        break
    case 3:
        console.log("Sair")
        break
    default:
        console.log("Opção inválida")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 14 Falta de break
Preveja a saída deste código e depois corrija para mostrar somente “Um” quando opcao vale 1.
let opcao = 1;
 switch (opcao) {
   case 1:
 	console.log("Um");
   case 2:
 	console.log("Dois");
   default:
 	console.log("Outro");
 }
*/
let opcao = 1;
 switch (opcao) {
   case 1:
 	console.log("Um");
    break
   case 2:
 	console.log("Dois");
    break
   default:
 	console.log("Outro");
    break
 }
 //-----------------------------------------------------------------------------------------------------------------------------------
/*
 Exercício 15 Valores iguais com tipos diferentes
No exercício 13, troque a opção numérica por "2". Qual será a saída?
 Corrija convertendo a variável com Number antes do switch.
*/
let opcao = "2";
switch(Number (opcao)){
    case 1:
        console.log("Cadastrar")
        break
    case 2:
        console.log("Consultar")
        break
    case 3:
        console.log("Sair")
        break
    default:
        console.log("Opção inválida")
}
//-----------------------------------------------------------------------------------------------------------------------------------
/*
Exercício 16 Desafio de validação
Amplie o exercício 10: se a nota numérica for menor que 0 OU maior que 10, mostre “Nota inválida”. 
Só classifique notas dentro da faixa. Teste -1, 6 e 11. 
*/

let nota = -1;
if (nota < 0 || nota > 10){
    console.log("Nota Inválida")
}else if(nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

let nota = 6;
if (nota < 0 || nota > 10){
    console.log("Nota Inválida")
}else if(nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}

let nota = 11;
if (nota < 0 || nota > 10){
    console.log("Nota Inválida")
}else if(nota >= 7){
    console.log("Aprovado")
}else if (nota >= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}