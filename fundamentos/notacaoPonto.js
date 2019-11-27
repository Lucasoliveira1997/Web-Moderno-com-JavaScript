//console já é um objetodentro do JS
console.log(typeof console)

//atributo dentro de função
console.log(Math.ceil(6.1))

//objeto dinâmiico
const obj1 = {}

//mais recomendado usar notação ponto...
obj1.nome = 'Bola'

obj1['name'] = 'Bola2'

console.log(obj1)


function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)