class Jogador {
    forca : number;
    nivel : number;
    pontos_atuais : number;
    constructor(forca : number, nivel : number, pontos_atuais : number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;

    }
    calcularAtaque() {
        return this.forca*this.nivel
    }
    atacar(_atacado : Jogador) {
        if(_atacado.estaVivo() == true) {
            return _atacado.pontos_atuais = _atacado.pontos_atuais  - this.calcularAtaque()

        }
        else {
            return false
        }

    }
    estaVivo(): boolean {
        if(this.pontos_atuais > 0) {
            return true
        }
        else {
            return false
        }
    }

    toString() {
        return console.log(this.forca, this.nivel, this.pontos_atuais)
    }
}

let jogador : Jogador = new Jogador(3, 2, 9);
let jogador_2 : Jogador = new Jogador(1, 1, 6);
jogador.toString();
jogador_2.toString();
console.log(jogador.calcularAtaque());
console.log(jogador_2.calcularAtaque());
console.log(jogador.atacar(jogador_2));
console.log(jogador_2.estaVivo());
console.log(jogador_2.atacar(jogador));
console.log(jogador.estaVivo());