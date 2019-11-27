const pessoa = {nome: "Joao"}
pessoa.nome = "Lucas"

console.log(pessoa.nome)

//pessoa = {nome: "Ana"}

//congelar o objeto
Object.freeze(pessoa)

//tudo abaixo será ignorado, relacionado a mudança de objetos
pessoa.nome = "Lucio"
pessoa.idade = 21
delete pessoa.nome

console.log(pessoa)
 
const pessoaConstante = Object.freeze({nome: "Lucas", idade: 21})
pessoaConstante.nome = "Marisa"
console.log(pessoaConstante)