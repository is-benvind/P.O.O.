class Conta {
    private _nome: string;
    private _saldo: number;
    constructor(nome: string, saldo: number){
        this._nome = nome;
        this._saldo = saldo;
    }

    get nome(): string{
        return this._nome;
    }

    setNome(nome: string): void {
        this._nome = nome;
    }

    get saldo(): number{
        return this._saldo;
    }

    setSaldo(saldo: number): void {
        this._saldo = saldo;
    }
}

interface Tributavel {
    calculaTributos();
}

class ContaCorrente extends Conta implements Tributavel {
    calculaTributos(): number {
        return (this.saldo * 10) /  100;
    }
}

class SegurodeVida implements Tributavel {
    calculaTributos(): number {
        return 50;
    }
}

class AuditoriaInterna {
    Tributaveis: number [] = [];

    adicionar(tributos: number) {
        this.Tributaveis.push(tributos);
    }

    calcularTributos() {
        var soma = 0;
        for(var i = 0; i < this.Tributaveis.length; i++)
        { 
            soma += this.Tributaveis[i]; 
        }
        return soma;
    }
}