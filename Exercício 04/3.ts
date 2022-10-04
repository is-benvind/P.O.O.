// O erro se deve ao fato de 'volume' não receber um argumento em "let r : Radio = new Radio();". Além disso, o programa não possui saída.
// Solução: 

class Radio {
    volume : number;
    constructor(volume : number) {
    this.volume = volume;
    }
    }
let r : Radio = new Radio(10);
console.log(r.volume);