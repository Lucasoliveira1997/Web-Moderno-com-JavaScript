const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}

const nomeAtributo = "Nota"
const valorAtributo = 7.87

const obj3 = {}
obj3[nomeAtributo] = valorAtributo

console.log(obj3);


const obj4 = {[nomeAtributo]: valorAtributo}

const obj5 = {
    funcao1: function(){
        //...
    },

    funcao2(){
        //...
    }
}

console.log(obj5)


//atribuindo variavel a objetos
//definindo chaves atraves de Strings

let dado = "nome"
let nome = "Lucas"

const obj6 = {}
obj6[dado] = nome

console.log(obj6.nome);
