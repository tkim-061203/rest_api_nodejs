const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bpm:{
        type: String,
        required: true
    },
    spo2:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('data',dataSchema)