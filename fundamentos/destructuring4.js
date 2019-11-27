function aleatorio ([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(aleatorio([50, 40]))
console.log(aleatorio([, 992]))
console.log(aleatorio([992]))
console.log(aleatorio([]))
