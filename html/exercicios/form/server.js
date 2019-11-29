const express = require('express')
const app = express()
const port = 3003

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/usuarios', (req, resp) => {
    console.log(req.body)    
    resp.send('<h1>Parabens</h1>')
})

app.listen(port, () => console.log(`Listen on port ${port}`))