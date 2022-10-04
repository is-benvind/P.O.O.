class Triangulo {
    lado1 : number;
    lado2 : number;
    lado3 : number;
    constructor(lado1 : number, lado2 : number, lado3 : number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    ehTriangulo(): boolean {
        if(this.lado2 - this.lado3 < this.lado1 && this.lado1 < this.lado2 + this.lado3) {
            return true;
        } 
        else {
            return false;
        }

    }
    ehIsoceles() {
        if(this.ehTriangulo() == true) {
            if(this.lado1 == this.lado2 && this.lado1 != this.lado3 || this.lado1 == this.lado3 && this.lado1 != this.lado2 || this.lado2 == this.lado3 && this.lado2 != this.lado1) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }

    }
    ehEquilatero() {
        if(this.ehTriangulo() == true) {
            if(this.lado1 == this.lado2 && this.lado2 == this.lado3) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }

   }
   ehEscaleno() {
    if(this.ehTriangulo() == true) {
        if(this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3) {
            return true
        } 
        else {
            return false
        }
    }
    else {
        return false
    }
   }
}

let triangulo : Triangulo = new Triangulo(3, 3, 3);
console.log(triangulo.ehIsoceles());
console.log(triangulo.ehEquilatero());
console.log(triangulo.ehEscaleno());