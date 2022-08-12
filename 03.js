var numero_1 = prompt("Digite o primeiro número:");
var numero_2 = prompt("Digite o segundo número:");
var numero_3 = prompt("Digite o terceiro número:");

if (numero_1 > numero_2 && numero_2 > numero_3) {
    console.log("Maior número:", numero_1, ";", "Menor número:", numero_3)
} else if (numero_1 > numero_3 && numero_3 > numero_2) {
    console.log("Maior número:", numero_1,  ";", "Menor número:", numero_2)
} else if (numero_2 > numero_1 && numero_1 > numero_3) {
    console.log("Maior número:", numero_2, ";", "Menor número:", numero_3)
} else if (numero_2 > numero_3 && numero_3 > numero_1) {
    console.log("Maior número:", numero_2, ";", "Menor número:", numero_1)
} else if (numero_3 > numero_1 && numero_1 > numero_2) {
    console.log("Maior número:", numero_3, ";", "Menor número:", numero_2)
} else if (numero_3 > numero_2 && numero_2 > numero_1) {
    console.log("Maior número:", numero_3, ";", "Menor número:", numero_1)
}