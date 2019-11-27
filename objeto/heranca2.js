const avo = {attr1: 'A'}

const pai = {__proto__: avo, attr2: "B", attr3: "D"}

const filho = {__proto__: pai, attr3: "C"}

console.log(filho.attr1, filho.attr2, filho.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(aceleracao){
        if(this.velAtual + aceleracao <= this.velMax){
            this.velAtual += aceleracao
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {    
    __proto__: carro,
    modelo: "F40",
    velMax: 324 // shadowing
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo} : ${super.status()}`
    }
}

//Object.setPrototypeOf(ferrari, carro) usei um atributo dentro da classe pra fazer isso
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)

console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())

ferrari.aceleraMais(600)
console.log(ferrari.status())