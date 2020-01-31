const numeros = [1, 2, 3, 4, 5]

function exibeArray(array) {
    console.log(array)    
}

function exibeSpread(...array) {
    console.log(array)    
}

exibeArray(numeros, 1, 2, 'a', 'b')
exibeSpread(numeros, 1, 2, 'a', 'b')