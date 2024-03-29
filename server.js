require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
       console.log("DB connection successful.");
    })
    .catch((err)=>{ 
       console.log(`DB connection error:${err}`);
    });

app.use(express.json());
const bpmRouter = require("./routes/BPMs");
app.use('/bpm',bpmRouter);
const spo2Router = require("./routes/SpO2");
app.use('/spo2',spo2Router);
const dataRouter = require("./routes/Data");
app.use('/data',dataRouter);

app.get("/", (req, res) => {
   res.send("Main page!");
 });

app.listen(process.env.PORT || 8080, () => {
   console.log( 'Server Started' )} )

