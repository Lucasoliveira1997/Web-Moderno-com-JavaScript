//Criação de classe Pessoa
class Pessoa{

    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//Instanciando a classe Pessoa
const p1 = new Pessoa("Joao")
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Joao")
p2.falar()
