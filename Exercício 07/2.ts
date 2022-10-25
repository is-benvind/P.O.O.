class Calculadora {
    private _num: number;
    private _num2: number;
    constructor(_num: number, _num2: number) {
        this._num = _num;
        this._num2 = _num2;
    }
    
    public get num() : number {
        return this._num
    }
    
    
    public get num2() : number {
        return this._num2
    }

    soma() {
        return this._num + this._num2
    }
}

let calculadora: Calculadora = new Calculadora(3, 4);
console.log(calculadora.soma());