function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw false
    throw{
        nome: erro.name,
        msg: erro.message
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('Finally')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)

