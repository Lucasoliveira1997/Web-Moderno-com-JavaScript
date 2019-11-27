const fabricantes = ["Mercedes", "Audi", "Chevrolet", "Volkswagem", "Porsche" ]

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

