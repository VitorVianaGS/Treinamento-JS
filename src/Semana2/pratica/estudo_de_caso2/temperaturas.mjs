const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const temperaturas = [28, 31, 33, 29, 35, 30, 27];

let soma = 0;
let maior = temperaturas[0];
let menor = temperaturas[0];
let diaMaior = dias[0];
let acimaDe30 = 0;

for (let i = 0; i < temperaturas.length; i++) {
    console.log(`${dias[i]}: ${temperaturas[i]}°C`);

    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
        diaMaior = dias[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }

    if (temperaturas[i] > 30) {
        acimaDe30++;
    }
}

console.log(`Média da semana: ${(soma / temperaturas.length).toFixed(1)}°C`);
console.log(`Maior: ${maior}°C (${diaMaior})`);
console.log(`Menor: ${menor}°C`);
console.log(`Dias acima de 30°C: ${acimaDe30}`);
