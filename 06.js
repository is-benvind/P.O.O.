var num = prompt("Digite um número:")

var soma = 0;

for (i = num; i > -1; i--) {
    soma -= i;
    console.log(i)
}

var positivo = soma * (-1);

console.log("Soma:", positivo)

var int = parseInt(num);
var divisor = int + 1;
var media = positivo / divisor;

console.log("Média Aritmética:", media)

var soma_2 = 0;

for (i = num; i > -1; i--) {
    soma_2 += (media - i) ** 2;
}

var divisao = soma_2 / divisor;
var desvio = Math.sqrt(divisao);

console.log("Desvio Padrão:", desvio.toFixed(2))