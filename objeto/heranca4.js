function meuObjeto(){}

console.log(meuObjeto.prototype)


const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === meuObjeto.prototype)

meuObjeto.prototype.nome = "Anonimo"
meuObjeto.prototype.falar = function(){ console.log(`bom dia, meu nome é ${this.nome}`)}


const obj3 = new meuObjeto

obj1.falar()

console.log(this === Function.meuObjeto)
