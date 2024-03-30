const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    bpm:{
        type: Number,
        required: true
    },
    spo2:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('data',dataSchema);