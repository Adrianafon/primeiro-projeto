const mongoose = require('mongoose')
const Schema = mongoose.Schema

var entrevistaSchema = Schema({
    Nome_do_candidato: {
        type: String
    },
    Email_do_candidato: {
        type: String
    },
    Data_da_entrevista: {
        type: Date
    },
    Horario: {
        type: String
    },
    Link_de_acesso: {
        type: String
    }
   
})

module.exports = mongoose.model('entrevista', entrevistaSchema)