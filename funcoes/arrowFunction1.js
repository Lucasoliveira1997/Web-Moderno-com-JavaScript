let dobro = function (a){
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI.toFixed(2)));

let ola = function () {
    return "Olá"
}

ola = _ => "Olá" // _ é um parametro
ola = () => "Olá"
 
console.log(ola())


