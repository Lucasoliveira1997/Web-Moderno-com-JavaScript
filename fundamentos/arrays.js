const valores = [7.1, 7.7, 8.9, 9.2]

console.log  (valores[0], valores[3])
console.log(valores[4])

//acrescentando uma nova posição no array
valores[4] = 10 

console.log(typeof valores)
console.log((valores[0] + valores[3]).toFixed(2))

//consultar o tamanho do array
console.log(valores.length)

//push: acrescentar quaisquer valores no vetor
valores.push("Lucas", false)
console.log(valores)

//retirar umelemento do array
valores.pop()
console.log(valores)

delete valores[2]
console.log(valores)