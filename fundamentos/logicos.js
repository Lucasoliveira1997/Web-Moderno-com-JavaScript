function compras(job1, job2){
    const comprarSorvete = job1 || job2
    const comprarTv50 = job1 && job2
    //const comprarTv32 = !!(job1 ^ job2) // bitwise xor
    const comprarTv32 = job1 != job2
    const manterSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log()
console.log(compras(true, false))
console.log()
console.log(compras(false, true))
console.log()
console.log(compras(false, false))