const [a] = [10]
console.log(a)

const [n1, n2, n3 = 0, ,n5] = [10, 7, , ,14]
console.log(n1, n2, n3, n5) 

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

