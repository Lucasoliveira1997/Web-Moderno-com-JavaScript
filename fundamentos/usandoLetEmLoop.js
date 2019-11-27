//Let segue uma regra, fica disponivel apenas dentro do bloco...
for(var i = 0; i < 10; i++){
    console.log(i)
}

console.log("valor do I = ", i)

// ------------------------------------- 

// exemplo de loop com var
const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()