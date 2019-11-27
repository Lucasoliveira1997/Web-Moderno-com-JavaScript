function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,

    getPreco

}
//console.log(getPreco())
//console.log(produto.getPreco())

const carro = {
    precoCarro: 49990,
    descCompra: 0.20,

}

console.log(getPreco.call(carro))
//console.log(getPreco.apply(carro))

//console.log(getPreco.call(carro, 0.17, "$"))
//console.log(getPreco.apply(produto,[0.17, '$']))


const Pessoa = function(nome, idade, cpf){
    return {
        nome,
        idade,
        cpf,
    }
}