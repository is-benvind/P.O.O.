abstract class Funcionario {
    protected salario: number;
    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): {
    }
}

class Gerente extends Funcionario {
    getBonificacao(): number {
    return (this.salario * 40) / 100;
    }
}

class Diretor extends Funcionario {
    getBonificacao(): number {
        return (this.salario * 60) / 100;
        }
}

class Presidente extends Funcionario {
    getBonificacao(): number {
        return this.salario + 1000;
        }
}