'use strict'

const express = require('express')
const port = 3000
const app = express()

const bodyParser = require('body-parser')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, resp) => resp.send({dataAtual: new Date}))

app.listen(port, () => console.log(`Server is running on port ${port}`))