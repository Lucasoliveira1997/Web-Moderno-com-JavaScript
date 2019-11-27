const aprovados = ['Lucas', 'Evander', 'Isabelly', 'Luan']

function forEach2(array){
       
    for(let i = 0; i < array.length; i++){
        console.log(`${i+1}) ${array[i]}`)
    }
}

forEach2(aprovados)

/*aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1})  ${nome}`)    
})*/

