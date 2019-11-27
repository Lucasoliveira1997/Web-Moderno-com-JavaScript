function aleatorio({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(aleatorio({ max: 50, min: 40}))

const numero = Math.random()
console.log(Math.round(numero.toFixed(2)*10))

console.log(aleatorio({min: 955}))

console.log(aleatorio({}))

//console.log(aleatorio()) isso gerará um erro, pois precisa de min e max

