require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
//chinh templating
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')

mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
       console.log("DB connection successful.");
    })
    .catch((err)=>{
       console.log(`DB connection error:${err}`);
    });

app.use(express.json())
const bpmRouter = require("./routes/BPMs")
app.use('/BPM',bpmRouter)

app.get( '/', (req, res) => {
// res.send('<hl>hoi dan it voi Eric </hl>')
   res.render('sample.ejs')})

app.listen(process.env.PORT || 8081, () => console.log( 'Server Started' ) )

