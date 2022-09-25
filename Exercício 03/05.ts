// alternativa a
function soma(x: number, y: any): number {
    return x + y
  }
console.log(soma(1, 2)); // 3

// alternativa b
function soma(x: number, y: any): number {
    return x + y
  }
console.log(soma(1, "2")); // 12

// alternativa c
function soma(x: number, y: any): number {
    return x + y
  }
console.log(soma(1)); // "An argument for 'y' was not provided"