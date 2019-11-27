const medidas = [
    {parte : "parede1", medida : 7.50, cor : "branca"},
    {parte : "parede2", medida : 7.50, cor : "branca"},
    {parte : "parede3", medida : 5.80, cor : "branca"},
    {parte : "parede4", medida : 5.80, cor : "branca"},
]

const perimetro = medidas.map(e => e.medida).reduce(function(inicio, atual, indice){
    console.log(inicio, atual, indice)
    
    return inicio + atual + indice
})

console.log(medidas)
console.log(perimetro)