class CalculadoraCientifica extends Calculadora {
    constructor(_num: number, _num2: number) {
        super(_num, _num2);
    }

    exponenciar() {
        return this._num ** this._num2
    }
}
let calculadoracientifica: CalculadoraCientifica = new CalculadoraCientifica(3, 3);
console.log(calculadoracientifica.exponenciar());

// c. Sim, foi necessário utilizar o método get para que a classe CalculadoraCientifica obtivesse acesso 
// aos atributos da classe Calculadora.