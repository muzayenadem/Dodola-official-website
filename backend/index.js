const express = require('express')
const  route  = require('./Routes/Route')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
dotenv.config({path:'./.env'})
mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('database successfully connected')
})
.catch((err)=>{
    console.log(err.message)
})



const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))

app.use(route)
app.listen(3600,()=>{
    console.log('succeed')
})