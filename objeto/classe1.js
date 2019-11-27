class Lancamento {
    constructor(nome = "lancamento", valor = 0.0){
        this.nome = nome,
        this.valor = valor
    }
}

class CicloLancamentos {
    constructor(mes, ano){
        this.mes = mes,
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(elemento => this.lancamentos.push(elemento))
    }

    sumario(){
        let valorConsolidado = 0.0
        this.lancamentos.forEach(elemento => {
             valorConsolidado += elemento.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salario", 7500)
const despesa = new Lancamento("Despesa", -500)

const cicloPagamentos = new CicloLancamentos(3, 2019)
cicloPagamentos.addLancamentos(salario, despesa)
console.log(cicloPagamentos.sumario())

