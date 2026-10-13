class Medico {
    nome;
    especialidade;
    limiteDiario;
    pacientes;

    constructor(nome, especialidade, limiteDiario = 3) {
        const nomeLimpo = nome.trim();
        if (nomeLimpo.length === 0) {
            throw new Error("Nome do médico obrigatório.");
        }
        if (!Number.isInteger(limiteDiario) || 
            limiteDiario < 1 || limiteDiario > 10) {
            throw new Error("Limite diário inválido.");
        }
        this.nome = nomeLimpo;
        this.especialidade = especialidade;
        this.limiteDiario = limiteDiario;
        this.pacientes = [];
    }

    agendar(paciente) {
        const pacienteLimpo = paciente.trim();
        if (pacienteLimpo.length === 0) {
            throw new Error("Paciente obrigatório.");
        }
        if (this.pacientes.length >= this.limiteDiario) {
            throw new Error(Agenda lotada: ${this.nome}.);
        }
        this.pacientes.push(pacienteLimpo);
    }

    resumo() {
        const ocupacao = ${this.pacientes.length}/${this.limiteDiario};
        return ${this.nome} (${this.especialidade}): ${ocupacao} consultas;
    }
}