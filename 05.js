var num_1 = prompt("Digite um número:")
var num_2 = prompt("Digite outro número:")

if (num_2 > num_1) {
    for (i = num_1; i < num_2; i++) {
        console.log(i)
    }
} else if (num_1 > num_2) {
    for (i = num_2; i < num_1; i++) {
        console.log(i)
    }
}