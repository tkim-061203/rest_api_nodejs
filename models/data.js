const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    bpm:{
        type: Number,
        min : 1,
        max : 999,
        required: true
    },
    spo2:{
        type: Number,
        min : 1,
        max : 999,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('data',dataSchema)