// Laço FOR
const notas = [8, 7, 9, 6, 10]
console.log(notas)
console.log(notas[0])
console.log(notas[1])
console.log(notas[2])
console.log(notas[3])
console.log(notas[4])

const notas = [8, 7, 9, 6, 10]
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

// Somando as notas do array
const notas = [8, 7, 9, 6, 10]
let soma = 0;
for(let i = 0; i < notas.length; i++){
    soma += notas[i]
}
console.log(soma);