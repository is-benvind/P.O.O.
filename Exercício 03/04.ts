function transformar(x: string) {
    var separar = x.split('')
    var array_x = []

    separar.forEach(function(numero) {
        if (numero != '-')
        return array_x.push(parseInt(numero))
    })
    console.log(array_x)
}
transformar("4-7-8-9-5-3")