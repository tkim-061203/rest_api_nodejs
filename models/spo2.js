const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data:{
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

module.exports = mongoose.model('spo2',dataSchema)