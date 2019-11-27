console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log("Lucas Oliveira".reverse())

Array.prototype.first = function(){
    return this[0]
}
let numeros = [5,6,7,8]
let letras = ['a', 'b', 'c']
console.log(numeros.first())
console.log(letras.first())

String.prototype.toString = function(){
    return 'Lascou Tudo'
}
console.log('Lucas Oliveira'.reverse())