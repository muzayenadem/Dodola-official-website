const  route  = require('./Routes/Route')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
// mongoose.connect(process.env.DATABASE)
// .then(()=>{
//     console.log('database successfully connected')
// })
.catch((err)=>{
    console.log(err.message)
})
const app = require('express')()

app.use(route)
app.listen(3600,()=>{
    console.log('succeed')
})