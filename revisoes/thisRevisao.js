//this
const obj = {
    nome: 'Lucas',
    pensar(){
        console.log(this.nome)
    }

}
obj.pensar()

//bind
const obj2 = {
    sobrenome: 'Oliveira',
    falar(){
        console.log(this.sobrenome)
    }
}
const sobrenome = obj2.falar.bind(obj2)
sobrenome()