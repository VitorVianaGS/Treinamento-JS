class Lampada{
    comodo;
    ligada = false;

    constructor(comodo){
        this.comodo = comodo;
    }

    ligar(){
        this.ligada = true;
    }

    desligar(){
        this.ligada = false;
    }

    consultarSituacao(){
        if (this.ligada){
            return "Ligada"
        }
           return "Desligada"
    }
}

const sala = new Lampada("Sala")
console.log(sala.consultarSituacao())

sala.ligar()
console.log(sala.consultarSituacao())

sala.desligar()
console.log(sala.consultarSituacao())
