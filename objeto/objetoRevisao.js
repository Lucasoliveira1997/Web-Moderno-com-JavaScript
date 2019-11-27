const produto = new Object

produto.nome = "Cadeira"
produto.preco = 220

console.log(produto) 

delete produto.preco

console.log(produto)



const carro = {
    modelo: "Agile",
    valor: 42000,
    proprietario:{
        nome: "Lucas",
        idade: 21,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123 
        }
    },

    condutores: [{
        nome: "Junior",
        idade: 23
    }, {
        nome: "Ana",
        idade: 42
    }],

    calcularValorSeguro: function(){
        //.....
    }
}

carro.proprietario.endereco.numero = 1260

console.log(carro)