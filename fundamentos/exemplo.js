let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.a)
console.log(this.c)

console.log(module.exports.c)
console.log(module.exports === this)

console.log(module.exports)

//criando uma variavel maluca: sem var e let
//abc = 3 //nao farei isso
///console.log(global.abc)


module.exports = {e: 456, f: false, g: 'Teste'}
