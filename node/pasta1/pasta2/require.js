const moduloA = require("../../moduleA")
console.log(moduloA.boasVindas)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write("it working!")
    res.end()
}).listen(8080)