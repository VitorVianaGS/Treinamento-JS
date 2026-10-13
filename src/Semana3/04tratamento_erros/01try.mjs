class Vaga{
    numero;

    constructor(numero){
        if(!Number.isFinite(numero) || numero <= 0){
            throw new Error("Número da vaga inválido.");
        }
        this.numero = numero;
    }
}

try {
    const vaga1 = new Vaga(1);
    console.log(`Vaga: ${vaga1.numero}`);
}catch(erro){
    if (erro instanceof Error){
        console.log(erro.message);
    }
}

console.log("Programa continua.")