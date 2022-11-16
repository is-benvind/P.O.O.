abstract class FiguraGeometrica {
    calcularPerimetro() {
    }

    calcularArea() {
    }
}

class Quadrado extends FiguraGeometrica {
    lado: number;
    constructor(lado: number) {
        super()
        this.lado = lado;
    }
    calcularPerimetro(): number {
        return this.lado*4; 
    }

    calcularArea(): number {
        return this.lado**2;
    }
    
}

class Triangulo extends FiguraGeometrica {
    base: number;
    lado2: number;
    lado3: number
    altura: number;
    constructor(base: number, lado2: number, lado3: number, altura: number) {
        super()
        this.base = base;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.altura = altura;
    }
    calcularPerimetro(): number {
        return this.base + this.lado2 + this.lado3;
    }

    calcularArea(): number {
        return (this.base*this.altura)/ 2;
    }
}

let quadrado: Quadrado = new Quadrado(5);
console.log(quadrado.calcularPerimetro());
console.log(quadrado.calcularArea());

let triangulo: Triangulo = new Triangulo(5, 4, 3, 5);
console.log(triangulo.calcularPerimetro());
console.log(triangulo.calcularArea());