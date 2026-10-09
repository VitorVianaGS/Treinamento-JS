/*
Condicionais em JavaScript
if, else if, else
Exemplo de uso:
if (condição){
    // código a ser executado se a condição for verdadeira
} else if (outra condição) {
    // código a ser executado se a outra condição for verdadeira
} else {
    // código a ser executado se nenhuma das condições anteriores for verdadeira
}
*/
/*Exemplo prático
Um programador precisa criar um script que exiba uma mensagem de aprovado
ou reprovado dependendo da nota obtida.
*/
let nota = 7; // Exemplo de nota obtida pelo aluno

if (nota >= 7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}


/* Se a nota for maior que 7 - aprovado
   Se a nota for maior que 4 e menor que 7 - recuperação
   E se for menor que 4 - reprovado
*/
let nota = 1; // Exemplo de nota obtida pelo aluno

if (nota >= 7){
    console.log("Aprovado");
} else if(nota >= 4){
    console.log("Recuperação");    
} else {
    console.log("Reprovado");
}


/* Imagine que agora tem mais uma condição intermediária:
Se a nota for maior ou igual a 4, mas menor que 7, o aluno estará de recuperação online.
Se a nota for maior ou igual a 2, mas menor que 4, o aluno estará em recuperação presencial.
E se a nota for menor que 2, o aluno estará reprovado.
*/
let nota = 5; // Exemplo de nota obtida pelo aluno

if (nota >= 7){
    console.log("Aprovado");
} else if(nota >= 4){
    console.log("Recuperação Online")    
} else if(nota >= 2){
    console.log("Recuperação Presencial")    
} else {
    console.log("Reprovado");
}

/* Fazer escolhas com switch */

/* Imagine que você queira criar um menu com opoções para uma
lanchonete */

let opcao = 1;
if (opcao === 1){
    console.log("Hamburguer")
} else if (opcao === 2){
    console.log("Pizza")
} else if (opcao === 3){
    console.log("Salada")
} else {
    console.log("Opção Invalida")
}

/* Agora utilizando switch case */
opcao = 2;
switch(opcao){
    case 1:
        console.log("Hamburguer");
        break;
    case 2:
        console.log("Pizza");
        break;
    case 3:
        console.log("Salada");
        break;
    default:
        console.log("Opção inválida");
        break;
}

