const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bpm:{
        type: Number,
        min : 1,
        max : 999
    },
    spo2:{
        type: Number,
        min : 1,
        max : 999
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('data',dataSchema)