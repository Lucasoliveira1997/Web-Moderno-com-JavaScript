const a = []
console.log(typeof a)

let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']

aprovados[3] = 'Paulo'
aprovados.push('Lucas')

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

console.log(aprovados.length)

aprovados[9] = 'Rafael'

console.log(aprovados.length)

console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])


//usando o splice para excluir elementos 
    //primeiro valor = indice que stá trabalhando
    //segundo valor = quantidade de valores a apagar a partir do indice
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados);

//excluindo e adicionando itens
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Lucas', 'Natalia')
console.log(aprovados);

//adicionando itens sem exclusões
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Lucas', 'Natalia')
console.log(aprovados);
