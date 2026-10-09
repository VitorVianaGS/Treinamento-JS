// Arrays
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
console.log(familia); // exibe todos os elementos do array

const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
console.log(familia[0]); // exibe o Primeiro elemento do array

const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
console.log(familia[familia.length -1]); // exibe o último elemento do array

const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
console.log(familia.length); // exibe a quantidades de elementos do array


// Adicionando elementos ao array
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.push("Pedro");
console.log(familia);

// Removendo o último elemento de um array
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.pop();
console.log(familia);

// Inserindo um elemento na primeira posição
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.unshift("João");
console.log(familia);

// Remove o primeiro elemento do array
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.shift("João");
console.log(familia);

// Inserindo elemento em uma posição especifica do array
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.splice(2, 0, "Pedro")
console.log(familia)

// Removendo elemento em uma posição especifica do array
const familia = ["Vitor", "Ana", "Margo", "Lucilene", "Maria", "José"];
familia.splice(2, 1)
console.log(familia)