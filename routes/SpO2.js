const express = require('express')
const router = express.Router()
const Subscriber = require('../models/spo2' )
// Getting all
router.get('/', async(req, res) => {
    try {
        const Subscribers = await Subscriber.find()
        res.json(Subscribers)
    } catch (err) {
        res.status(500).json({message:err.message })
    }
})

// Getting One
router.get('/:id', geSubcriber, (req, res) => {
    res.json(res.subscriber)
})

// Creating one
router.post('/', async(req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        data: req.body.data
    })
    try {
        const newsubscriber = await subscriber.save()
        res.status(201).json(newsubscriber)
    } catch (err) {
        res.status(400).json({message:err.message })
    }
})
// Update one
router.patch('/:id', geSubcriber, async(req, res) => {
    if (req.body.name == null) {
        res.subscriber.name = req.body.name}
    if (req.body.data != null) {
        res.subscriber.data = req.body.data
    }
    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json (updatedSubscriber)
    } catch (err) {
        res.status(400).json({message:err.message })
    }
})

// Delete one 
router.delete('/:id', geSubcriber, async(req, res) => {
    try {
        await res.subscriber.deleteOne()
        res.json({message:'Deleted Sub' })
    } catch (err) {
        res.status(500).json({message:err.message })
    }
})

async function geSubcriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Cannot find subscriber'}) 
        }}
    catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router