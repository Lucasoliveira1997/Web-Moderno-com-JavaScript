//notacao literal
const obj1 = {}

// Object em JS
const obj2 = new Object

//funcoes contrutoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2998.99, 0.25)

//funcao factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,

        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Lucas", 1600, 1)
console.log(f1)
console.log(f1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Claudia"
console.log(filha)

 //JSON.parse
 const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJSON.info)