interface IComparavel {
    comparar(figurageometrica: FiguraGeometrica)

}
interface FiguraGeometrica {
    calcularArea()
}

class Quadrado implements FiguraGeometrica, IComparavel {
    lado: number;
    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado2;
    }

    comparar(quadrado:Quadrado) {
        if(this.calcularArea() < quadrado.calcularArea()) {
            return -1
        } else if (this.calcularArea() == quadrado.calcularArea()) {
            return 0
        }else {
            return 1
        }
    }

}

class Triangulo implements FiguraGeometrica, IComparavel {
    base: number;
    lado2: number;
    lado3: number
    altura: number;
    constructor(base: number, lado2: number, lado3: number, altura: number) {
        this.base = base;
        this.lado2 = lado2;
        this.lado3 = lado3;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.basethis.altura)/ 2;
    }

    comparar(triangulo:Triangulo) {
        if(this.calcularArea() < triangulo.calcularArea()) {
            return -1
        } else if (this.calcularArea() == triangulo.calcularArea()) {
            return 0
        }else {
            return 1
        }
    }
}