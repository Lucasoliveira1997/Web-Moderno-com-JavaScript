const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome" : "Caderno", "preco" : 13.90}',
    '{"nome" : "Kit de lápis", "preco" : 41.22}',
    '{"nome" : "Caneta", "preco" : 7.50}'
]

//retornar um array com os preços apenas

const paraObjeto = carrinho.map(function(elemento){
    return JSON.parse(elemento)
}).map(function(elemento){
    return elemento.preco
}).filter(elemento => elemento < 40)

console.log(carrinho)
console.log(paraObjeto)

