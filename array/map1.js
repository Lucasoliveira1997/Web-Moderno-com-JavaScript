const numeros = [1, 2, 3, 4, 5]

let testeNumeros = numeros.map(function(elemento){
    return elemento * 2
}).map(e => `R$ ${e}`)

console.log(numeros)
console.log(testeNumeros)


const nomes = ['José', 'Maria', 'Lucas', 'Inácia']
const familia = nomes.map(e => {
    return `${e} Ferreira`
})

console.log(nomes)
console.log(familia)


const computadores = ["Optiplex", "Inspiron", "Latitude"]

const compMarcas = computadores.map(computador => {
    return `${computador} da marca Dell`
})

console.log(computadores)
console.log(compMarcas)

