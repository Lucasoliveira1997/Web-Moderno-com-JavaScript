const carros = [
    {nome : "Agile", marca : "Chevrolet", velocidadeMax : 200, vendido : true},
    {nome : "Argo", marca : "Fiat", velocidadeMax : 250, vendido : false},
    {nome : "Gol", marca : "Volkswagem", velocidadeMax : 220, vendido : false},
    {nome : "Fusca", marca : "Volkswagem", velocidadeMax : 160, vendido : true}
]

const volkswagemOnly = carros.filter(function(elemento){
        return elemento.marca == "Volkswagem"
    })

console.log("aqui, todos os carros", carros)
console.log("aqui, apenas os Volks", volkswagemOnly)



