class Equipamento {
    ligado : boolean;
    constructor(ligado : boolean) {
        this.ligado = ligado;  
    }
    liga() {
        this.ligado == true
    }
    desliga() {
        this.ligado == false
    }
    inverte() {
        if(this.ligado == true) {
            this.desliga()
        }
        else {
            this.liga()
        }
    }
    estaLigado() {
        this.ligado
    }
}

let equipamento : Equipamento = new Equipamento(false);
equipamento.liga()
equipamento.desliga()
equipamento.inverte()
equipamento.estaLigado()