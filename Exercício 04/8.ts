class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number) {
        if(valor > this.saldo) {
            return false
        }
        else {
            return this.saldo = this.saldo - valor
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferencia(contaDestino: Conta, valor: number) {
        if (this.sacar(valor) == false) {
            return false
        }
        else {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
}

let conta : Conta = new Conta('1', 100);
let conta2 : Conta = new Conta('2', 100);
conta.sacar(50);
conta.transferencia(conta2, 40);
console.log(conta.consultarSaldo());
console.log(conta2.consultarSaldo());