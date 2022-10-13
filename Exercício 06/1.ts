class Calculadora {
    private operando1 : number;
    private operando2 : number;
    constructor(operando1 : number, operando2 : number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    soma() {
        return this.operando1 + this.operando2
    }
    subtracao() {
        return this.operando1 - this.operando2
    }
}

let calculadora : Calculadora = new Calculadora(4, 3);
calculadora.operando1 = 1 // A propriedade 'operando1' é particular e somente é acessível na classe 'Calculadora'.
console.log(calculadora.soma());
console.log(calculadora.subtracao());