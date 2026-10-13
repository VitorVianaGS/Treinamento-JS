class Medico{
    nome;
    especialidade;
    limiteDiario = 3;
    pacientes = [];

    constructor(nome, especialidade, limiteDiario = 3){
        const nomeLimpo = nome.trim();
        if (nome.length === 0){
            throw new Error("Nome inválido.");
        }

        if (!Number.isInteger(limiteDiario) || limiteDiario < 1 || limiteDiario > 10){
            throw new Error("Limite diário inválido.")
        }
    
    this.nome = nomeLimpo;
    this.especialidade = especialidade;
    this.limiteDiario = limiteDiario;
    }

    resumo(){
        return `${this.nome} (${this.especialidade}): ${this.pacientes.length}/${this.limiteDiario} consultas.`
    }

    agendarPaciente(paciente){
        const nomeLimpo = paciente.trim();
        if (paciente.length === 0){
            throw new Error("Não agendado: Paciente obrigatório");
        }

        if (this.limiteDiario <= this.pacientes.length){
            throw new Error(`Não agendado: Agenda lotada: ${this.nome}`)
        }

        this.pacientes.push(nomeLimpo)
        return `Agendado: ${paciente} com ${this.nome}`
    }
}

const medicoLucia = new Medico("Dra. Lúcia", "Cardiologia", 2);
console.log(medicoLucia.resumo())

const medicoPaulo = new Medico("Dr. Paulo", "Pediatria");
console.log(medicoPaulo.resumo())

try {
    const medico = new Medico("Dra. Rita", "Dermatologia", 0);
    console.log(medico.resumo());
} catch (erro) {
    if (erro instanceof Error){
        console.log(`Cadastro Recusado: ${erro.message}`);
    }
}

try {
    medicoLucia.agendarPaciente("Ana");
    medicoLucia.agendarPaciente("Bruno");
    medicoLucia.agendarPaciente("Carla");
} catch (erro){
    if (erro instanceof Error){
        console.log(erro.message);
    }
}

try {
    medicoPaulo.agendarPaciente("   ");
} catch (erro){
    if (erro instanceof Error){
        console.log(erro.message);
    }
}

try {
    medicoPaulo.agendarPaciente("Davi");
} catch (erro){
    if (erro instanceof Error){
        console.log(erro.message);
    }
}

const equipe = [medicoLucia, medicoPaulo];

for(const medico of equipe){
    console.log(`${medico.resumo()}`);
    for(const paciente of medico.pacientes){
        console.log(`   - ${paciente}`)
    }
}

