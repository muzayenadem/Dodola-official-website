const express = require('express')
const route = express.Router()

route.get('/',(req,res) =>{
    res.send(process.env.DATABASE)
    console.log('seems worked')
})

route.get('/data',(req,res) =>{
    res.send('booooooom')
})

module.exports = route