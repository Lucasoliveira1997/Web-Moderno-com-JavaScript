class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = "Medico"){
        super(sobrenome),
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super("Oliveira", "Motorista")
    }
}

const filho = new Filho
console.log(filho)
