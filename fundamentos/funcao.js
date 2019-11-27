//funcao sem retorno
function imprimiSoma(a, b){
    console.log(a + b)
}
imprimiSoma(2, 3)
imprimiSoma(2)
imprimiSoma(2,3,4,5,6,7,8,9)
imprimiSoma()


//funcao com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))


//armazenando uma funcao em uma variavel
const imprimirSoma2 = function (a, b){
    console.log (a + b)
} 
imprimirSoma2(2, 3)


//armazenando uma funcao arrow em uma variavel
const soma2 = (a, b) => {
    return a + b
}
console.log(soma2(3,8))


//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")