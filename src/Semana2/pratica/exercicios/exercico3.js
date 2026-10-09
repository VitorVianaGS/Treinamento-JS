/*
2ª - Crie uma função calcularIMC que recebe do usuário peso (kg) e altura (m) e
retorna o IMC. Formula: IMC = peso/(altura*altura). Mostre o resultado
de 70kg e 1,75m com 2 casas decimais
*/

function imc(peso, altura){
    const imc = peso / (altura * altura);
    
    return console.log(`
        Você pesa: ${peso}
        Sua altura é: ${altura}
        Seu IMC é: ${imc.toFixed(2)}
        `)
}

imc(70, 1.75)