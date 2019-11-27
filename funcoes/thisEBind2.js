function Pessoa(){
    this.idade = 0

    console.log(this === Pessoa) //perguntar isso pro Lucas

    const self = this

    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //perguntar para o Lucas pq nao "Pessoa"
}

new Pessoa

