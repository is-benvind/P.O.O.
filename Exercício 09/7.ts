interface FiguraGeometrica {
    calcularPerimetro()
    
    calcularArea()
}

class Quadrado implements FiguraGeometrica {
    lado: number;
    constructor(lado: number) {
        this.lado = lado;
    }
    calcularPerimetro(): number {
        return this.lado*4; 
    }

    calcularArea(): number {
        return this.lado**2;
    }

}

class Triangulo implements FiguraGeometrica {
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
    calcularPerimetro(): number {
        return this.base + this.lado2 + this.lado3;
    }

    calcularArea(): number {
        return (this.base*this.altura)/ 2;
    }
}

class Instanciacao  {
    quadrado: Quadrado = new Quadrado(5);
    triangulo: Triangulo = new Triangulo(5, 4, 3, 5);
    constructor(quadrado: Quadrado, triangulo: Triangulo ) {
        this.quadrado = quadrado;
        this.triangulo = triangulo;
    }
    instanciarPerimetroQuadrado() {
        return this.quadrado.calcularPerimetro()
    }
    instanciarAreaQuadrado() {
        return this.quadrado.calcularArea();
    } 
    instanciarPerimetroTriangulo() {
        return this.triangulo.calcularPerimetro();
    }
    InstanciarAreaTriangulo() {
        return this.triangulo.calcularArea()

    }
}