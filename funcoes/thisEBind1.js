const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)        
    }
}
 
pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const obj2 = {
    nome: 'Lucas',
    idade: 20,
    nomes(){
        console.log(this.nome)
    },
    idades(){
        console.log(this.idade)
    }
}

obj2.nomes()
obj2.idades() 

const lucas = obj2.nomes
lucas()

const lucas2 = obj2.nomes.bind(obj2)
lucas2()