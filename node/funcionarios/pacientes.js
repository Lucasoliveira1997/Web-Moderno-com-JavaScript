const axios = require('axios')
const url = 'https://api-pacientes.herokuapp.com/pacientes'

axios.get(url).then(response => {
    const pacientes = response.data
    console.log(pacientes)      

    const pacientesFiltrado = pacientes.map(elemento => elemento.peso).reduce((atual, seguinte) => {
        return atual < seguinte ? atual : seguinte
    })
    console.log(pacientesFiltrado)  
})
