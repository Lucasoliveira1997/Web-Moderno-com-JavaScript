const notas = [7.7, 6.6, 7.6, 8.2, 2.3, 5.0, 6.5, 3.2]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

//console.log(notasBaixas)


//com callback
notasBaixas = notas.filter(function (nota){
    return nota < 7
})

//console.log(notasBaixas);

//com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
//console.log(notasBaixas3);

//teste com if
const testeNotas = [1.2, 5.6, 7.7, 8.0, 3.0, 6.7, 6.5]
let testeBaixas = []
let testeAltas = []

testeBaixas = testeNotas.filter(function(nota){
    if (nota < 6){
            return nota
        }
    })

console.log(testeBaixas)
console.log(testeAltas);

