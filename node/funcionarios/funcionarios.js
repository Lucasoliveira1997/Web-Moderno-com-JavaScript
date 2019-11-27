const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//função para saber se a pessoa é chinesa
const chinesa = funcionario => funcionario.pais === "China"

//função para saber se a pessoa é Mulher
const mulher = funcionario => funcionario.genero === "F"

//função para saber o salário
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
        const funcionarios = response.data    
        console.log(funcionarios)        

        const func = funcionarios.filter(chinesa).filter(mulher).reduce(menorSalario)
        console.log(`o menor salário é: ${func.nome}`)
        console.log(func)        
})

