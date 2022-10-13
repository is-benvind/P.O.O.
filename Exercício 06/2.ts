class Hora {
    private horas : number;
    private minutos : number;
    private segundos : number;
    constructor(horas : number, minutos : number, segundos : number) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    hora() {
        return this.horas
    }
    minuto() {
        return this.minutos
    }
    segundo() {
        return this.segundos
    }
    horario() {
        return console.log(`${this.horas}: ${this.minutos} : ${this.segundos}`)
    }
}

let relogio : Hora = new Hora(17, 14, 30);
relogio.horario()