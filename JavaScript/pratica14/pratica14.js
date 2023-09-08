class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou um(a) ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} é um gerente do departamento ${this.departamento} e está gerenciando.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} é um desenvolvedor que programa em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

const form = document.getElementById('funcionario-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    try {
        const nome = document.getElementById('nome').value;
        const idade = parseInt(document.getElementById('idade').value);
        const cargo = document.getElementById('cargo').value;
        const departamento = document.getElementById('departamento').value;
        const linguagem = document.getElementById('linguagem').value;

        let funcionario;

        if (cargo === 'Gerente') {
            if (!departamento) {
                throw new Error('O departamento é obrigatório para gerentes.');
            }
            funcionario = new Gerente(nome, idade, cargo, departamento);
        } else if (cargo === 'Desenvolvedor') {
            if (!linguagem) {
                throw new Error('A linguagem é obrigatória para desenvolvedores.');
            }
            funcionario = new Desenvolvedor(nome, idade, cargo, linguagem);
        } else {
            throw new Error('Cargo inválido.');
        }

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            <p>${funcionario instanceof Gerente ? funcionario.gerenciar() : ''}</p>
            <p>${funcionario instanceof Desenvolvedor ? funcionario.programar() : ''}</p>
        `;
    } catch (error) {
        exibirErro(error.message);
    }
});