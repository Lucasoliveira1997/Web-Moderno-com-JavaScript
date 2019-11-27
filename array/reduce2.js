const alunos = [
    {nome : "Joao", nota : 7.3, bolsista: false},
    {nome : "Maria", nota : 9.2, bolsista: true},
    {nome : "Pedro", nota : 9.8, bolsista: false},
    {nome : "Ana", nota : 8.7, bolsista: true},
]

const bolsistas = alunos.map(e => e.bolsista).reduce((inicio, atual) => {
    return inicio && atual == true    
})

console.log(alunos)
console.log(bolsistas)
