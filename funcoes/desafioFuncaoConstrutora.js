function Pessoa(nome){

    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const Lucas = new Pessoa("Lucas")

console.log(Lucas.falar())