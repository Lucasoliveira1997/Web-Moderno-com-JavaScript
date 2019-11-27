console.log(soma(3,4)) /* isso funciona, pq quando rodar, as funções ja estarão carregadas
                            Porém, somente no caso de funções tradicionais*/

//function declaration

function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y) {
    return x - y
}

//named function expresssion
const mult = function mult(x, y) {
    return x * y
}
