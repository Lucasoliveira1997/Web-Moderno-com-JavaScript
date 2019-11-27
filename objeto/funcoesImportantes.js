const pessoa = {
    nome: "Lucas",
    idade: 21,
    peso: 66
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: false,
    writable: false,
    value: "01/01/2019"
})

pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015 - ES6)
const destino = {a: 1 }

const obj1 = {b: 2}
const obj2 = {c: 3, a: 4}

const obj = Object.assign(destino, obj1, obj2)

console.log(destino)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

console.log(obj === destino)


//Testes Lucas

const transporte = { tipo : "terreo" } 

const automovel = { categoria : "carro" }
const automove2 = { cor : "vermelho"}
const automove3 = { kmRodados : 130000}

const transporte2 = Object.assign(transporte, automovel, automove2, automove3)

console.log(transporte)
console.log(transporte2)
console.log(transporte === transporte2)