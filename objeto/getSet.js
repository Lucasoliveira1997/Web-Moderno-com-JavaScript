const sequencia = {
        _valor: 2, //convencao para variaveis privadas

        get valor() { return this._valor++ },

        set valor(valor) {
            if(valor > this._valor){
                this._valor = valor
        }
    }
}
    
    //console.log(sequencia.valor);  

sequencia.valor = 1000
console.log(sequencia.valor)
console.log(sequencia.valor)
