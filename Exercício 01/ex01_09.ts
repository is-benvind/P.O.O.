class SituacaoFinanceira {
    valorCreditos: number;
    valorDebitos: number;

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

var situacaofinanceira: SituacaoFinanceira;
situacaofinanceira = new SituacaoFinanceira();
situacaofinanceira.valorCreditos = 88;
situacaofinanceira.valorDebitos = 50;
console.log(situacaofinanceira.saldo());