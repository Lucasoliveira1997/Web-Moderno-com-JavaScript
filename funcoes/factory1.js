//declaração simples  de um objeto
const prod1 = {
    nome: "Sapato",
    preco: 95.90
}
const prod2 = {
    nome: "Chinelo",
    preco: 25.90
}

//factory simples
function criarPessoa(){
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
}
//console.log(criarPessoa())

//criando factory de produto
function criarProduto(nome = "novo", preco = 0.00, id){
        let desconto = 1.1
    return{
        nome: nome,        
        preco: (preco -= desconto).toFixed(2),
        id
    }
}
console.log(criarProduto("Sapato", 79.90, 12345))
console.log(criarProduto("Chinelo", 25.99, 12346))
console.log(criarProduto("Sandalia", 75.90, 12347))
