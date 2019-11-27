// novo recurso ES6

const pessoa = {
    nome: 'Lucas',
    idade: 20,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n,  i)

const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

// cep nao existe dentro de endereco, mas é possível criar
const {endereco: {logradouro, numero, cep = '06163-075'}} = pessoa
console.log(logradouro, numero, cep)

