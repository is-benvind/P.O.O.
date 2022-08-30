class Retangulo {
    l1: number;
    l2: number;

    calcularArea(): number {
    return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2);
    }
    
    }

var retangulo: Retangulo;
retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(retangulo.calcularPerimetro());